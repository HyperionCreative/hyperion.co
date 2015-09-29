(function () {
  'use strict';

  angular
    .module('common.preloader')
    .service('Preloader', ['$document', '$rootScope', 'PRELOADABLE_FILES', function ($document, $rootScope, PRELOADABLE_FILES) {
      this.addToQueue = addToQueue;
      this.getProgress = getProgress;
      this.getTotalProgress = getTotalProgress;
      this.start = start;

      ///////////////////
      // Configuration //
      ///////////////////
      var parallelDownloads = 4;

      ///////////////
      // Variables //
      ///////////////
      var queues = {};
      var appendLoadedImagesTo = angular.element($document[0].body);

      ////////////
      // Public //
      ////////////
      function addToQueue(queueName, path, priority) {
        // Defaults to 0 if the priority is not a number
        priority = angular.isNumber(priority) && isFinite(priority) ? priority : 0;

        // Create the new queue if it doesn't exist
        if (angular.isUndefined(queues[queueName])) {
          queues[queueName] = {
            files: {},

            sizeDownloaded: 0,
            sizeToDownload: 0
          };
        }

        // Create the new priority list if it doesn't exist
        if (angular.isUndefined(queues[queueName].files[priority])) {
          queues[queueName].files[priority] = [];
        }

        queues[queueName].sizeToDownload += PRELOADABLE_FILES[path];
        queues[queueName].files[priority].push(path);
      }

      function getProgress(queueName) {
        // So we don't divide by 0
        if (queues[queueName].sizeToDownload > 0) {
          return queues[queueName].sizeDownloaded / queues[queueName].sizeToDownload * 100;
        }

        return 0;
      }

      function getTotalProgress() {
        var
          totalSizeDownloaded = 0,
          totalSizeToDownload = 0;

        angular.forEach(queues, function (queue) {
          totalSizeDownloaded += queue.sizeDownloaded;
          totalSizeToDownload += queue.sizeToDownload;
        });

        // So we don't divide by 0
        if (totalSizeToDownload > 0) {
          return totalSizeDownloaded / totalSizeToDownload * 100;
        }

        return 0;
      }

      function start(queueName, onComplete) {
        var
          queue = queues[queueName],
          PathsArray = new QueueDecomposer(queue.files);

        var next = function () {
          (function (path) {
            if (angular.isDefined(path)) {
              var image = new Image();

              image.onload = function () {
                // Needed as we're outside of angular's scope
                $rootScope.$evalAsync(function () {
                  queue.sizeDownloaded += PRELOADABLE_FILES[path];

                  if (angular.isFunction(onComplete) && getProgress(queueName) === 100) {
                    onComplete();
                  }
                });

                // Appends the image to the body in order for the browser to
                // trully cache it.
                (function () {
                  appendLoadedImagesTo
                    .append('<img src="' + path + '" style="display: none;">');
                })();

                next();
              };

              image.onerror = function () {
                // Needed as we're outside of angular's scope
                $rootScope.$evalAsync(function () {
                  queue.sizeDownloaded += PRELOADABLE_FILES[path];

                  if (angular.isFunction(onComplete) && getProgress(queueName) === 100) {
                    onComplete();
                  }
                });

                next();
              };

              image.src = path;
            }
          })(PathsArray.shift());
        };

        for (var i = 0; i < parallelDownloads; i++) {
          next();
        }
      }

      /////////////
      // Private //
      /////////////

      // Transforms a queue into a download queue.
      // The download queue it's just an array with all the paths in the correct download order.
      function QueueDecomposer(elements) {
        // Gets all the priorities. They need to be converted to int as they're strings.
        var priorities = Object.keys(elements);
        for (var x = 0; x < priorities.length; x++) {
          priorities[x] = parseInt(priorities[x]);
        }

        // Sorts in descending order
        priorities.sort(function (a, b) {
          return b - a;
        });

        // Goes through each priority and composes the download queue
        var downloadQueue = [];
        for (var i = 0; i < priorities.length; i++) {
          for (var j = 0; j < elements[priorities[i]].length; j++) {
            downloadQueue.push(elements[priorities[i]][j]);
          }
        }

        return downloadQueue;
      }
    }]);
})();
