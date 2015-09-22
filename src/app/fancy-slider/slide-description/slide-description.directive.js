(function () {
  'use strict';

  angular
    .module('app.fancy-slider.slide-description', [
      'common.simple-hoverable'
    ])
    .directive('hypFancySliderSlideDescription', function () {
      return {
        link: function () {
          // todo because of my laziness I've violated some of the basic
          // principles of software architecture. The code which changes the
          // slide description is hardcoded inside animations/timelines.service.js
          // Sorry future me :(
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/slide-description/slide-description.html'
      };
    });
})();
