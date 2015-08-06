(function () {
  'use strict';

  angular
    .module('app.fancy-slider', [
      'app.fancy-slider.animations',
      'app.fancy-slider.depth-bars',
      'app.fancy-slider.resizer',
      'app.fancy-slider.resources',
      'common.css-vendor-prefixer',
      'common.pixi'
    ]);
})();
