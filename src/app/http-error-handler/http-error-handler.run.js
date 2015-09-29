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
        var absUrl = $location.absUrl();
        var path = $location.path();

        var host = absUrl.replace(new RegExp(path + '$'), '');
        var states = $state.get();

        for (var i = 0; i < states.length; i++) {
          var stateAbsUrl = $state.href(states[i].name, {}, {
            absolute: true
          });

          if (angular.isString(stateAbsUrl)) {
            var statePath = stateAbsUrl.replace(new RegExp('^' + host), '');
            if (statePath === path) {
              // It has found the state!
              return false;
            }
          }
        }

        // If it gets here then it hasn't found the state with the current path!
        return true;
      }

      //////////////
      // Run block //
      //////////////
      show404 = isFromAnUnknownURL();

      // This is more of a hack! Sometimes the http error may blink.
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
          }, 5000);
        }
      });
    }]);
})();
