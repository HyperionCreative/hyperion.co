(function () {
  'use strict';

  angular
    .module('state.preloader')
    .controller('PreloaderCtrl', ['$rootScope', '$scope', 'Preloader', function ($rootScope, $scope, Preloader) {
      $scope.showPreloader = true;
      $scope.preloaderProgress = 0;

      $rootScope.$on('fancy-slider.ready', function () {
        $scope.showPreloader = false;
      });

      var preloaderListener = $scope.$watch(function () {
        return Preloader.getTotalProgress('fancy-slider');
      }, function (newValue) {
        $scope.preloaderProgress = newValue;

        if (newValue === 100) {
          // Unregisters the (night) watch
          preloaderListener();
        }
      });
    }]);
})();
