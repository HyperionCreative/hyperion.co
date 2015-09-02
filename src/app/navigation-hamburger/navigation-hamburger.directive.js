(function () {
  'use strict';

  angular
    .module('app.navigation-hamburger', [
      'common.simple-hoverable'
    ])
    .directive('hypNavigationHamburger', ['$rootScope', '$state', function ($rootScope, $state) {
      var currentState = {
        name: $state.current.name
      };

      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        currentState.name = toState.name;
      });

      return {
        link: function (scope) {
          scope.currentState = currentState;
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/navigation-hamburger/navigation-hamburger.html'
      };
    }]);
})();
