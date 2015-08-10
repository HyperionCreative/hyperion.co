(function () {
  'use strict';

  angular
    .module('app.fancy-slider.depth-bars')
    .service('FancyDepthBarsBlurSpritesUrl', ['IS_RETINA', function (IS_RETINA) {
      this.get = getUrls;
      this.getAsArray = getUrlsAsArray;

      ///////////////////
      // Configuration //
      ///////////////////
      var PREFIX = 'assets/images/fancy-slider/blur/depth-bars-sprites/';
      var SUFFIX = IS_RETINA ? '@2x.png' : '.png';

      ///////////////
      // Variables //
      ///////////////
      var blurSpritesUrl = {
        corner: getResourceUrl('corner'),
        edge: getResourceUrl('edge'),
        top: getResourceUrl('top')
      };
      var blurSpritesUrlArray;

      ////////////
      // Public //
      ////////////
      function getUrls() {
        return blurSpritesUrl;
      }

      function getUrlsAsArray() {
        if (!angular.isArray(blurSpritesUrlArray)) {
          blurSpritesUrlArray = [];

          angular.forEach(blurSpritesUrl, function (blurSpriteUrl) {
            blurSpritesUrlArray.push(blurSpriteUrl);
          });
        }

        return blurSpritesUrlArray;
      }

      /////////////
      // Private //
      /////////////
      function getResourceUrl(resourceName) {
        return PREFIX + resourceName + SUFFIX;
      }
    }]);
})();
