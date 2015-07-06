(function () {
  'use strict';

  angular
    .module('app.fancy-slider.depth-bars', [
      'common.css-vendor-prefixer'
    ])
    .directive('hypFancySliderDepthBars', ['CssVendorPrefixer', 'FancySliderResizer', function (CssVendorPrefixer, FancySliderResizer) {
      return {
        link: function (scope, iElement, iAttrs) {
          // todo shouldn't it add the scaling property to all bars?
          if (angular.isDefined(iAttrs.original)) {
            var target = angular.element(iElement[0].querySelectorAll('.bar'));

            FancySliderResizer.onProportionChange(function (proportion) {
              target.css(CssVendorPrefixer.prefixProperty('transform', 'scale(' + (1 / proportion) + ',' + (1 / proportion) + ')'));
            });
          }
        },
        replace: true,
        restrict: 'E',
        templateUrl: function (tElement, tAttrs) {
          if (angular.isDefined(tAttrs.blurred)) {
            return 'app/fancy-slider/depth-bars/blurred.html';
          }

          return 'app/fancy-slider/depth-bars/original.html';
        }
      };
    }]);
})();
