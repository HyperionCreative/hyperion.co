(function () {
  'use strict';

  angular
    .module('app.navigation-hamburger', [
      'common.simple-hoverable'
    ])
    .directive('hypNavigationHamburger', ['$rootScope', '$state', function ($rootScope, $state) {
      var currentState = {
        name: $state.current.name,
        classToAdd: getClassToAddValue($state.current.name)
      };

      function getClassToAddValue(toStateName) {
        if (toStateName.indexOf('root.sub-page-template.portfolio.') === 0) {
          return 'on-portfolio-item-page';
        } else {
          return '';
        }
      }

      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        currentState.name = toState.name;
        currentState.classToAdd = getClassToAddValue(toState.name);
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
