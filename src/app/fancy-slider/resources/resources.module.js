(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources', [
      'app.fancy-slider.assets-downloader',
      'common.pixi',
      'common.retina-images',
      'common.viewport-size'
    ]);
})();
