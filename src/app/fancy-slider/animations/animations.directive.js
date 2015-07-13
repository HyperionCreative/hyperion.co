(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations', [
      'common.gasp-lite'
    ])
    .directive('hypAnimationsContainer', ['$timeout', 'TweenLite', 'TweenLiteEasings', function ($timeout, TweenLite, TweenLiteEasings) {
      var ANIMATION_DURATION = 1500;
      var EASING = TweenLiteEasings.Power3.easeInOut;
      var ANIMATIONS_POSITION = {
        '.slide-1': {
          bottom: [{
            selector: '.resource.flower-pot .transformation-layer',
            propertyMap: {
              translateY: 2880,
              rotateZ: 30
            }
          }, {
            selector: '.resource.macbook .transformation-layer',
            propertyMap: {
              translateY: 5760,
              rotateZ: 45
            }
          }, {
            selector: '.resource.sketchbook .transformation-layer',
            propertyMap: {
              translateY: 7200,
              rotateZ: 30
            }
          }, {
            selector: '.resource.watch .transformation-layer',
            propertyMap: {
              translateY: 4320,
              rotateZ: -30
            }
          }],
          left: [{
            selector: '.resource.flower-pot .transformation-layer',
            propertyMap: {
              translateX: -3000,
              rotateZ: -30
            }
          }, {
            selector: '.resource.macbook .transformation-layer',
            propertyMap: {
              translateX: -2560,
              rotateZ: -20
            }
          }, {
            selector: '.resource.sketchbook .transformation-layer',
            propertyMap: {
              translateX: -720,
              rotateZ: -20
            }
          }, {
            selector: '.resource.watch .transformation-layer',
            propertyMap: {
              translateX: -1920,
              rotateZ: -20
            }
          }],
          right: [{
            selector: '.resource.flower-pot .transformation-layer',
            propertyMap: {
              translateX: 1440,
              rotateZ: 30
            }
          }, {
            selector: '.resource.macbook .transformation-layer',
            propertyMap: {
              translateX: 2000,
              rotateZ: 20
            }
          }, {
            selector: '.resource.sketchbook .transformation-layer',
            propertyMap: {
              translateX: 2560,
              rotateZ: 20
            }
          }, {
            selector: '.resource.watch .transformation-layer',
            propertyMap: {
              translateX: 1920,
              rotateZ: 20
            }
          }]
        },
        '.slide-2': {
          left: [{
            selector: '.resource.imac .transformation-layer',
            propertyMap: {
              translateX: -3000,
              rotateZ: -10
            }
          }, {
            selector: '.resource.iphone .transformation-layer',
            propertyMap: {
              translateX: -2000,
              rotateZ: -15
            }
          }, {
            selector: '.resource.sketchpad .transformation-layer',
            propertyMap: {
              translateX: -1000,
              rotateZ: -20
            }
          }],
          right: [{
            selector: '.resource.imac .transformation-layer',
            propertyMap: {
              translateX: 1500,
              rotateZ: 5
            }
          }, {
            selector: '.resource.iphone .transformation-layer',
            propertyMap: {
              translateX: 1920,
              rotateZ: 15
            }
          }, {
            selector: '.resource.sketchpad .transformation-layer',
            propertyMap: {
              translateX: 2800,
              rotateZ: 20
            }
          }]
        },
        '.slide-3': {
          left: [{
            selector: '.resource.imac .transformation-layer',
            propertyMap: {
              translateX: -2560,
              rotateZ: -5
            }
          }, {
            selector: '.resource.iphone .transformation-layer',
            propertyMap: {
              translateX: -1920,
              rotateZ: -15
            }
          }],
          right: [{
            selector: '.resource.imac .transformation-layer',
            propertyMap: {
              translateX: 2560,
              rotateZ: 5
            }
          }, {
            selector: '.resource.iphone .transformation-layer',
            propertyMap: {
              translateX: 2200,
              rotateZ: 15
            }
          }]
        }
      };

      function animate(element, propertyMap, fast) {
        TweenLite.to(element, fast ? 0 : (ANIMATION_DURATION / 1000), {
          x: propertyMap.translateX || 0,
          y: propertyMap.translateY || 0,
          z: propertyMap.translateZ || 0,
          rotation: propertyMap.rotateZ || 0,
          ease: EASING
        });
      }

      function handleOnSuccess(fn) {
        if (angular.isFunction(fn)) {
          $timeout(fn, ANIMATION_DURATION);
        }
      }

      return {
        link: function (scope, iElement, iAttrs, fancySliderController) {
          // Each slide
          angular.forEach(ANIMATIONS_POSITION, function (slidePositionData, slide) {
            fancySliderController.animations[slide] = {};

            // Each slide position
            angular.forEach(slidePositionData, function (positionData, positionName) {
              fancySliderController.animations[slide]['to' + positionName.charAt(0).toUpperCase() + positionName.substring(1)] = function (onSuccess, fast) {
                for (var i = 0; i < positionData.length; i++) {
                  animate(iElement[0].querySelector(slide + ' ' + positionData[i].selector), positionData[i].propertyMap, fast);
                }

                handleOnSuccess(onSuccess);
              };
            });

            // Binds toCenter
            fancySliderController.animations[slide].toCenter = function (onSuccess, fast) {
              animate(iElement[0].querySelectorAll(slide + ' ' + '.resource .transformation-layer'), {}, fast);

              handleOnSuccess(onSuccess);
            };
          });
        },
        require: '^hypFancySlider',
        restrict: 'A'
      };
    }]);
})();
