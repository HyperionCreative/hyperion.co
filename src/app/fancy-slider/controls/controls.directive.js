(function () {
  'use strict';

  angular
    .module('app.fancy-slider.controls', [])
    .directive('hypFancySliderControls', function () {
      return {
        link: function (scope) {
          // todo link this
          
          scope.changeLeft = changeLeft;
          scope.changeRight = changeRight;

          function changeLeft() {
            console.log('left');
          }

          function changeRight() {
            console.log('right');
          }
        },
        replace: true,
        // todo uncomment this
        // require: '^^hypFancySlider',
        restrict: 'E',
        scope: {},
        templateUrl: 'app/fancy-slider/controls/controls.html'
      };
    });
})();
