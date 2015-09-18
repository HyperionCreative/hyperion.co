(function () {
  'use strict';

  angular
    .module('app.http-error-handler', [])
    .run(['$location', '$rootScope', '$state', '$timeout', function ($location, $rootScope, $state, $timeout) {
      ///////////////
      // Variables //
      ///////////////
      var show404 = false;

      ///////////////
      // Functions //
      ///////////////
      function isFromAnUnknownURL() {
        var fromUrl = $location.path();
        var states = $state.get();
        var isKnown = false;

        for (var i = 0; i < states.length; i++) {
          if (states[i].url === fromUrl) {
            isKnown = true;
          }
        }

        return !isKnown;
      }

      //////////////
      // Run block //
      //////////////
      show404 = isFromAnUnknownURL();

      // This is more of a hack! Sometimes the http error may blink. This way
      // we make sure to initialize the
      $rootScope.$on('fancy-slider.ready', function () {
        // This only runs once!
        if (show404) {
          // We got a 404
          $rootScope.httpError = {
            show: true,
            code: '404',
            message: 'You were redirected to the homepage instead.',
            name: 'Page not found'
          };

          $timeout(function () {
            $rootScope.httpError.show = false;
          }, 2500);
        }
      });
    }]);
})();
