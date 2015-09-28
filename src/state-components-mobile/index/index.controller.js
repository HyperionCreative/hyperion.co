(function () {
  'use strict';

  angular
    .module('state.index')
    .controller('IndexCtrl', ['$scope', '$window', function ($scope, $window) {
      /////////////
      // Exports //
      /////////////
      $scope.onInit = onInit;
      $scope.footerText = '<p class="small-and-medium-only">More on <strong>Social Sites</strong></p><p class="large-only">See more projects on our <strong>Social Networks</strong></p>';

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
