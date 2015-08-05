(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources')
    .provider('PixiResourcesUrl', ['IS_RETINA', function (IS_RETINA) {
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

      this.get = getUrls;

      function getUrls() {
        return resourcesUrl;
      }

      function getResourceUrl(slide, resourceName) {
        return PREFIX + slide + '/' + resourceName + SUFFIX;
      }

      this.$get = function () {
        return {
          get: getUrls
        };
      };
    }]);
})();
