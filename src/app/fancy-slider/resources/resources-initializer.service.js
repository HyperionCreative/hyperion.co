(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources')
    .service('PixiResourcesInitializer', ['PixiResource', 'PixiResourcesUrl', function (Resource, PixiResourcesUrl) {
      this.init = init;

      var ResourcesUrl = PixiResourcesUrl.get();

      function init() {
        var firstSlide = (function () {
          var flowerPot = new Resource(ResourcesUrl.firstSlide.flowerPot);
          flowerPot.addToAnimation('center', 1710, 380, 0);
          flowerPot.addToAnimation('bottom', 1710, 2880, 30);
          flowerPot.addToAnimation('left', -3000, 380, -30);
          flowerPot.addToAnimation('right', 1440, 380, 30);

          var macbook = new Resource(ResourcesUrl.firstSlide.macbook);
          macbook.addToAnimation('center', 530, 27, 0);
          macbook.addToAnimation('bottom', 530, 5760, 45);
          macbook.addToAnimation('left', -2560, 27, -20);
          macbook.addToAnimation('right', 2000, 27, 20);

          var sketchbook = new Resource(ResourcesUrl.firstSlide.sketchbook);
          sketchbook.addToAnimation('center', 16, 354, 0);
          sketchbook.addToAnimation('bottom', 16, 7200, 30);
          sketchbook.addToAnimation('left', -720, 354, -20);
          sketchbook.addToAnimation('right', 2560, 354, 20);

          var watch = new Resource(ResourcesUrl.firstSlide.watch);
          watch.addToAnimation('center', 1017, 965, 0);
          watch.addToAnimation('bottom', 1017, 4320, -30);
          watch.addToAnimation('left', -1920, 965, -20);
          watch.addToAnimation('right', 1920, 965, 20);

          return {
            flowerPot: flowerPot,
            macbook: macbook,
            sketchbook: sketchbook,
            watch: watch
          };
        })();

        var secondSlide = (function () {
          var imac = new Resource(ResourcesUrl.secondSlide.imac);
          imac.addToAnimation('center', 1525, -150, 0);
          imac.addToAnimation('left', -3000, -150, -10);
          imac.addToAnimation('right', 1500, -150, 5);

          var iphone = new Resource(ResourcesUrl.secondSlide.iphone);
          iphone.addToAnimation('center', 615, 136, 0);
          iphone.addToAnimation('left', -2000, 136, -15);
          iphone.addToAnimation('right', 1920, 136, 15);

          var sketchpad = new Resource(ResourcesUrl.secondSlide.sketchpad);
          sketchpad.addToAnimation('center', -5, 268, 0);
          sketchpad.addToAnimation('left', -1000, 268, -20);
          sketchpad.addToAnimation('right', 2800, 268, 20);

          return {
            imac: imac,
            iphone: iphone,
            sketchpad: sketchpad
          };
        })();

        var thirdSlide = (function () {
          var imac = new Resource(ResourcesUrl.thirdSlide.imac);
          imac.addToAnimation('center', 182, 25, 0);
          imac.addToAnimation('left', -2560, 25, -5);
          imac.addToAnimation('right', 2560, 25, 5);

          var iphone = new Resource(ResourcesUrl.thirdSlide.iphone);
          iphone.addToAnimation('center', 618, 768, 0);
          iphone.addToAnimation('center', -1920, 768, -15);
          iphone.addToAnimation('center', 2200, 768, 15);

          return {
            imac: imac,
            iphone: iphone
          };
        })();

        return {
          firstSlide: firstSlide,
          secondSlide: secondSlide,
          thirdSlide: thirdSlide
        };
      }
    }]);
})();
