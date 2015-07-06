(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', function () {
      return {
        link: function () {
          // todo add functionality?
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    });
})();
