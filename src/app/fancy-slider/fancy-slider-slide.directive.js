(function () {
  'use strict';

  angular
    .module('specific.fancy-slider')
    .directive('hypFancySliderSlide', function () {
      return {
        link: function (scope, iElement, iAttrs, controller) {
          var DIRECTIONS = ['bottom', 'center', 'left', 'right'];

          controller.registerSlide(new Directions(DIRECTIONS));

          /////////////
          // Private //
          /////////////

          function Directions() {
            var toReturn = {};

            for (var i = 0; i < DIRECTIONS.length; i++) {
              toReturn['to' + DIRECTIONS[i][0].toUpperCase() + DIRECTIONS[i].slice(1)] = new HandleDirection(DIRECTIONS[i]);
            }

            return toReturn;
          }

          function HandleDirection(direction) {
            return function (noTransition) {
              handleTransition(noTransition);

              removeAdditionalClasses();

              iElement.addClass(direction);
            };
          }

          function handleTransition(noTransition) {
            if (noTransition) {
              iElement.addClass('no-transition');
            } else {
              iElement.removeClass('no-transition');
            }
          }

          function removeAdditionalClasses() {
            for (var i = 0; i < DIRECTIONS.length; i++) {
              iElement.removeClass(DIRECTIONS[i]);
            }
          }
        },
        require: '^^hypFancySlider',
        restrict: 'A'
      };
    });
})();
