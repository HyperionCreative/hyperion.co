(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .service('FancyConfiguration', ['TweenLiteEasings', function (TweenLiteEasings) {
      // Animations
      this.ANIMATION_DURATION = 1.5; // 1500ms
      this.ANIMATION_EASING = TweenLiteEasings.Power3.easeInOut;

      // Resolutions interval
      this.MAX_WIDTH = 2560;
      this.MAX_HEIGHT = 1440;
      this.MIN_WIDTH = 1366;
      this.MIN_HEIGHT = 768;

      // Needed by depth bars to stick to the edge of the screen!
      this.GLOBAL_MIN_WIDTH = 1024;

      // Native resolutions
      this.NATIVE_WIDTH = 2560;
      this.NATIVE_HEIGHT = 1440;
    }]);
})();
