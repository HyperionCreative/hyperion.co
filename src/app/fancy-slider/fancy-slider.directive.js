(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', ['CssVendorPrefixer', 'FancySliderResizer', 'MAX_SUPPORTED_WIDTH', 'MAX_SUPPORTED_HEIGHT', function (CssVendorPrefixer, FancySliderResizer, MAX_SUPPORTED_WIDTH, MAX_SUPPORTED_HEIGHT) {
      return {
        controller: function () {
          this.changeLeft = changeLeft;
          this.changeRight = changeRight;

          function changeLeft () {
            console.log('change left');
          }

          function changeRight () {
            console.log('change right');
          }
        },
        link: function (scope, iElement) {
          var slidesContainer = angular.element(iElement[0].querySelector('.slides-container'));

          // Sets the base resolution
          slidesContainer.css({
            height: MAX_SUPPORTED_HEIGHT + 'px',
            width: MAX_SUPPORTED_WIDTH + 'px'
          });

          FancySliderResizer.onProportionChange(function (proportion) {
            slidesContainer.css({
              'margin-left': -(MAX_SUPPORTED_WIDTH * proportion / 2) + 'px',
            });

            slidesContainer.css(CssVendorPrefixer.prefixProperty('transform', 'scale(' + proportion + ',' + proportion + ')'));
          });
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    }]);
})();
