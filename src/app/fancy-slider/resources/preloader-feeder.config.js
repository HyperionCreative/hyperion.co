(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources')
    .config(['FancyResourcesUrlProvider', 'PreloaderProvider', function (ResourcesUrlProvider, PreloaderProvider) {
      var ResourcesUrl = ResourcesUrlProvider.get();
      var maxPriority = 1;

      angular.forEach(ResourcesUrl, function (slide) {
        angular.forEach(slide, function (resourceUrl) {
          PreloaderProvider.addToQueue('fancy-slider-resources', resourceUrl, --maxPriority);
        });
      });
    }]);
})();
