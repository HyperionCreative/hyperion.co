(function () {
  'use strict';

  // todo
  // this is a reminder that this module doesn't support viewport resize.

  angular
    .module('app.fancy-slider.blur')
    .service('FancyBlur', ['$q', 'FancyAssetsDownloader', 'FancyBlurResourcesUrl', 'FancyDepthBars', 'PIXI', function ($q, AssetsDownloader, BlurResourcesUrl, DepthBars, PIXI) {
      this.get = get;
      this.init = init;

      ///////////////
      // Variables //
      ///////////////
      var blurResources;

      ////////////
      // Public //
      ////////////
      function get() {
        if (angular.isUndefined(blurResources)) {
          throw 'FancyBlur module was not initialized correctly!';
        }

        return blurResources;
      }

      function init() {
        var deferred = $q.defer();

        AssetsDownloader.download(BlurResourcesUrl.getAsArray(), function () {
          blurResources = createBlurResources();

          deferred.resolve();
        });

        return deferred.promise;
      }

      /////////////
      // Private //
      /////////////
      function createBlurResources() {
        var
          blurResourcesUrl = BlurResourcesUrl.get(),
          blurredBackgrounds = {
            firstSlide: new PIXI.Sprite(new PIXI.Texture.fromImage(blurResourcesUrl.firstSlide)),
            secondSlide: new PIXI.Sprite(new PIXI.Texture.fromImage(blurResourcesUrl.secondSlide)),
            thirdSlide: new PIXI.Sprite(new PIXI.Texture.fromImage(blurResourcesUrl.thirdSlide))
          },
          depthBarsBlurSprites = DepthBars.getBlurSprites();

        var container = new PIXI.Container();
        // The blurred background
        container.addChild(blurredBackgrounds.firstSlide);
        container.addChild(blurredBackgrounds.secondSlide);
        container.addChild(blurredBackgrounds.thirdSlide);
        // The lateral bars
        container.addChild(depthBarsBlurSprites.top);
        container.addChild(depthBarsBlurSprites.left);
        container.addChild(depthBarsBlurSprites.right);
        // The blur overlay
        container.addChild((function () {
          var graphics = new PIXI.Graphics();

          graphics.beginFill(0xFFFFFF, 0.8);
          graphics.drawRect(0, 0, 2560, 1440);
          graphics.endFill();

          return graphics;
        })());

        // The container starts fade out
        container.alpha = 0;
        // This way the container is always on top
        container.zIndex = 999;

        return container;
      }
    }]);
})();
