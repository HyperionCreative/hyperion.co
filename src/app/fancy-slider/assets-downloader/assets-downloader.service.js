(function () {
  'use strict';

  angular
    .module('app.fancy-slider.assets-downloader', [
      'common.preloader',
      'common.pixi'
    ])
    .service('FancyAssetsDownloader', ['PIXI', 'Preloader', function (PIXI, Preloader) {
      this.download = download;

      ///////////////
      // Variables //
      ///////////////
      var queueSuffix = 1;
      var queuePrefix = 'FancyAssetsDownloader';

      ////////////
      // Public //
      ////////////
      function download(urls, onComplete) {
        var currentQueueName = getQueueName();

        // Feeds the urls into the preloader.
        angular.forEach(urls, function (url) {
          Preloader.addToQueue(currentQueueName, url);
        });

        Preloader.start(currentQueueName, function () {
          // This solves a weird bug. Without these, when initializing a texture,
          // it would load the image again. Since the image is in cache, it will load
          // very fast. But this breaks the synchronicity of things,
          // causing texture.width and texture.height to be 0.
          // This is why we need a PIXI loader.
          var loader = new PIXI.loaders.Loader();

          // Feeds the urls into the loader.
          angular.forEach(urls, function (url) {
            // I don't know why, but the loader also requires the name of the resource.
            loader.add(url, url);
          });

          // When everything is loaded, call the fn. This will happen very fast
          // as the images are already loaded by the Preloader!
          loader.load(function () {
            onComplete();
          });
        });
      }

      /////////////
      // Private //
      /////////////
      function getQueueName() {
        var toReturn = queuePrefix + '-' + queueSuffix;

        // By incrementing the suffix we ensure that getQueueName will always
        // return an unique name.
        queueSuffix += 1;

        return toReturn;
      }
    }]);
})();
