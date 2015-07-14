(function () {
  'use strict';

  angular
    .module('app.fancy-slider.slide-description', [])
    .directive('hypFancySliderSlideDescription', function () {
      return {
        link: function () {
          // todo this should change accordingly with the current slide!
          // maybe change the animation? I don't like Cristian's current one.
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/slide-description/slide-description.html'
      };
    });
})();
