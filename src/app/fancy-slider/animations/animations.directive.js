(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations', [
      'common.velocity'
    ])
    .directive('hypAnimationsContainer', ['$rootScope', 'Velocity', function ($rootScope, velocity) {
      var ANIMATION_DURATION = 1000;
      var EASING = 'easeOutCubic';

      var isAnimating = 0;

      var ANIMATIONS = {
        '.slide-1': {
          toBottom: [{
            selector: '.resource.flower-pot .transformation-layer',
            propertyMap: {
              translateY: 2880,
              translateZ: 0,
              rotateZ: 30
            }
          }, {
            selector: '.resource.macbook .transformation-layer',
            propertyMap: {
              translateY: 5760,
              translateZ: 0,
              rotateZ: 45
            }
          }, {
            selector: '.resource.sketchbook .transformation-layer',
            propertyMap: {
              translateY: 7200,
              translateZ: 0,
              rotateZ: 30
            }
          }, {
            selector: '.resource.watch .transformation-layer',
            propertyMap: {
              translateY: 4320,
              translateZ: 0,
              rotateZ: -30
            }
          }],
          toLeft: [{
            selector: '.resource.flower-pot .transformation-layer',
            propertyMap: {
              translateX: -3000,
              translateZ: 0,
              rotateZ: -30
            }
          }, {
            selector: '.resource.macbook .transformation-layer',
            propertyMap: {
              translateX: -2560,
              translateZ: 0,
              rotateZ: -20
            }
          }, {
            selector: '.resource.sketchbook .transformation-layer',
            propertyMap: {
              translateX: -720,
              translateZ: 0,
              rotateZ: -20
            }
          }, {
            selector: '.resource.watch .transformation-layer',
            propertyMap: {
              translateX: -1920,
              translateZ: 0,
              rotateZ: -20
            }
          }],
          toRight: [{
            selector: '.resource.flower-pot .transformation-layer',
            propertyMap: {
              translateX: 1440,
              translateZ: 0,
              rotateZ: 30
            }
          }, {
            selector: '.resource.macbook .transformation-layer',
            propertyMap: {
              translateX: 2000,
              translateZ: 0,
              rotateZ: 20
            }
          }, {
            selector: '.resource.sketchbook .transformation-layer',
            propertyMap: {
              translateX: 2560,
              translateZ: 0,
              rotateZ: 20
            }
          }, {
            selector: '.resource.watch .transformation-layer',
            propertyMap: {
              translateX: 1920,
              translateZ: 0,
              rotateZ: 20
            }
          }]
        },
        '.slide-2': {
          toLeft: [{
            selector: '.resource.imac .transformation-layer',
            propertyMap: {
              translateX: -3000,
              translateZ: 0,
              rotateZ: -10
            }
          }, {
            selector: '.resource.iphone .transformation-layer',
            propertyMap: {
              translateX: -2000,
              translateZ: 0,
              rotateZ: -15
            }
          }, {
            selector: '.resource.sketchpad .transformation-layer',
            propertyMap: {
              translateX: -1000,
              translateZ: 0,
              rotateZ: -20
            }
          }],
          toRight: [{
            selector: '.resource.imac .transformation-layer',
            propertyMap: {
              translateX: 1500,
              translateZ: 0,
              rotateZ: 5
            }
          }, {
            selector: '.resource.iphone .transformation-layer',
            propertyMap: {
              translateX: 1920,
              translateZ: 0,
              rotateZ: 15
            }
          }, {
            selector: '.resource.sketchpad .transformation-layer',
            propertyMap: {
              translateX: 2800,
              translateZ: 0,
              rotateZ: 20
            }
          }]
        },
        '.slide-3': {
          toLeft: [{
            selector: '.resource.imac .transformation-layer',
            propertyMap: {
              translateX: -2560,
              translateZ: 0,
              rotateZ: -5
            }
          }, {
            selector: '.resource.iphone .transformation-layer',
            propertyMap: {
              translateX: -1920,
              translateZ: 0,
              rotateZ: -15
            }
          }],
          toRight: [{
            selector: '.resource.imac .transformation-layer',
            propertyMap: {
              translateX: 2560,
              translateZ: 0,
              rotateZ: 5
            }
          }, {
            selector: '.resource.iphone .transformation-layer',
            propertyMap: {
              translateX: 2200,
              translateZ: 0,
              rotateZ: 15
            }
          }]
        }
      };

      function animate(element, propertyMap, onSuccess, fast) {
        // The default options.
        var velocityOptions = {
          duration: fast ? 0 : ANIMATION_DURATION,
          easing: EASING
        };

        if (angular.isFunction(onSuccess) && fast !== true) {
          velocityOptions.begin = function () {
            isAnimating += 1;
          };

          velocityOptions.complete = function () {
            isAnimating -= 1;

            if (isAnimating === 0) {
              $rootScope.$evalAsync(onSuccess);
            }
          };
        }

        velocity(element, propertyMap, velocityOptions);
      }

      return {
        link: function (scope, iElement, iAttrs, fancySliderController) {
          // Binds its controlls to the 'brain'.
          fancySliderController.animation = {};

          angular.forEach(ANIMATIONS, function (slideAnimations, slide) {
            fancySliderController.animation[slide] = {};

            angular.forEach(slideAnimations, function (data, name) {
              fancySliderController.animation[slide][name] = function (onSuccess, fast) {
                for (var i = 0; i < data.length; i++) {
                  animate(iElement[0].querySelector(slide + ' ' + data[i].selector), data[i].propertyMap, onSuccess, fast);
                }
              };
            });

            // Binds toCenter
            fancySliderController.animation[slide].toCenter = function (onSuccess, fast) {
              animate(iElement[0].querySelectorAll(slide + ' ' + '.resource .transformation-layer'), {
                translateX: 0,
                translateY: 0,
                translateZ: 0,
                rotateZ: 0
              }, onSuccess, fast);
            };
          });
        },
        require: '^hypFancySlider',
        restrict: 'A'
      };
    }]);
})();
