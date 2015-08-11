(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur', [
      'app.fancy-slider.assets-downloader',
      'common.gsap-lite',
      'common.pixi',
      'common.viewport-size'
    ]);
})();
