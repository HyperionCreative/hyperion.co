(function () {
  'use strict';

  angular
    .module('state.fancy-slider')
    .controller('FancySliderCtrl', ['$scope', 'Preloader', function ($scope, Preloader) {
      // When set to true this initializes the slider when everything is ready!
      $scope.filesHaveLoaded = false;

      var preloaderListener = $scope.$watch(function () {
        return Preloader.getProgress('fancy-slider-resources');
      }, function (newValue) {
        if (newValue === 100) {
          $scope.filesHaveLoaded = true;

          // Unregisters the (night) watch
          preloaderListener();
        }
      });
    }]);
})();
