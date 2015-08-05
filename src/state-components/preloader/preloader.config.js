(function () {
  'use strict';
  
  angular
    .module('state.preloader')
    .config(['FancyResourcesUrlProvider', 'PreloaderProvider', function (ResourcesUrlProvider, PreloaderProvider) {
      var resourcesUrl = ResourcesUrlProvider.getAsArray();

      for (var i = resourcesUrl.length - 1; i >= 0; i--) {
        PreloaderProvider.addToQueue('fancy-slider', resourcesUrl[i], i);
      }
    }]);
})();
