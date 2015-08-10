(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources')
    .service('FancyResourcesUrl', ['IS_RETINA', function (IS_RETINA) {
      this.get = getUrls;
      this.getAsArray = getUrlsAsArray;

      ///////////////////
      // Configuration //
      ///////////////////
      var PREFIX = 'assets/images/fancy-slider/resources/';
      var SUFFIX = IS_RETINA ? '@2x.png' : '.png';

      ///////////////
      // Variables //
      ///////////////
      var resourcesUrl = {
        firstSlide: {
          flowerPot: getResourceUrl('slide-1', 'flower-pot'),
          macbook: getResourceUrl('slide-1', 'macbook'),
          sketchbook: getResourceUrl('slide-1', 'sketchbook'),
          watch: getResourceUrl('slide-1', 'watch')
        },
        secondSlide: {
          imac: getResourceUrl('slide-2', 'imac'),
          iphone: getResourceUrl('slide-2', 'iphone'),
          sketchpad: getResourceUrl('slide-2', 'sketchpad')
        },
        thirdSlide: {
          imac: getResourceUrl('slide-3', 'imac'),
          iphone: getResourceUrl('slide-3', 'iphone')
        }
      };
      var resourcesUrlArray;

      ////////////
      // Public //
      ////////////
      function getUrls() {
        return resourcesUrl;
      }

      function getUrlsAsArray() {
        if (!angular.isArray(resourcesUrlArray)) {
          resourcesUrlArray = [];

          angular.forEach(resourcesUrl, function (slide) {
            angular.forEach(slide, function (resourceUrl) {
              resourcesUrlArray.push(resourceUrl);
            });
          });
        }

        return resourcesUrlArray;
      }

      /////////////
      // Private //
      /////////////
      function getResourceUrl(slide, resourceName) {
        return PREFIX + slide + '/' + resourceName + SUFFIX;
      }
    }]);
})();
