(function () {
  'use strict';

  // todo
  // 1. FF pe OSX trebuie fara RAF si fara AA
  // 2. IE pe Windows trebuie cu RAF si AA disabled si fps 30

  angular
    .module('app.fancy-slider', [
      'app.fancy-slider.animations',
      'app.fancy-slider.depth-bars',
      'app.fancy-slider.resizer',
      'app.fancy-slider.resources',
      'common.pixi'
    ]);
})();
