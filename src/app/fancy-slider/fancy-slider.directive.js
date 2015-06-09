(function () {
  'use strict';

  angular
    .module('specific.fancy-slider')
    .directive('hypFancySlider', ['FancySliderResizer', 'MAX_SUPPORTED_WIDTH', 'MAX_SUPPORTED_HEIGHT', function (FancySliderResizer, MAX_SUPPORTED_WIDTH, MAX_SUPPORTED_HEIGHT) {
      return {
        controller: function () {
          // Functions
          this.registerSlide = registerSlide;

          // Private variables
          var slidesControllers = [];

          // Functions
          function registerSlide(slideController) {
            slidesControllers.push(slideController);
          }
        },
        link: function (scope, iElement) {
          var
            fancySlider = iElement,
            fancySliderContainer = angular.element(iElement[0].querySelector('.slides-container'));

          fancySlider.css({
            'max-height': MAX_SUPPORTED_HEIGHT + 'px',
            margin: '0 auto',
            'max-width': MAX_SUPPORTED_WIDTH + 'px'
          });

          fancySliderContainer.css({
            height: MAX_SUPPORTED_HEIGHT + 'px',
            width: MAX_SUPPORTED_WIDTH + 'px'
          });

          FancySliderResizer.onProportionChange(function (proportion) {
            fancySliderContainer.css({
              'margin-left': -(MAX_SUPPORTED_WIDTH * proportion / 2) + 'px',
              // todo add vendor prefixes
              'transform': 'scale(' + proportion + ',' + proportion + ')'
            });
          });
        },
        replace: false,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html',
        transclude: true
      };
    }]);
})();
