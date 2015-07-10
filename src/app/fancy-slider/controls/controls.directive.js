(function () {
  'use strict';

  angular
    .module('app.fancy-slider.controls', [])
    .directive('hypFancySliderControls', function () {
      return {
        link: function (scope, iElement, iAttrs, fancySliderController) {
          scope.changeLeft = fancySliderController.controls.changeLeft;
          scope.changeRight = fancySliderController.controls.changeRight;
        },
        replace: true,
        require: '^^hypFancySlider',
        restrict: 'E',
        scope: {},
        templateUrl: 'app/fancy-slider/controls/controls.html'
      };
    });
})();
