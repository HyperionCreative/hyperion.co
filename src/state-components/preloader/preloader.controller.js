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
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/kartist/dev-left.jpg');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/kartist/dev-right.jpg');

        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/quizkick/logo.png');
        Preloader.addToQueue('the-rest-of-the-images', 'assets/images/portfolio/quizkick/1.jpg');

        Preloader.start('the-rest-of-the-images');

        // Using $evalAsync we're sure that the "final" percentage will be shown
        $rootScope.$evalAsync(function(){
          $scope.showPreloader = false;
        });
      });

      var preloaderListener = $scope.$watch(function () {
        return Preloader.getTotalProgress('fancy-slider');
      }, function (newValue) {
        $scope.preloaderProgress = (function () {
          // if (newValue <= 0) { return 'zero'; }
          // if (newValue <= 5) { return 'five'; }
          // if (newValue <= 10) { return 'ten'; }
          // if (newValue <= 15) { return 'fifteen'; }
          // if (newValue <= 20) { return 'twenty'; }
          // if (newValue <= 25) { return 'twenty five'; }
          // if (newValue <= 30) { return 'thirty'; }
          // if (newValue <= 35) { return 'thirty five'; }
          // if (newValue <= 40) { return 'forty'; }
          // if (newValue <= 45) { return 'forty five'; }
          // if (newValue <= 50) { return 'fifty'; }
          // if (newValue <= 55) { return 'fifty five'; }
          // if (newValue <= 60) { return 'sixty'; }
          // if (newValue <= 65) { return 'sixty five'; }
          // if (newValue <= 70) { return 'seventy'; }
          // if (newValue <= 75) { return 'seventy five'; }
          // if (newValue <= 80) { return 'eighty'; }
          // if (newValue <= 85) { return 'eighty five'; }
          // if (newValue <= 90) { return 'ninety'; }
          // if (newValue <= 95) { return 'ninety five'; }
          // if (newValue <= 100) { return 'one hundred'; }

          if (newValue < 15) {
            return 0;
          } else if (newValue < 40) {
            return 25;
          } else if (newValue < 65) {
            return 50;
          } else if (newValue < 100) {
            return 75;
          } else {
            return 100;
          }
        })();

        if (newValue === 100) {
          // Unregisters the (night) watch

          preloaderListener();
        }
      });
    }]);
})();
