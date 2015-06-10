(function () {
  'use strict';

  angular
    .module('specific.fancy-slider')
    .service('FancySliderBlurAnimator', ['AnimationFrame', function (AnimationFrame) {
      this.blur = blurAll;
      this.unblur = unblurAll;

      var SELECTORS = {
        OVERLAY: '#blur-overlay',
        BARS: {
          BLURRED: '.depth-bars.blurred',
          ORIGINAL: '.depth-bars.original'
        },
        IMAGES: {
          BLURRED: '.resource .blurred',
          ORIGINAL: '.resource .original'
        },
        SLIDES_DESCRIPTION: {
          BLURRED: '.slide-description #slide-description-blur-overlay',
          ORIGINAL: '.slide-description .overflow-container'
        }
      };

      function blurAll() {

      }

      function unblurAll() {

      }
    }]);
})();
