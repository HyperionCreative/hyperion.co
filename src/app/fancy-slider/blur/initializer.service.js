(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur')
    .service('FancyBlurInitializer', ['$q', 'FancyAssetsDownloader', 'FancyBlurControllers', 'FancyBlurResources', 'FancyBlurResourcesUrl', 'ViewportSize', function ($q, AssetsDownloader, BlurControllers, BlurResources, BlurResourcesUrl, ViewportSize) {
      this.downloadAssets = downloadAssets;
      this.init = init;

      function downloadAssets() {
        var deferred = $q.defer();

        var stageWidth = ViewportSize.get().width;
        var urls = BlurResourcesUrl.getAsArray(stageWidth);

        AssetsDownloader.download(urls, function () {
          deferred.resolve();
        });

        return deferred.promise;
      }

      function init(stage, renderer) {
        var deferred = $q.defer();

        BlurResources.init();
        BlurControllers.init(BlurResources.get(), stage, renderer);

        deferred.resolve();

        return deferred.promise;
      }
    }]);
})();
