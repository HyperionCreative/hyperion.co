(function () {
  'use strict';


  angular
    .module('common.google-analytics', [])
    .run(['$location', '$rootScope', '$timeout', function ($location, $rootScope, $timeout) {
      ///////////////
      // Run block //
      ///////////////
      $timeout(function () {
        tryToConnect(8, 250);
      }, 250);

      ///////////////
      // Functions //
      ///////////////
      function tryToConnect(retryCount, timeToSleep) {
        if (angular.isFunction(window.ga)) {
          connectToGA(window.ga);
        } else if (retryCount > 0) {
          setTimeout(function () {
            tryToConnect(retryCount - 1, timeToSleep);
          }, timeToSleep);
        }
      }

      function connectToGA(ga) {
        ga('create', 'UA-67881622-1', 'auto');
        ga('send', 'pageview');

        $rootScope.$on('$stateChangeSuccess', function () {
          ga('send', 'pageview', {
            page: $location.path()
          });
        });
      }
    }]);
})();
