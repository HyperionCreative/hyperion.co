(function () {
  'use strict';

  angular
    .module('specific.fancy-slider')
    .directive('hypFancySliderSlidesDescription', function () {
      return {
        link: function () {
          // todo this must act as slideshow. each slide change must change the description.
        },
        replace: false,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/slides-description/slides-description.html'
      };
    });
})();
