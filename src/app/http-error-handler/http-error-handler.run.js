(function () {
  'use strict';

  // todo this is buggy. I should change the detection mechanism. It fails for
  // http://www.hyperion.co/portfolio/design which is not a valid state; and for
  // other cases.

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
          // Since states[i].url only contain the specific state url (for example,
          // /design for root.sub-page-template.expertise.design), this may
          // misbehave.
          if (angular.isString(states[i].url) && fromUrl.indexOf(states[i].url) === fromUrl.length - states[i].url.length) {
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
