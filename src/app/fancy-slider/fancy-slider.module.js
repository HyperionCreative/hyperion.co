(function () {
  'use strict';

  // todo
  // 1. FF pe OSX trebuie fara RAF si fara AA 
  // 2. IE 11 (si lower presupun) pe Windows (asta era 7) trebuie cu RAF si AA disabled si fps 30

  angular
    .module('app.fancy-slider', [
      'app.fancy-slider.animations',
      'app.fancy-slider.blur',
      'app.fancy-slider.depth-bars',
      'app.fancy-slider.resizer',
      'app.fancy-slider.resources',
      'app.fancy-slider.slide-description',
      'common.pixi',
      'common.viewport-size'
    ]);
})();
