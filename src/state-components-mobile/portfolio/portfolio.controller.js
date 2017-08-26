(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .controller('PortfolioCtrl', ['$rootScope', '$scope', '$state', '$window', function ($rootScope, $scope, $state, $window) {
      ///////////////
      // Constants //
      ///////////////
      // The order of these matters. The href is the state name.
      var NAVIGATION_ORDER = [{
        href: 'portfolio.webfaction',
        imageSrc: 'assets/images/portfolio/webfaction/logo.png',
        imageStyle: {
          'width': '62.5%'
        },
        name: 'Webfaction'
      }, {
        href: 'portfolio.kartist',
        imageSrc: 'assets/images/portfolio/kartist/logo.png',
        imageStyle: {
          'margin-top': '4px',
          'width': '58%'
        },
        name: 'Kartist'
      }, {
        href: 'portfolio.pleo',
        imageSrc: 'assets/images/portfolio/pleo/logo.png',
        imageStyle: {
          'margin-top': '7px',
          'width': '55%'
        },
        name: 'Pleo'
      }, {
        href: 'portfolio.quizkick',
        imageSrc: 'assets/images/portfolio/quizkick/logo.png',
        imageStyle: {
          'margin-top': '4px',
          'width': '62%'
        },
        name: 'QuizKick'
      }, {
        href: 'portfolio.companyMood',
        imageSrc: 'assets/images/portfolio/company-mood/logo.png',
        imageStyle: {
          'width': '70%'
        },
        name: 'Company Mood'
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
          delay: $rootScope.isOnLargeScreen ? 3000 : 5000
        },
        visibleNearby: {
          enabled: false
        }
      };

      if ($rootScope.isOnLargeScreen) {
        PORTFOLIO_RSI_OPTIONS.autoScaleSlider = false;
      }

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
