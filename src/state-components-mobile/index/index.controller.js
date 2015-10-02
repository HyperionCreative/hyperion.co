(function () {
  'use strict';

  angular
    .module('state.index')
    .controller('IndexCtrl', ['$scope', '$state', '$window', 'PARSED_UA', function ($scope, $state, $window, PARSED_UA) {
      /////////////
      // Exports //
      /////////////
      $scope.isAppleDevice = PARSED_UA.device.vendor === 'Apple';
      $scope.onInit = onInit;
      $scope.footerText = '<p class="small-and-medium-only"><span class="normal-content">More on <strong>Social Sites</strong></span><span class="special-content">More projects on our <strong>Social Networks</strong></span></p><p class="large-only">Find more projects on our <strong>Social Networks</strong></p>';
      $scope.slidesHtml = [
        getSlide('assets/images/mobile/index-portfolio-slider/kartist.jpg', $state.href('portfolio.kartist')),
        getSlide('assets/images/mobile/index-portfolio-slider/quizkick.jpg', $state.href('portfolio.quizkick')),
        getSlide('assets/images/mobile/index-portfolio-slider/grow.jpg', $state.href('portfolio.grow')),
        getSlide('assets/images/mobile/index-portfolio-slider/anyvan.jpg', $state.href('portfolio.anyvan')),
      ];

      ////////////
      // Public //
      ////////////
      function onInit(rsi) {
        var viewportWidth = getViewportWidth();
        var expectedWidth = getExpectedSliderSide(viewportWidth);

        // "Inits" the slider!
        updateRoyalSlider(rsi, viewportWidth, expectedWidth);

        // No need to debounce this as the resize event will only get called
        // when the user turns the screen!
        angular.element($window).on('resize', function () {
          var temporaryViewportWidth = getViewportWidth();
          if (temporaryViewportWidth !== viewportWidth) {
            viewportWidth = temporaryViewportWidth;

            var temporaryExpectedWidth = getExpectedSliderSide(viewportWidth);
            if (temporaryExpectedWidth !== expectedWidth) {
              expectedWidth = temporaryExpectedWidth;
            }

            updateRoyalSlider(rsi, viewportWidth, expectedWidth);
          }
        });
      }

      /////////////
      // Private //
      /////////////
      function getSlide(imageUrl, href) {
        return '<a class="rsContent" href="' + href + '"><img src="' + imageUrl + '" class="rsImg"></a>';
      }

      function getViewportWidth() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }

      // todo remember that this is in direct dependency with the container size
      // and the breakpoints which are defined in main-mobile.scss
      function getExpectedSliderSide(width) {
        if (width >= 768) {
          return Math.min(width * 0.675, 520);
        } else if (width <= 320) {
          return Math.min(width * 0.875, 280);
        } else {
          return Math.min(width * 0.85, 350);
        }
      }

      function updateRoyalSlider(rsi, viewportWidth, expectedWidth) {
        rsi.st.visibleNearby.centerArea = expectedWidth / viewportWidth;

        // Triggers the update
        rsi.updateSliderSize(true);
      }
    }]);
})();
