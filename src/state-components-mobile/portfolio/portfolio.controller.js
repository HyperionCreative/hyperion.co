(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .controller('PortfolioCtrl', ['$scope', '$state', '$window', function ($scope, $state, $window) {
      ///////////////
      // Constants //
      ///////////////
      // The order of these matters. The href is the state name.
      var NAVIGATION_ORDER = [{
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

      var PORTFOLIO_RSI_OPTIONS = {
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

      /////////////////////
      // $scope bindings //
      /////////////////////
      $scope.getStateUrl = $state.href;
      $scope.portfolioRsiOptions = PORTFOLIO_RSI_OPTIONS;
      $scope.scrollToTop = scrollToTop;

      ///////////////
      // Run block //
      ///////////////
      $scope.$on('$stateChangeSuccess', function (event, toState) {
        // Sets the navigation order in place
        for (var i = 0; i < NAVIGATION_ORDER.length; i++) {
          if (NAVIGATION_ORDER[i].href === toState.name) {
            $scope.current = NAVIGATION_ORDER[i];

            $scope.prev = NAVIGATION_ORDER[i - 1 < 0 ? NAVIGATION_ORDER.length - 1 : i - 1];
            $scope.next = NAVIGATION_ORDER[(i + 1) % NAVIGATION_ORDER.length];

            break;
          }
        }

        // Scrolls to the top
        scrollToTop();
      });

      ///////////////
      // Functions //
      ///////////////
      function scrollToTop() {
        $window.scrollTo(0, 0);
      }
    }]);
})();
