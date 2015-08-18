(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur')
    .service('FancyBlurResourcesUrl', ['IS_RETINA', function (IS_RETINA) {
      this.get = getUrls;
      this.getAsArray = getUrlsAsArray;

      ///////////////////
      // Configuration //
      ///////////////////
      var PREFIX = 'assets/images/fancy-slider/blur/background/';
      var SUFFIX = (IS_RETINA ? '@2x' : '') + '.jpg';

      ////////////
      // Public //
      ////////////
      function getUrls(stageWidth) {
        if (angular.isUndefined(stageWidth)) {
          throw 'stageWidth is a required parameter in FancyBlurResourcesUrl.getUrls!';
        }

        return {
          firstSlide: getResourceUrl('slide-01', stageWidth),
          secondSlide: getResourceUrl('slide-02', stageWidth),
          thirdSlide: getResourceUrl('slide-03', stageWidth)
        };
      }

      function getUrlsAsArray(stageWidth) {
        if (angular.isUndefined(stageWidth)) {
          throw 'stageWidth is a required parameter in FancyBlurResourcesUrl.getUrlsAsArray!';
        }

        var blurBackgroudUrlArray = [];
        var urls = getUrls(stageWidth);

        angular.forEach(urls, function (blurUrl) {
          blurBackgroudUrlArray.push(blurUrl);
        });

        return blurBackgroudUrlArray;
      }

      /////////////
      // Private //
      /////////////
      function getResourceUrl(resourceName, stageWidth) {
        return PREFIX + resourceName + '-' + (stageWidth > 1920 ? '2560' : '1920') + SUFFIX;
      }
    }]);
})();
