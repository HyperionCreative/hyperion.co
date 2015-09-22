(function () {
  'use strict';

  angular
    .module('state.preloader')
    .controller('PreloaderCtrl', ['$rootScope', '$scope', 'Preloader', function ($rootScope, $scope, Preloader) {
      $scope.showPreloader = true;
      $scope.preloaderProgress = 0;

      $rootScope.$on('fancy-slider.ready', function () {
        // Load the rest of the files
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/contact/invalid-icon.png');

        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/expertise/consulting.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/expertise/development.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/expertise/ui-ux.jpg');

        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/anyvan/logo.png');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/anyvan/iphone-frame.png');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/anyvan/slide-1.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/anyvan/slide-2.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/anyvan/slide-3.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/anyvan/slide-4.jpg');

        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/grow/logo.png');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/grow/ipad-and-iphone-frame.png');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/grow/slide-1.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/grow/slide-2.jpg');

        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/kartist/logo.png');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/kartist/imac-frame.png');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/kartist/in-page-1.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/kartist/in-page-3.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/kartist/in-page-4.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/kartist/slide-1.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/kartist/slide-2.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/kartist/slide-3.jpg');

        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/quizkick/logo.png');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/quizkick/1.jpg');

        Preloader.start('the-rest-of-the-images');

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
