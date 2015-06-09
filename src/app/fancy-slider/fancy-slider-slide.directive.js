(function () {
  'use strict';

  angular
    .module('specific.fancy-slider')
    .directive('hypFancySliderSlide', function () {
      return {
        link: function (scope, iElement, iAttrs, controller) {
          var directions = ['bottom', 'center', 'left', 'right'];

          controller.registerSlide(new Directions(directions));

          /////////////
          // Private //
          /////////////

          function Directions(directions) {
            var toReturn = {};

            for (var i = 0; i < directions.length; i++) {
              toReturn['to' + directions[i][0].toUpperCase() + directions[i].slice(1)] = new HandleDirection(directions[i]);
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
            for (var i = 0; i < directions.length; i++) {
              iElement.removeClass(directions[i]);
            }
          }
        },
        require: '^^hypFancySlider',
        restrict: 'A'
      };
    });
})();
