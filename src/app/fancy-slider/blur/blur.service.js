(function () {
  'use strict';

  // todo
  // this is a reminder that this module doesn't support viewport resize.

  angular
    .module('app.fancy-slider.blur')
    .service('FancyBlur', ['$q', 'FancyAssetsDownloader', 'FancyBlurResourcesUrl', 'PIXI', function ($q, AssetsDownloader, BlurResourcesUrl, PIXI) {
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
          blurResources = getBlurResources();

          deferred.resolve();
        });

        return deferred.promise;
      }

      /////////////
      // Private //
      /////////////
      function getBlurResources() {
        var blurResourcesUrl = BlurResourcesUrl.get();

        return {
          firstSlide: new PIXI.Sprite(new PIXI.Texture.fromImage(blurResourcesUrl.firstSlide)),
          secondSlide: new PIXI.Sprite(new PIXI.Texture.fromImage(blurResourcesUrl.secondSlide)),
          thirdSlide: new PIXI.Sprite(new PIXI.Texture.fromImage(blurResourcesUrl.thirdSlide))
        };
      }
    }]);
})();
