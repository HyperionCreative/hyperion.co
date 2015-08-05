(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources')
    .provider('FancyResourcesUrl', ['IS_RETINA', function (IS_RETINA) {
      var PREFIX = 'app/fancy-slider/resources/';
      var SUFFIX = IS_RETINA ? '@2x.png' : '.png';

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

      this.get = getUrls;
      this.getAsArray = getUrlsAsArray;

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

      function getResourceUrl(slide, resourceName) {
        return PREFIX + slide + '/' + resourceName + SUFFIX;
      }

      this.$get = function () {
        return {
          get: getUrls,
          getAsArray: getUrlsAsArray
        };
      };
    }]);
})();
