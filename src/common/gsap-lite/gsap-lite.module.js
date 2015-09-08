(function () {
  'use strict';

  /* jshint ignore:start */

  angular
    .module('common.gsap-lite', [])
    .constant('TweenLite', TweenLite)
    .constant('TweenTimelineLite', TimelineLite)
    .constant('TweenEasings', {
      Power1: Power1,
      Power2: Power2,
      Power3: Power3,
      Power4: Power4,
      Sine: Sine
    });

  /* jshint ignore:end */
})();
