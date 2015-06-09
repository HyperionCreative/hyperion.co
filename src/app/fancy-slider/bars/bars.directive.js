(function () {
  'use strict';

  angular
    .module('specific.fancy-slider')
    .directive('hypFancySliderBars', ['FancySliderResizer', function (FancySliderResizer) {
      return {
        link: function (scope, iElement, iAttrs) {
          if (angular.isDefined(iAttrs.original)) {
            var target = angular.element(iElement[0].querySelectorAll('.bar'));

            FancySliderResizer.onProportionChange(function (proportion) {
              target.css({
                // todo add vendor prefixes
                'transform': 'scale(' + (1 / proportion) + ',' + (1 / proportion) + ')'
              });
            });
          }
        },
        replace: false,
        restrict: 'E',
        templateUrl: function (tElement, tAttrs) {
          if (angular.isDefined(tAttrs.blurred)) {
            return 'app/fancy-slider/bars/blurred.html';
          }

          return 'app/fancy-slider/bars/original.html';
        }
      };
    }]);
})();
