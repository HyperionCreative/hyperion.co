(function () {
  'use strict';

  angular
    .module('specific.fancy-slider', [
      'app.fancy-slider.animations',
      'app.fancy-slider.controls',
      'specific.fancy-slider.depth-bars',
      'app.fancy-slider.resizer'
    ]);
})();
