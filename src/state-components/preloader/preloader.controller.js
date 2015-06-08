(function () {
  'use strict';
  
  angular
    .module('state.state-components')
    .controller('PreloaderCtrl', ['$scope', 'Preloader', function ($scope, Preloader) {
      $scope.showPreloader = true;
      $scope.preloaderProgress = 0;

      $scope.$watch(function () {
        return Preloader.getProgress('fancy-slider');
      }, function (newValue) {
        $scope.preloaderProgress = newValue;

        if (newValue === 100) {
          // Needed as otherwise angular won't bind preloaderProgress's new value.
          // This means that the preloader will not fade out at 100%.
          $scope.$evalAsync(function () {
            $scope.showPreloader = false;
          });
        }
      });

      Preloader.start('fancy-slider');
    }]);
})();
