(function () {
  'use strict';

  /* jshint ignore:start */

  jQuery.extend(jQuery.easing, {
    easeInOutQuad: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
      }

      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  });

  angular
    .module('common.jquery-knob', [])
    .directive('hypJqueryKnob', function () {
      return {
        link: function (scope, iElement) {
          var knob = iElement.children();

          knob.knob({
            // the default options
            min: 0,
            max: 100,
            step: 1,
            readOnly: true,

            // ui
            thickness: 0.02,
            displayInput: false,
            fgColor: '#a3d7e6',
            bgColor: 'transparent'
          });

          var prevAnimation = [];
          scope.$watch('value', function (newValue) {
            if (angular.isFunction(prevAnimation.stop)) {
              prevAnimation.stop();
            }

            prevAnimation = jQuery({
              value: parseInt(knob.val())
            }).animate({
              value: newValue
            }, {
              duration: 750,
              easing: 'easeInOutQuad',
              progress: function () {
                knob.val(this.value).trigger('change');
              }
            });
          });
        },
        replace: false,
        restrict: 'E',
        scope: {
          value: '='
        },
        template: '<input type="text" value="0">'
      };
    });

  /* jshint ignore:end */
})();
