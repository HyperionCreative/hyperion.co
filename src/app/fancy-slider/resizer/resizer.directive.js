(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resizer')
    .directive('hypFancyResizer', ['CssVendorPrefixer', 'FancyConfiguration', 'FancyResizer', function (CssVendorPrefixer, Configuration, ResizerService) {
      return {
        link: function (scope, iElement) {
          // Sets the original size
          iElement.css({
            height: Configuration.NATIVE_HEIGHT + 'px',
            width: Configuration.NATIVE_WIDTH + 'px',
          });

          ResizerService.onProportionChange(function (proportion) {
            iElement.css({
              'margin-left': -(Configuration.NATIVE_WIDTH * proportion / 2) + 'px',
            });

            iElement.css(CssVendorPrefixer.prefixProperty('transform', 'translate3d(0,0,0) scale(' + proportion + ',' + proportion + ')'));
          });
        },
        restrict: 'A'
      };
    }]);
})();
