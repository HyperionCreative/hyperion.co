(function () {
  'use strict';

  angular
    .module('common.gsap-lite', [])
    .constant('TweenLite', window.TweenLite)
    .constant('TweenTimelineLite', window.TimelineLite)
    .constant('TweenEasings', {
      Linear: window.Power0.easeNone,
      Power1: window.Power1,
      Power2: window.Power2,
      Power3: window.Power3,
      Power4: window.Power4,
      Sine: window.Sine
    });
})();
