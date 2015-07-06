(function () {
  'use strict';
  
  angular
    .module('state.preloader')
    .config(['PreloaderProvider', function (PreloaderProvider) {
      var fancySliderImages = [
        // First slide
        {
          path: 'app/fancy-slider/resources/slide-1/flower-pot.png',
          priority: 100
        }, {
          path: 'app/fancy-slider/resources/slide-1/flower-pot-blurred.png',
          priority: 90
        }, {
          path: 'app/fancy-slider/resources/slide-1/macbook.png',
          priority: 100
        }, {
          path: 'app/fancy-slider/resources/slide-1/macbook-blurred.png',
          priority: 90
        }, {
          path: 'app/fancy-slider/resources/slide-1/sketchbook.png',
          priority: 100
        }, {
          path: 'app/fancy-slider/resources/slide-1/sketchbook-blurred.png',
          priority: 90
        }, {
          path: 'app/fancy-slider/resources/slide-1/watch.png',
          priority: 100
        }, {
          path: 'app/fancy-slider/resources/slide-1/watch-blurred.png',
          priority: 90
        },
        // Second slide
        {
          path: 'app/fancy-slider/resources/slide-2/imac.png',
          priority: 80
        }, {
          path: 'app/fancy-slider/resources/slide-2/imac-blurred.png',
          priority: 70
        }, {
          path: 'app/fancy-slider/resources/slide-2/iphone.png',
          priority: 80
        }, {
          path: 'app/fancy-slider/resources/slide-2/iphone-blurred.png',
          priority: 70
        }, {
          path: 'app/fancy-slider/resources/slide-2/sketchpad.png',
          priority: 80
        }, {
          path: 'app/fancy-slider/resources/slide-2/sketchpad-blurred.png',
          priority: 70
        },
        // Third slide
        {
          path: 'app/fancy-slider/resources/slide-3/imac.png',
          priority: 60
        }, {
          path: 'app/fancy-slider/resources/slide-3/imac-blurred.png',
          priority: 50
        }, {
          path: 'app/fancy-slider/resources/slide-3/iphone.png',
          priority: 60
        }, {
          path: 'app/fancy-slider/resources/slide-3/iphone-blurred.png',
          priority: 50
        }
      ];

      for (var i = 0; i < fancySliderImages.length; i++) {
        PreloaderProvider.addToQueue('fancy-slider', fancySliderImages[i].path, fancySliderImages[i].priority);
      }
    }]);
})();
