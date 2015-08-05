(function () {
  'use strict';

  angular
    .module('state.fancy-slider')
    .controller('FancySliderCtrl', ['$scope', 'FancyResources', 'Preloader', function ($scope, FancyResources, Preloader) {
      // When set to true this initializes the slider when everything is ready!
      $scope.filesHaveLoaded = false;

      var preloaderListener = $scope.$watch(function () {
        return Preloader.getProgress('fancy-slider');
      }, function (newValue) {
        if (newValue === 100) {
          FancyResources.init(function () {
            $scope.filesHaveLoaded = true;

            // Unregisters the (night) watch
            preloaderListener();
          });
        }
      });
    }]);
})();
