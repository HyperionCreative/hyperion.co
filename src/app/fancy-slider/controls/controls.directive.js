(function () {
  'use strict';

  angular
    .module('app.fancy-slider.controls', [])
    .directive('hypFancySliderControls', function () {
      return {
        link: function (scope, iElement, iAttrs, fancySliderController) {
          scope.changeLeft = fancySliderController.changeLeft;
          scope.changeRight = fancySliderController.changeRight;
        },
        replace: true,
        require: '^^hypFancySlider',
        restrict: 'E',
        scope: {},
        templateUrl: 'app/fancy-slider/controls/controls.html'
      };
    });
})();
