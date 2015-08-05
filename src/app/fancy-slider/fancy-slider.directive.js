(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', ['CssVendorPrefixer', 'FancySliderResizer', 'MAX_SUPPORTED_WIDTH', 'MAX_SUPPORTED_HEIGHT', function (CssVendorPrefixer, FancySliderResizer, MAX_SUPPORTED_WIDTH, MAX_SUPPORTED_HEIGHT) {
      return {
        link: function (scope, iElement) {
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    }]);
})();
