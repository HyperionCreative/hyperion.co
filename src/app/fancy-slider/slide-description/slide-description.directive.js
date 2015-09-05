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
        // todo An important thing to remember: This is used by TweenLite.
        // Most of the assets are cached! Html, in its nature, it's not!
        // A returning visitor may have all the needed resources and thus the page will
        // start immediately. Since the template of this directive may not be loaded,
        // TweenLite will throw an error (Uncaught Cannot tween a null target.) thus breaking
        // the whole app.
        // This is fixed with ngtemplates.
        templateUrl: 'app/fancy-slider/slide-description/slide-description.html'
      };
    });
})();
