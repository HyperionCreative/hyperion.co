(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur')
    .service('FancyBlur', ['FancyBlurControllers', 'FancyBlurInitializer', function (BlurControllers, BlurInitializer) {
      // This centralizes the api
      this.downloadAssets = BlurInitializer.downloadAssets;
      this.getControllers = BlurControllers.get;
      this.init = BlurInitializer.init;
      this.isBlurred = BlurControllers.isBlurred;
      this.isBlurring = BlurControllers.isBlurring;
    }]);
})();
