(function () {
  'use strict';

  angular
    .module('app.fancy-slider.depth-bars', [
      'app.fancy-slider.assets-downloader',
      'app.fancy-slider.resizer',
      'common.pixi',
      'common.viewport-size'
    ])
    .service('FancyDepthBars', ['$q', 'PIXI', 'FancyAssetsDownloader', 'FancyConfiguration', 'FancyDepthBarsBlurSpritesUrl', 'FancyResizer', 'ViewportSize', function ($q, PIXI, AssetsDownloader, Configuration, DepthBarsUrl, SliderResizer, ViewportSize) {
      this.get = get;
      this.init = init;

      ///////////////////
      // Configuration //
      ///////////////////
      var COLOR = 0xFFFFFF;
      var LATERAL_BAR_WIDTH = 40;
      var TOP_BAR_HEIGHT = 60;

      ///////////////
      // Variables //
      ///////////////
      var depthBars;

      ////////////
      // Public //
      ////////////
      function get() {
        if (angular.isUndefined(depthBars)) {
          throw 'FancyDepthBars module was not initialized correctly!';
        }

        return depthBars;
      }

      function init() {
        var deferred = $q.defer();

        AssetsDownloader.download(DepthBarsUrl.getAsArray(), function () {
          depthBars = getDepthBars();

          deferred.resolve();
        });

        return deferred.promise;
      }

      /////////////
      // Private //
      /////////////
      function getDepthBars() {
        // The containers - these contain the blur sprite and the white rectangle
        var
          topContainer = new PIXI.Container(),
          leftContainer = new PIXI.Container(),
          rightContainer = new PIXI.Container();

        // Sets the z-index;
        topContainer.zIndex = 30;
        leftContainer.zIndex = 1;
        rightContainer.zIndex = 100;

        // The bars
        var
          topBar = drawRectangle(COLOR, Configuration.NATIVE_WIDTH, TOP_BAR_HEIGHT),
          leftBar = drawRectangle(COLOR, LATERAL_BAR_WIDTH, Configuration.NATIVE_HEIGHT),
          rightBar = drawRectangle(COLOR, LATERAL_BAR_WIDTH, Configuration.NATIVE_HEIGHT);

        // Adds the bars to their specific container
        topContainer.addChild(topBar);
        leftContainer.addChild(leftBar);
        rightContainer.addChild(rightBar);

        // The right bar is placed "inside" the viewport
        rightBar.x = -rightBar.width;

        // The blur sprites - EXPERIMENTAL
        var topBlur, leftCornerBlur, rightCornerBlur, leftEdge, rightEdge;
        (function () {
          var blurSpritesUrl = DepthBarsUrl.get();

          var
            corner = new PIXI.Texture.fromImage(blurSpritesUrl.corner),
            edge = new PIXI.Texture.fromImage(blurSpritesUrl.edge),
            top = new PIXI.Texture.fromImage(blurSpritesUrl.top);

          topBlur = new PIXI.extras.TilingSprite(top, Configuration.NATIVE_WIDTH - 2 * corner.width, top.height);

          rightCornerBlur = new PIXI.Sprite(corner);
          rightCornerBlur.x = -corner.width;
          leftCornerBlur = new PIXI.Sprite(corner);
          leftCornerBlur.anchor.x = 1;
          leftCornerBlur.scale.x = -1;

          rightEdge = new PIXI.extras.TilingSprite(edge, edge.width, Configuration.NATIVE_HEIGHT);
          rightEdge.y = corner.height;
          rightEdge.x = -edge.width;
          leftEdge = new PIXI.extras.TilingSprite(edge, edge.width, Configuration.NATIVE_HEIGHT);
          leftEdge.y = corner.height;
          leftEdge.anchor.x = 1;
          leftEdge.scale.x = -1;

          // Appends the blur sprites
          topContainer.addChild(topBlur);
          rightContainer.addChild(rightCornerBlur);
          rightContainer.addChild(rightEdge);
          leftContainer.addChild(leftCornerBlur);
          leftContainer.addChild(leftEdge);
        })();

        // This prevents the bars from scaling.
        SliderResizer.onProportionChange(function (proportion) {
          // Sets the new scale
          topContainer.scale.y = 1 / proportion;
          leftContainer.scale.x = 1 / proportion;
          rightContainer.scale.x = 1 / proportion;
        });

        // This recalculates the containers' position on each resize
        ViewportSize.onChange(function (size) {
          if (size.width >= 1920) {
            leftContainer.visible = true;
            rightContainer.visible = true;

            var proportion = SliderResizer.getProportion();
            var currentStageWidth = Configuration.NATIVE_WIDTH * proportion;
            var currentScreenSize = size.width < Configuration.GLOBAL_MIN_WIDTH ? Configuration.GLOBAL_MIN_WIDTH : size.width;
            var currentLateralOffset = Math.abs((currentScreenSize - currentStageWidth) / 2);

            if (size.width === 1920) {
              // Substracts 10px to make the bars 30px wide
              leftContainer.x -= 10 * (1 / proportion);
              rightContainer.x += 10 * (1 / proportion);
            }

            leftContainer.x = Math.floor(currentLateralOffset * (1 / proportion));
            rightContainer.x = Math.ceil(Configuration.NATIVE_WIDTH - (currentLateralOffset * (1 / proportion)));

            // Normalizes the width - I don't know why but the leftContainer width is double
            // I fix this by / 2!!
            leftContainer.width = 2 * Math.round(leftContainer.width / 2);
            rightContainer.width = leftContainer.width / 2;

            // Normalizes the Y scale - this is needed by the corner sprite
            leftContainer.scale.y = leftContainer.scale.x;
            rightContainer.scale.y = rightContainer.scale.x;

            // Only the top blur sprite needs to be redrawn
            topBlur.width = Configuration.NATIVE_WIDTH - 2 * rightContainer.width - 2 * leftContainer.x;
            topBlur.x = leftContainer.x + (leftContainer.width / 2);
          } else {
            leftContainer.visible = false;
            rightContainer.visible = false;

            topBlur.width = Configuration.NATIVE_WIDTH;
            topBlur.x = 0;
          }
        });

        return {
          top: topContainer,
          left: leftContainer,
          right: rightContainer
        };
      }

      function drawRectangle(color, width, height) {
        var graphics = new PIXI.Graphics();

        graphics.beginFill(color);
        graphics.drawRect(0, 0, width, height);

        return graphics;
      }
    }]);
})();
