(function () {
  'use strict';
  
  angular
    .module('state.state-components')
    .controller('PreloaderCtrl', ['$scope', 'Preloader', function ($scope, Preloader) {
      $scope.preloaderProgress = 0;

      $scope.$watch(function () {
        return Preloader.getProgress('fancy-slider');
      }, function (newValue) {
        $scope.preloaderProgress = newValue;
      });

      Preloader.start('fancy-slider');
    }]);
})();
