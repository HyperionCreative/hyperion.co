(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations', [])
    .directive('hypFancySliderAnimations', function () {
      return {
        link: function () {
          // todo this should change the class accordingly
        },
        replace: false,
        // todo uncomment this
        // require: '^^hypFancySlider',
        restrict: 'A'
      };
    });
})();
