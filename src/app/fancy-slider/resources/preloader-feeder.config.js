(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources')
    .config(['PixiResourcesUrlProvider', 'PreloaderProvider', function (PixiResourcesUrlProvider, PreloaderProvider) {
      var ResourcesUrl = PixiResourcesUrlProvider.get();
      var maxPriority = 1;

      angular.forEach(ResourcesUrl, function (slide) {
        angular.forEach(slide, function (resourceUrl) {
          PreloaderProvider.addToQueue('fancy-slider-resources', resourceUrl, --maxPriority);
        });
      });
    }]);
})();
