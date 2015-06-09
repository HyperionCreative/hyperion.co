(function () {
  'use strict';

  angular
    .module('specific.fancy-slider')
    .directive('hypFancySlider', function () {
      return {
        controller: function () {
          // Functions
          this.registerSlide = registerSlide;

          // Private variables
          var slidesControllers = [];

          // Functions
          function registerSlide(slideController) {
            slidesControllers.push(slideController);
          }
        },
        link: function () {

        },
        restrict: 'A'
      };
    });
})();
