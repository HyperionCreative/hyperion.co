(function () {
  'use strict';

  angular
    .module('app.fancy-slider.slides', [])
    .directive('hypFancySliderSlide', function () {
      return {
        link: function () {
          // does it have any functionality?
        },
        replace: true,
        restrict: 'E',
        templateUrl: function (tElement, tAttrs) {
          if (angular.isUndefined(tAttrs.index)) {
            throw 'The slide\'s index must be defined!';
          }

          return 'app/fancy-slider/slides/slide-' + tAttrs.index + '.html';
        }
      };
    });
})();
