(function () {
  'use strict';

  angular
    .module('app.fancy-slider.depth-bars', [
      'common.css-vendor-prefixer'
    ])
    .directive('hypFancySliderDepthBars', ['CssVendorPrefixer', 'FancySliderResizer', function (CssVendorPrefixer, FancySliderResizer) {
      return {
        link: function (scope, iElement, iAttrs) {
          // todo shouldn't it add the scaling property to both blurred and 
          // unblurred bars?
          if (angular.isDefined(iAttrs.unblurred)) {
            var 
              barTop = angular.element(iElement[0].querySelectorAll('.bar.top')),
              barLeft = angular.element(iElement[0].querySelectorAll('.bar.left')),
              barRight = angular.element(iElement[0].querySelectorAll('.bar.right'));

            FancySliderResizer.onProportionChange(function (proportion) {
              barTop.css(CssVendorPrefixer.prefixProperty('transform', 'scale(1,' + (1 / proportion) + ')'));
              barLeft.css(CssVendorPrefixer.prefixProperty('transform', 'scale(' + (1 / proportion) + ',1)'));
              barRight.css(CssVendorPrefixer.prefixProperty('transform', 'scale(' + (1 / proportion) + ',1)'));
            });
          }
        },
        replace: false,
        restrict: 'A',
        templateUrl: function (tElement, tAttrs) {
          if (angular.isDefined(tAttrs.blurred)) {
            return 'app/fancy-slider/depth-bars/blurred.html';
          }

          return 'app/fancy-slider/depth-bars/unblurred.html';
        }
      };
    }]);
})();
