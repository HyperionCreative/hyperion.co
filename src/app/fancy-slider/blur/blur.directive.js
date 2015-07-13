(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur', [])
    .directive('hypBlurContainer', ['$timeout', 'TweenLite', 'TweenLiteEasings', function ($timeout, TweenLite, TweenLiteEasings) {
      // The animation duration. This is used as the base to calculate the blur of other resources.
      var ANIMATION_DURATION = 250;
      var EASING = TweenLiteEasings.Power3.easeInOut;

      // A flag which tells if the container is blurred or not!
      var isBlurred = false;

      function fadeMe(elements, fadeType, delay, duration, fast) {
        // The default options.
        var delay = (angular.isNumber(delay) ? delay : 0) / 1000;
        var duration = (angular.isNumber(duration) ? duration : ANIMATION_DURATION) / 1000;

        // Overwrites the delay and duration if fast is set to true
        if (fast) {
          delay = 0;
          duration = 0;
        }

        var tweenLiteArgs = [elements, ANIMATION_DURATION, {
          delay: delay,
          ease: EASING
        }];

        TweenLite.to(elements, duration, {
          autoAlpha: (fadeType === 'fadeOut') ? 0 : 1,
          delay: delay,
          ease: EASING
        });
      }

      return {
        link: function (scope, iElement, iAttrs, fancySliderController) {
          fancySliderController.blur.blur = function (onSuccess) {
            blurAll(true, onSuccess);
          };
          fancySliderController.blur.unblur = function (onSuccess) {
            blurAll(false, onSuccess);
          };

          fancySliderController.blur.fastBlur = function () {
            blurAll(true, undefined, true);
          };
          fancySliderController.blur.fastUnblur = function () {
            blurAll(false, undefined, true);
          };

          fancySliderController.blur.isBlurred = function () {
            return isBlurred;
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
              fadeMe(blurringMaterial.overlay, (showBlurredResources ? 'fadeIn' : 'fadeOut'), 0, ANIMATION_DURATION * 4 / 3, fast);

              // The depth bars
              fadeMe((showBlurredResources ? blurringMaterial.bars.unblurred : blurringMaterial.bars.blurred), 'fadeOut', ANIMATION_DURATION / 2, ANIMATION_DURATION / 2, fast);
              fadeMe((showBlurredResources ? blurringMaterial.bars.blurred : blurringMaterial.bars.unblurred), 'fadeIn', 0, ANIMATION_DURATION, fast);

              // The resources
              fadeMe((showBlurredResources ? blurringMaterial.resources.unblurred : blurringMaterial.resources.blurred), 'fadeOut', ANIMATION_DURATION / 2, ANIMATION_DURATION / 2, fast);
              fadeMe((showBlurredResources ? blurringMaterial.resources.blurred : blurringMaterial.resources.unblurred), 'fadeIn', 0, ANIMATION_DURATION, fast);

              if (angular.isFunction(onSuccess)) {
                // todo the delay is a hardcoded value! If you change the delay or animation duration of the above elements,
                // this may also require a change.
                $timeout(onSuccess, ANIMATION_DURATION * 4 / 3);
              }
            }
          }

          window.gigel = fancySliderController.blur;
        },
        restrict: 'A',
        require: '^hypFancySlider'
      };
    }]);
})();
