(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources')
    .service('FancyResources', ['$q', 'PIXI', 'FancyAssetsDownloader', 'FancyResource', 'FancyResourcesUrl', 'ViewportSize', function ($q, PIXI, AssetsDownloader, Resource, ResourcesUrl, ViewportSize) {
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
        if (angular.isUndefined(resources)) {
          throw 'FancyResources module was not initialized correctly!';
        }

        return resources;
      }

      function init() {
        var deferred = $q.defer();

        AssetsDownloader.download(ResourcesUrl.getAsArray(), function () {
          resources = getResources();

          deferred.resolve();
        });

        return deferred.promise;
      }

      /////////////
      // Private //
      /////////////
      function getResources() {
        var resourcesUrl = ResourcesUrl.get();

        var firstSlide = (function () {
          var flowerPot = new Resource(resourcesUrl.firstSlide.flowerPot);
          flowerPot.addPosition('center', 1710, 380, 0);
          flowerPot.addPosition('bottom', 0, 1440, 30);
          flowerPot.addPosition('left', -3500, 0, -10);
          flowerPot.addPosition('right', 1440, 0, 30);
          flowerPot.setZIndex(45);

          var macbook = new Resource(resourcesUrl.firstSlide.macbook);
          macbook.addPosition('center', 530, 27, 0);
          macbook.addPosition('bottom', 0, 2880, 45);
          macbook.addPosition('left', -2750, 0, -10);
          macbook.addPosition('right', 2000, 0, 20);
          macbook.setZIndex(40);

          var sketchbook = new Resource(resourcesUrl.firstSlide.sketchbook);
          sketchbook.addPosition('center', 16, 354, 0);
          sketchbook.addPosition('bottom', 0, 3600, 60);
          sketchbook.addPosition('left', -1000, 0, -20);
          sketchbook.addPosition('right', 2560, 0, 20);
          sketchbook.setZIndex(10);

          var watch = new Resource(resourcesUrl.firstSlide.watch);
          watch.addPosition('center', 1017, 965, 0);
          watch.addPosition('bottom', 0, 2160, -30);
          watch.addPosition('left', -1920, 0, -20);
          watch.addPosition('right', 1920, 0, 20);
          watch.setZIndex(5);

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
          imac.addPosition('left', -3000, 0, -10);
          imac.addPosition('right', 1500, 0, 5);
          imac.setZIndex(10);

          var iphone = new Resource(resourcesUrl.secondSlide.iphone);
          iphone.addPosition('center', 615, 136, 0);
          iphone.addPosition('left', -2000, 0, -15);
          iphone.addPosition('right', 1920, 0, 15);
          iphone.setZIndex(35);

          var sketchpad = new Resource(resourcesUrl.secondSlide.sketchpad);
          sketchpad.addPosition('center', -5, 268, 0);
          sketchpad.addPosition('left', -1000, 0, -20);
          sketchpad.addPosition('right', 2800, 0, 20);
          sketchpad.setZIndex(15);

          return {
            imac: imac,
            iphone: iphone,
            sketchpad: sketchpad
          };
        })();

        var thirdSlide = (function () {
          var imac = new Resource(resourcesUrl.thirdSlide.imac);
          imac.addPosition('center', 182, 25, 0);
          imac.addPosition('left', -2560, 0, -5);
          imac.addPosition('right', 2560, 0, 5);
          imac.setZIndex(5);

          var iphone = new Resource(resourcesUrl.thirdSlide.iphone);
          iphone.addPosition('center', 618, 768, 0);
          iphone.addPosition('left', -1920, 0, -15);
          iphone.addPosition('right', 2200, 0, 15);
          iphone.setZIndex(10);

          return {
            imac: imac,
            iphone: iphone
          };
        })();

        var toReturn = {
          firstSlide: firstSlide,
          secondSlide: secondSlide,
          thirdSlide: thirdSlide
        };

        // Specific resolution behaviour
        (function () {
          // Under or equal 1920 transformation
          var transformations = {
            firstSlide: {
              flowerPot: {
                x: 200,
                rotation: PIXI.PI_2 / (360 / 10)
              },
              macbook: {
                x: -50,
                scale: 1.27
              },
              watch: {
                visible: false
              }
            },
            secondSlide: {
              iphone: {
                scale: 1.1,
                y: -75
              }
            },
            thirdSlide: {
              iphone: {
                y: -150
              }
            }
          };

          function handleDisplay(isLarge) {
            angular.forEach(transformations, function (slideResources, slideName) {
              angular.forEach(slideResources, function (slideResource, resourceName) {
                angular.forEach(slideResource, function (resourceTransformation, transformationName) {
                  if (transformationName === 'scale') {
                    var scaleFactor = isLarge ? 1 : resourceTransformation;

                    // Since we're in transform origin 50% 50%, we need to add change x and y!
                    var currentHeight = toReturn[slideName][resourceName].sprite.children[0].height;
                    var currentWidth = toReturn[slideName][resourceName].sprite.children[0].width;

                    toReturn[slideName][resourceName].sprite.children[0].scale.set(scaleFactor, scaleFactor);

                    var newHeight = toReturn[slideName][resourceName].sprite.children[0].height;
                    var newWidth = toReturn[slideName][resourceName].sprite.children[0].width;

                    toReturn[slideName][resourceName].sprite.children[0].x += (newWidth - currentWidth) / 2;
                    toReturn[slideName][resourceName].sprite.children[0].y += (newHeight - currentHeight) / 2;
                  } else if (transformationName === 'visible') {
                    toReturn[slideName][resourceName].sprite.children[0][transformationName] = isLarge ? !resourceTransformation : resourceTransformation;
                  } else {
                    toReturn[slideName][resourceName].sprite.children[0][transformationName] += isLarge ? (-resourceTransformation) : resourceTransformation;
                  }
                });
              });
            });
          }

          // This is needed so we only apply the changes once
          // 0 - uninitialized
          // 1 - small
          // 2 - large
          var displayFlag = 0;

          ViewportSize.onChange(function (size) {
            if (displayFlag === 0) {
              if (size.width > 1920) {
                displayFlag = 2;
              } else {
                displayFlag = 1;

                handleDisplay(false);
              }
            } else if (size.width > 1920 && displayFlag === 1) {
              displayFlag = 2;

              // The user started with a small display but resized it to above 1920
              handleDisplay(true);
            } else if (size.width <= 1920 && displayFlag === 2) {
              displayFlag = 1;

              handleDisplay(false);
            }
          });
        })();

        return toReturn;
      }
    }]);
})();
