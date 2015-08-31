(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur')
    .service('FancyBlurResources', ['FancyBlurResourcesUrl', 'FancyDepthBars', 'PIXI', 'ViewportSize', function (BlurResourcesUrl, DepthBars, PIXI, ViewportSize) {
      this.get = get;
      this.init = init;

      ///////////////
      // Variables //
      ///////////////
      var
        isInit = false,
        blurContainer = new PIXI.Container(),
        blurredBackgroundsContainer = {
          small: new PIXI.Container(),
          large: new PIXI.Container()
        },
        blurredBackgrounds = {
          small: [],
          large: []
        };

      ////////////
      // Public //
      ////////////
      function get() {
        if (isInit === false) {
          throw 'FancyBlurResources module was not initialized correctly!';
        }

        return {
          blurContainer: blurContainer,
          blurredBackgrounds: blurredBackgrounds
        };
      }

      function init() {
        var stageWidth = getNormalizedStageWidth();

        populateBlurredBackgrounds(stageWidth);
        watchForResize(stageWidth);

        // The blurred backgrounds containers - these will get populated accordingly
        blurContainer.addChild(blurredBackgroundsContainer.small);
        blurContainer.addChild(blurredBackgroundsContainer.large);
        // The depth bars
        blurContainer.addChild(getDepthBarsBlurSprites());
        // The white overlay - no longer needed as the background images already
        // contain the white overlay
        // blurContainer.addChild(getWhiteOverlay());

        isInit = true;
      }

      /////////////
      // Private //
      /////////////
      function getNormalizedStageWidth(stageWidth) {
        if (angular.isDefined(stageWidth)) {
          return stageWidth > 1920 ? 2560 : 1920;
        } else {
          return getNormalizedStageWidth(ViewportSize.get().width);
        }
      }

      function getDepthBarsBlurSprites() {
        var container = new PIXI.Container();
        var depthBarsBlurSprites = DepthBars.getBlurSprites();

        container.addChild(depthBarsBlurSprites.top);
        container.addChild(depthBarsBlurSprites.left);
        container.addChild(depthBarsBlurSprites.right);

        return container;
      }

      function getWhiteOverlay() {
        var graphics = new PIXI.Graphics();

        graphics.beginFill(0xFFFFFF, 0.8);
        graphics.drawRect(0, 0, 2560, 1440);
        graphics.endFill();

        return graphics;
      }

      function populateBlurredBackgrounds(stageWidth) {
        var blurResourcesUrl = BlurResourcesUrl.get(stageWidth);

        var context = (stageWidth === 1920) ? 'small' : 'large';

        blurredBackgrounds[context][0] = new PIXI.Sprite(new PIXI.Texture.fromImage(blurResourcesUrl.firstSlide));
        blurredBackgrounds[context][1] = new PIXI.Sprite(new PIXI.Texture.fromImage(blurResourcesUrl.secondSlide));
        blurredBackgrounds[context][2] = new PIXI.Sprite(new PIXI.Texture.fromImage(blurResourcesUrl.thirdSlide));

        // Otherwise, the 1920 resources, may not cover the entire screen.
        blurredBackgrounds[context][0].width = 2560;
        blurredBackgrounds[context][1].width = 2560;
        blurredBackgrounds[context][2].width = 2560;
        blurredBackgrounds[context][0].height = 1440;
        blurredBackgrounds[context][1].height = 1440;
        blurredBackgrounds[context][2].height = 1440;

        blurredBackgroundsContainer[context].addChild(blurredBackgrounds[context][0]);
        blurredBackgroundsContainer[context].addChild(blurredBackgrounds[context][1]);
        blurredBackgroundsContainer[context].addChild(blurredBackgrounds[context][2]);
      }

      // Watches for resize and downloads the new resources if needed
      function watchForResize(stageWidth) {
        var callback = function (viewportSize) {
          var currentStageWidth = getNormalizedStageWidth(viewportSize.width);
          if (stageWidth !== currentStageWidth) {
            // There's a change. Download the new resources!
            populateBlurredBackgrounds(currentStageWidth);
            ViewportSize.offChange(callback);
          }
        };

        ViewportSize.onChange(callback, true);
      }
    }]);
})();
