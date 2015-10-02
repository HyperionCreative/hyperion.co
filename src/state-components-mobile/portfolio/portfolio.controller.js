(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .controller('PortfolioCtrl', ['$scope', '$state', function ($scope, $state) {
      // The order of these matters.
      // The href is the state name.
      var navigationOrder = [{
        href: 'portfolio.kartist',
        imageSrc: 'assets/images/portfolio/kartist/logo.png',
        name: 'Kartist'
      }, {
        href: 'portfolio.quizkick',
        imageSrc: 'assets/images/portfolio/quizkick/logo.png',
        name: 'QuizKick'
      }, {
        href: 'portfolio.anyvan',
        imageSrc: 'assets/images/portfolio/anyvan/logo.png',
        name: 'AnyVan'
      }, {
        href: 'portfolio.grow',
        imageSrc: 'assets/images/portfolio/grow/logo.png',
        name: 'Grow with a CFO'
      }];

      $scope.getStateUrl = $state.href;

      $scope.portfolioRsiOptions = {
        autoScaleSlider: true,
        autoScaleSliderWidth: 587,
        autoScaleSliderHeight: 391,
        navigateByClick: false,
        slidesSpacing: 8,
        autoPlay: {
          enabled: true,
          stopAtAction: true,
          delay: 3000
        },
        visibleNearby: {
          enabled: false
        }
      };

      $scope.$on('$stateChangeSuccess', function (event, toState) {
        for (var i = 0; i < navigationOrder.length; i++) {
          if (navigationOrder[i].href === toState.name) {
            $scope.current = navigationOrder[i];

            $scope.prev = navigationOrder[i - 1 < 0 ? navigationOrder.length - 1 : i - 1];
            $scope.next = navigationOrder[(i + 1) % navigationOrder.length];

            break;
          }
        }
      });
    }]);
})();
