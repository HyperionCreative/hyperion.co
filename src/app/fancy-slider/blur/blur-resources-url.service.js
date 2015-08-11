(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur')
    .service('FancyBlurResourcesUrl', ['IS_RETINA', 'ViewportSize', function (IS_RETINA, ViewportSize) {
      this.get = getUrls;
      this.getAsArray = getUrlsAsArray;

      ///////////////////
      // Configuration //
      ///////////////////
      var PREFIX = 'assets/images/fancy-slider/blur/background/';
      var SUFFIX = '-' + (ViewportSize.get().width > 1920 ? '2560' : '1920') + (IS_RETINA ? '@2x' : '') + '.jpg';

      ///////////////
      // Variables //
      ///////////////
      var blurBackgroudUrl = {
        firstSlide: getResourceUrl('slide-01'),
        secondSlide: getResourceUrl('slide-02'),
        thirdSlide: getResourceUrl('slide-03')
      };
      var blurBackgroudUrlArray;

      ////////////
      // Public //
      ////////////
      function getUrls() {
        return blurBackgroudUrl;
      }

      function getUrlsAsArray() {
        if (!angular.isArray(blurBackgroudUrlArray)) {
          blurBackgroudUrlArray = [];

          angular.forEach(blurBackgroudUrl, function (blurUrl) {
            blurBackgroudUrlArray.push(blurUrl);
          });
        }

        return blurBackgroudUrlArray;
      }

      /////////////
      // Private //
      /////////////
      function getResourceUrl(resourceName) {
        return PREFIX + resourceName + SUFFIX;
      }
    }]);
})();
