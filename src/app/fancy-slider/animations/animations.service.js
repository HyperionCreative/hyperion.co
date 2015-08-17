(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations')
    .service('FancyAnimations', ['FancyAnimationsControllers', 'FancyAnimationsInitializer', 'FancyAnimationsTimelines', function (AnimationsControllers, AnimationsInitializer, AnimationsTimelines) {
      // This centralizes the api
      // 
      this.getControllers = AnimationsControllers.get;
      this.getCurrentSlide = AnimationsControllers.getCurrentSlide;
      this.init = AnimationsInitializer.init;
      this.isAnimating = AnimationsControllers.isAnimating;
      this.setGlobalOnUpdate = AnimationsTimelines.setGlobalOnUpdate;
    }]);
})();
