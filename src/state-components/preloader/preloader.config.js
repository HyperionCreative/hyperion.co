(function () {
  'use strict';
  
  angular
    .module('state.preloader')
    .config(['FancyResourcesUrlProvider', 'PreloaderProvider', function (ResourcesUrlProvider, PreloaderProvider) {
      var ResourcesUrl = ResourcesUrlProvider.get();
      var maxPriority = 1;

      angular.forEach(ResourcesUrl, function (slide) {
        angular.forEach(slide, function (resourceUrl) {
          PreloaderProvider.addToQueue('fancy-slider', resourceUrl, --maxPriority);
        });
      });
    }]);
})();
