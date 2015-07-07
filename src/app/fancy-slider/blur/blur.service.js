(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur')
    .service('BlurService', ['$timeout', function ($timeout) {
      this.blurAll = blurAll;
      this.unblurAll = unblurAll;

      this.getBlurStatus = getBlurStatus;

      // Important!!!
      // This is in sync with the values defined inside _base.scss under Fancy Slider Blur section!
      var ANIMATION_DURATION = 125;

      var isBlurred = false;

      function blurAll(onSuccess) {
        isBlurred = true;

        $timeout(onSuccess, ANIMATION_DURATION);
      }

      function unblurAll(onSuccess) {
        isBlurred = false;

        $timeout(onSuccess, ANIMATION_DURATION);
      }

      function getBlurStatus() {
        return isBlurred;
      }
    }]);
})();
