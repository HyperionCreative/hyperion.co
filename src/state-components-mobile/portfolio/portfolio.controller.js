(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .controller('PortfolioCtrl', ['$scope', '$state', '$window', function ($scope, $state, $window) {
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
        name: 'Grow'
      }];

      $scope.getStateUrl = $state.href;
      $scope.scrollToTop = scrollToTop;

      $scope.portfolioRsiOptions = {
        autoScaleSlider: true,
        autoScaleSliderWidth: 587,
        autoScaleSliderHeight: 391,
        loop: false,
        loopRewind: false,
        navigateByClick: false,
        slidesSpacing: 8,
        autoPlay: {
          enabled: true,
          stopAtAction: true,
          delay: 5000
        },
        visibleNearby: {
          enabled: false
        }
      };

      $scope.$on('$stateChangeSuccess', function (event, toState) {
        // Sets the navigation order in place
        for (var i = 0; i < navigationOrder.length; i++) {
          if (navigationOrder[i].href === toState.name) {
            $scope.current = navigationOrder[i];

            $scope.prev = navigationOrder[i - 1 < 0 ? navigationOrder.length - 1 : i - 1];
            $scope.next = navigationOrder[(i + 1) % navigationOrder.length];

            break;
          }
        }

        scrollToTop();
      });

      function scrollToTop() {
        $window.scrollTo(0, 0);
      }
    }]);
})();
