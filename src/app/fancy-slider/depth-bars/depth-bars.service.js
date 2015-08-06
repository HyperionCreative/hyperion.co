(function () {
  'use strict';

  angular
    .module('app.fancy-slider.depth-bars', [])
    .service('FancyDepthBars', ['PIXI', 'FancyConfiguration', function (PIXI, Configuration) {
      this.get = get;

      ///////////////////
      // Configuration //
      ///////////////////
      var COLOR = 0xFFFFFF;
      var LATERAL_BAR_WIDTH = 40;

      ////////////
      // Public //
      ////////////
      function get() {
        var topBar = drawRectangle(COLOR, 0, 0, Configuration.NATIVE_WIDTH, (function () {
          // Forgive me God for I have sinned!
          return document.querySelector('.header-index-container').clientHeight;
        })());
        var leftBar = drawRectangle(COLOR, 0, 0, LATERAL_BAR_WIDTH, Configuration.NATIVE_HEIGHT);
        var rightBar = drawRectangle(COLOR, Configuration.NATIVE_WIDTH - LATERAL_BAR_WIDTH, 0, LATERAL_BAR_WIDTH, Configuration.NATIVE_HEIGHT);

        return {
          top: topBar,
          left: leftBar,
          right: rightBar
        };
      }

      /////////////
      // Private //
      /////////////
      function drawRectangle(color, x, y, width, height) {
        var graphics = new PIXI.Graphics();

        graphics.beginFill(color);
        graphics.drawRect(x, y, width, height);

        return graphics;
      }
    }]);
})();
