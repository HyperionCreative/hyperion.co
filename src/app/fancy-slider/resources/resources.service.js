(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources')
    .service('FancyResources', ['PIXI', 'FancyResource', 'FancyResourcesUrl', function (PIXI, Resource, FancyResourcesUrl) {
      this.get = get;
      this.init = init;

      ///////////////
      // Variables //
      ///////////////
      var resources;

      ////////////
      // Public //
      ////////////
      function get() {
        return resources;
      }

      // This solves a weird bug. Without these, when initializing a texture,
      // it would load the image again. Since the image is in cache, it will load
      // very fast. But this breaks the synchronicity of things,
      // causing texture.width and texture.height to be 0.
      function init(fn) {
        var resourcesUrlArArray = FancyResourcesUrl.getAsArray();
        var loader = new PIXI.loaders.Loader();

        for (var i = 0; i < resourcesUrlArArray.length; i++) {
          loader.add(resourcesUrlArArray[i], resourcesUrlArArray[i]);
        }

        // When everything is loaded, call the fn. These will happen very fast
        // as the images are already loaded by common.preloader!
        loader.load(function() {
          resources = getResources();

          fn();
        });
      }

      /////////////
      // Private //
      /////////////
      function getResources() {
        var resourcesUrl = FancyResourcesUrl.get();

        var firstSlide = (function () {
          var flowerPot = new Resource(resourcesUrl.firstSlide.flowerPot);
          flowerPot.addPosition('center', 1710, 380, 0);
          flowerPot.addPosition('bottom', 1710, 2880, 30);
          flowerPot.addPosition('left', -3000, 380, -30);
          flowerPot.addPosition('right', 1440, 380, 30);

          var macbook = new Resource(resourcesUrl.firstSlide.macbook);
          macbook.addPosition('center', 530, 27, 0);
          macbook.addPosition('bottom', 530, 5760, 45);
          macbook.addPosition('left', -2560, 27, -20);
          macbook.addPosition('right', 2000, 27, 20);

          var sketchbook = new Resource(resourcesUrl.firstSlide.sketchbook);
          sketchbook.addPosition('center', 16, 354, 0);
          sketchbook.addPosition('bottom', 16, 7200, 30);
          sketchbook.addPosition('left', -720, 354, -20);
          sketchbook.addPosition('right', 2560, 354, 20);

          var watch = new Resource(resourcesUrl.firstSlide.watch);
          watch.addPosition('center', 1017, 965, 0);
          watch.addPosition('bottom', 1017, 4320, -30);
          watch.addPosition('left', -1920, 965, -20);
          watch.addPosition('right', 1920, 965, 20);

          return {
            flowerPot: flowerPot,
            macbook: macbook,
            sketchbook: sketchbook,
            watch: watch
          };
        })();

        var secondSlide = (function () {
          var imac = new Resource(resourcesUrl.secondSlide.imac);
          imac.addPosition('center', 1525, -150, 0);
          imac.addPosition('left', -3000, -150, -10);
          imac.addPosition('right', 1500, -150, 5);

          var iphone = new Resource(resourcesUrl.secondSlide.iphone);
          iphone.addPosition('center', 615, 136, 0);
          iphone.addPosition('left', -2000, 136, -15);
          iphone.addPosition('right', 1920, 136, 15);

          var sketchpad = new Resource(resourcesUrl.secondSlide.sketchpad);
          sketchpad.addPosition('center', -5, 268, 0);
          sketchpad.addPosition('left', -1000, 268, -20);
          sketchpad.addPosition('right', 2800, 268, 20);

          return {
            imac: imac,
            iphone: iphone,
            sketchpad: sketchpad
          };
        })();

        var thirdSlide = (function () {
          var imac = new Resource(resourcesUrl.thirdSlide.imac);
          imac.addPosition('center', 182, 25, 0);
          imac.addPosition('left', -2560, 25, -5);
          imac.addPosition('right', 2560, 25, 5);

          var iphone = new Resource(resourcesUrl.thirdSlide.iphone);
          iphone.addPosition('center', 618, 768, 0);
          iphone.addPosition('center', -1920, 768, -15);
          iphone.addPosition('center', 2200, 768, 15);

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
