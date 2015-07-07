(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur')
    .service('BlurService', function () {
      this.blurAll = blurAll;
      this.unblurAll = unblurAll;

      this.getBlurStatus = getBlurStatus;

      var isBlurred = false;

      function blurAll (transitionDuration, onSuccess) {
        isBlurred = true;
      }

      function unblurAll (transitionDuration, onSuccess) {
        isBlurred = false;
      }

      function getBlurStatus() {
        return isBlurred;
      }
    });
})();
