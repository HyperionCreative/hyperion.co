(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur')
    .directive('hypBlurContainer', ['$rootScope', '$timeout', 'Velocity', function ($rootScope, $timeout, velocity) {
      // The animation duration.
      var ANIMATION_DURATION = 250;
      // A flag which tells if the container is blurred or not!
      var isBlurred = false;
      // If this is different than 0, then the blurring process is running.
      var isBlurringFlag = 0;

      function fadeMe(elements, fadeType, delay, duration, onSuccess, fast) {
        // The default options.
        var velocityOptions = {
          delay: 0,
          duration: ANIMATION_DURATION,
          easing: 'ease-in-out'
        };

        if (angular.isNumber(delay)) {
          velocityOptions.delay = delay;
        }

        if (angular.isNumber(duration)) {
          velocityOptions.duration = duration;
        }

        if (angular.isFunction(onSuccess)) {
          velocityOptions.begin = function () {
            isBlurringFlag += 1;
          };

          velocityOptions.complete = function () {
            isBlurringFlag -= 1;

            if (isBlurringFlag === 0) {
              $rootScope.$evalAsync(onSuccess);
            }
          };
        }

        // Overwrites the delay and duration if fast is set to true
        if (fast) {
          velocityOptions.delay = 0;
          velocityOptions.duration = 0;
        }

        velocity(elements, fadeType, velocityOptions);
      }

      return {
        link: function (scope, iElement, iAttrs, fancySliderController) {
          // Binds its controlls to the 'brain'.
          fancySliderController.blur = {
            blur: function (onSuccess) {
              blurAll(true, onSuccess);
            },
            unblur: function (onSuccess) {
              blurAll(false, onSuccess);
            },

            fastBlur: function () {
              blurAll(true, undefined, true);
            },
            fastUnblur: function () {
              blurAll(false, undefined, true);
            },

            isBlurred: function () {
              return isBlurred;
            }
          };

          function blurAll(showBlurredResources, onSuccess, fast) {
            if (isBlurred !== showBlurredResources) {
              isBlurred = showBlurredResources;

              // I know this is not the most "performant wise" thing to do, but ehh, it works
              var blurringMaterial = {
                overlay: iElement[0].querySelector('#blur-overlay'),
                bars: {
                  blurred: iElement[0].querySelectorAll('.depth-bar.blurred'),
                  unblurred: iElement[0].querySelectorAll('.depth-bar.unblurred')
                },
                resources: {
                  blurred: iElement[0].querySelectorAll('.resource .blurred'),
                  unblurred: iElement[0].querySelectorAll('.resource .unblurred')
                }
              };

              // The overlay
              fadeMe(blurringMaterial.overlay, (showBlurredResources ? 'fadeIn' : 'fadeOut'), 0, ANIMATION_DURATION * 4 / 3, onSuccess, fast);

              // The depth bars
              fadeMe((showBlurredResources ? blurringMaterial.bars.unblurred : blurringMaterial.bars.blurred), 'fadeOut', ANIMATION_DURATION / 2, ANIMATION_DURATION / 2, onSuccess, fast);
              fadeMe((showBlurredResources ? blurringMaterial.bars.blurred : blurringMaterial.bars.unblurred), 'fadeIn', 0, ANIMATION_DURATION, onSuccess, fast);

              // The resources
              fadeMe((showBlurredResources ? blurringMaterial.resources.unblurred : blurringMaterial.resources.blurred), 'fadeOut', ANIMATION_DURATION / 2, ANIMATION_DURATION / 2, onSuccess, fast);
              fadeMe((showBlurredResources ? blurringMaterial.resources.blurred : blurringMaterial.resources.unblurred), 'fadeIn', 0, ANIMATION_DURATION, onSuccess, fast);
            }
          }
        },
        restrict: 'A',
        require: '^hypFancySlider'
      };
    }]);
})();
