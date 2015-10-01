(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .controller('PortfolioCtrl', ['$scope', '$state', function ($scope, $state) {
      // The order of these matters.
      // The href is the state name.
      var navigationOrder = [{
        href: 'portfolio.kartist',
        name: 'Kartist'
      }, {
        href: 'portfolio.quizkick',
        name: 'QuizKick'
      }, {
        href: 'portfolio.anyvan',
        name: 'AnyVan'
      }, {
        href: 'portfolio.grow',
        name: 'Grow with a CFO'
      }];

      $scope.getStateUrl = $state.href;

      $scope.$on('$stateChangeSuccess', function (event, toState) {
        for (var i = 0; i < navigationOrder.length; i++) {
          if (navigationOrder[i].href === toState.name) {
            $scope.prev = navigationOrder[i - 1 < 0 ? navigationOrder.length - 1 : i - 1];
            $scope.next = navigationOrder[(i + 1) % navigationOrder.length];

            break;
          }
        }
      });
    }]);
})();
