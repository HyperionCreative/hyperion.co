(function () {
  'use strict';

  angular
    .module('app.fancy-slider.depth-bars')
    .service('FancyDepthBars', ['$q', 'PIXI', 'FancyAssetsDownloader', 'FancyConfiguration', 'FancyDepthBarsBlurSpritesUrl', 'FancyResizer', 'ViewportSize', function ($q, PIXI, AssetsDownloader, Configuration, DepthBarsUrl, SliderResizer, ViewportSize) {
      this.get = get;
      this.getBlurSprites = getBlurSprites;
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
      var depthBars, blurSprites;

      ////////////
      // Public //
      ////////////
      function get() {
        if (angular.isUndefined(depthBars)) {
          throw 'FancyDepthBars module was not initialized correctly!';
        }

        return depthBars;
      }

      function getBlurSprites() {
        if (angular.isUndefined(blurSprites)) {
          throw 'FancyDepthBars module was not initialized correctly!';
        }

        return blurSprites;
      }

      function init(stage, renderer) {
        var deferred = $q.defer();

        AssetsDownloader.download(DepthBarsUrl.getAsArray(), function () {
          depthBars = createDepthBars();
          blurSprites = createBlurSprites();

          onSliderResize(depthBars, blurSprites, stage, renderer);

          // Adds the depth bars to the stage.
          angular.forEach(depthBars, function (depthBar) {
            stage.addChild(depthBar);
          });

          deferred.resolve();
        });

        return deferred.promise;
      }

      /////////////
      // Private //
      /////////////
      function createDepthBars() {
        // The containers
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

        return {
          top: topContainer,
          left: leftContainer,
          right: rightContainer
        };
      }

      function createBlurSprites() {
        // The containers
        var
          topContainer = new PIXI.Container(),
          leftContainer = new PIXI.Container(),
          rightContainer = new PIXI.Container();

        // The urls
        var blurSpritesUrl = DepthBarsUrl.get();

        // The textures
        var
          corner = new PIXI.Texture.fromImage(blurSpritesUrl.corner),
          edge = new PIXI.Texture.fromImage(blurSpritesUrl.edge),
          top = new PIXI.Texture.fromImage(blurSpritesUrl.top);

        var topBlur = new PIXI.extras.TilingSprite(top, Configuration.NATIVE_WIDTH - 2 * corner.width, top.height);

        var rightCornerBlur = new PIXI.Sprite(corner);
        rightCornerBlur.x = -corner.width;
        var leftCornerBlur = new PIXI.Sprite(corner);
        leftCornerBlur.anchor.x = 1;
        leftCornerBlur.scale.x = -1;

        var rightEdge = new PIXI.extras.TilingSprite(edge, edge.width, Configuration.NATIVE_HEIGHT);
        rightEdge.y = corner.height;
        rightEdge.x = -edge.width;
        var leftEdge = new PIXI.extras.TilingSprite(edge, edge.width, Configuration.NATIVE_HEIGHT);
        leftEdge.y = corner.height;
        leftEdge.anchor.x = 1;
        leftEdge.scale.x = -1;

        // Appends the blur sprites
        topContainer.addChild(topBlur);
        rightContainer.addChild(rightCornerBlur);
        rightContainer.addChild(rightEdge);
        leftContainer.addChild(leftCornerBlur);
        leftContainer.addChild(leftEdge);

        return {
          top: topContainer,
          left: leftContainer,
          right: rightContainer
        };
      }

      function onSliderResize(depthBars, blurSprites, stage, renderer) {
        function handleProportionChange(parent, proportion) {
          parent.top.scale.y = 1 / proportion;
          parent.left.scale.x = 1 / proportion;
          parent.right.scale.x = 1 / proportion;
        }

        function setLateralContainersVisibility(parent, visible) {
          parent.left.visible = visible;
          parent.right.visible = visible;
        }

        function substractLateralOffset(parent, proportion, toSubstract) {
          parent.left.x -= toSubstract * (1 / proportion);
          parent.right.x += toSubstract * (1 / proportion);
        }

        function setLateralOffset(parent, lateralOffset) {
          parent.left.x = Math.floor(lateralOffset);
          parent.right.x = Math.ceil(Configuration.NATIVE_WIDTH - lateralOffset);

          // Normalizes the width
          parent.left.width = Math.ceil(parent.left.width);
          parent.right.width = Math.floor(parent.right.width);
        }

        // This prevents the bars from scaling.
        SliderResizer.onProportionChange(function (proportion) {
          // Sets the new scale
          handleProportionChange(depthBars, proportion);
          handleProportionChange(blurSprites, proportion);
        });

        // This recalculates the containers' position on each resize
        ViewportSize.onChange(function (size) {
          if (size.width >= 1920) {
            var
              proportion = SliderResizer.getProportion(),
              currentStageWidth = Configuration.NATIVE_WIDTH * proportion,
              currentScreenSize = size.width < Configuration.GLOBAL_MIN_WIDTH ? Configuration.GLOBAL_MIN_WIDTH : size.width,
              currentLateralOffset = Math.abs((currentScreenSize - currentStageWidth) / 2) * (1 / proportion);

            setLateralContainersVisibility(depthBars, true);
            setLateralContainersVisibility(blurSprites, true);

            setLateralOffset(depthBars, currentLateralOffset);
            setLateralOffset(blurSprites, currentLateralOffset);

            if (size.width === 1920) {
              // Substracts 10px to make the bars 30px wide
              substractLateralOffset(depthBars, proportion, 10);
              substractLateralOffset(blurSprites, proportion, 10);
            }

            // Normalizes the Y scale - this is needed by the corner sprite
            blurSprites.left.scale.y = 1 / proportion;
            blurSprites.right.scale.y = 1 / proportion;
            // This way the lateral edge will always stretch to fit the canvas
            blurSprites.left.children[1].scale.y = proportion;
            blurSprites.right.children[1].scale.y = proportion;

            // Only the top blur sprite needs to be redrawn
            blurSprites.top.width = Configuration.NATIVE_WIDTH - 2 * (blurSprites.right.width + blurSprites.left.x);
            blurSprites.top.x = blurSprites.left.x + blurSprites.right.width;
          } else {
            setLateralContainersVisibility(depthBars, false);
            setLateralContainersVisibility(blurSprites, false);

            blurSprites.top.width = Configuration.NATIVE_WIDTH;
            blurSprites.top.x = 0;
          }

          // These is needed in order to render the bar changes if the window gets resized.
          renderer.render(stage);
        });
      }

      function drawRectangle(color, width, height) {
        var graphics = new PIXI.Graphics();

        graphics.beginFill(color);
        graphics.drawRect(0, 0, width, height);
        graphics.endFill();

        return graphics;
      }
    }]);
})();
