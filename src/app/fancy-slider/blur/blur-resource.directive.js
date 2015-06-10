(function () {
  'use strict';

  angular
    .module('specific.fancy-slider')
    .directive('hypFancySliderBlurResource', ['FancySliderBlurAnimator', function (FancySliderBlurAnimator) {
      return {
        link: function (scope, iElement, iAttrs) {
          if (iAttrs.type === 'blurred') {
            FancySliderBlurAnimator.registerBlurResource(iElement, true);
          } else {
            FancySliderBlurAnimator.registerBlurResource(iElement, false);
          }
        },
        restrict: 'A',
      };
    }]);
})();
