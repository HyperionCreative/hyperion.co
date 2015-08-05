(function () {
  'use strict';
  
  angular
    .module('state.preloader')
    .controller('PreloaderCtrl', ['$scope', 'Preloader', function ($scope, Preloader) {
      $scope.showPreloader = true;
      $scope.preloaderProgress = 0;

      var preloaderListener = $scope.$watch(function () {
        return Preloader.getProgress('fancy-slider-resources');
      }, function (newValue) {
        $scope.preloaderProgress = newValue;

        if (newValue === 100) {
          // This needs to be called async. 
          // Without this the preloader wouldn't fade out at 100%.
          $scope.$evalAsync(function () {
            $scope.showPreloader = false;
          });

          // Unregisters the (night) watch
          preloaderListener();
        }
      });

      Preloader.start('fancy-slider-resources');
    }]);
})();
