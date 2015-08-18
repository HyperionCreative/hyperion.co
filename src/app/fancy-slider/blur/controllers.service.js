(function () {
  'use strict';

  // Cred ca ii bag si lu asta un init. el va opera pe blurResources.
  // toate astea de blur se apeleaza cu slide'ul curent. el isi ia singur rezolutia din viewport
  // si in functie de aia stie sa ascunda sau sa afiseze poza blurata care trebuie
  // oare sa adaug aici spriteurile slide descriptionului?
  // si oare acestea, sa fie facute in canvas sau ca sprite png css.hmmmm

  angular
    .module('app.fancy-slider.blur')
    .service('FancyBlurControllers', ['FancyConfiguration', 'TweenLite', 'ViewportSize', function (Configuration, TweenLite, ViewportSize) {
      this.get = get;
      this.init = init;
      this.isBlurred = getIsBlurred;

      ///////////////
      // Variables //
      ///////////////
      var controllers;
      var blurContainer, blurredBackgrounds;
      var stage, renderer;
      var isBlurred;

      ////////////
      // Public //
      ////////////
      function get() {
        if (angular.isUndefined(controllers)) {
          throw 'FancyBlurControllers service was not initialized correctly!';
        }

        return controllers;
      }

      function init(blurResources, _stage, _renderer) {
        blurContainer = blurResources.blurContainer;
        blurredBackgrounds = blurResources.blurredBackgrounds;

        stage = _stage;
        renderer = _renderer;

        blurContainer.alpha = 0;
        isBlurred = false;

        blurContainer.zIndex = 999;

        stage.addChild(blurContainer);

        controllers = {
          blurStage: getBlurFunction(Configuration.BLUR_ANIMATION_DURATION / 1000, true),
          unblurStage: getBlurFunction(Configuration.BLUR_ANIMATION_DURATION / 1000, false),
          fastBlurStage: getBlurFunction(0, true),
          fastUnblurStage: getBlurFunction(0, false)
        };
      }

      /////////////
      // Private //
      /////////////
      function getBlurFunction(duration, toBlur) {
        return function (currentSlide, onComplete) {
          // Do the blur animation only when needed
          if (toBlur !== isBlurred) {
            if (!angular.isNumber(currentSlide)) {
              throw 'FancyBlurControllers must be called with the required param currentSlide!';
            }

            isBlurred = toBlur;

            // Hides all blurred backgrounds
            hideAllBlurredBackgrounds();
            var context = (ViewportSize.get().width > 1920 ? 'large' : 'small');
            // Show only the current slide blurred background
            blurredBackgrounds[context][currentSlide].alpha = 1;

            TweenLite.fromTo(blurContainer, duration, {
              alpha: !toBlur ? 1 : 0
            }, {
              alpha: toBlur ? 1 : 0,
              onUpdate: function () {
                renderer.render(stage);
              },
              onComplete: function () {
                if (angular.isFunction(onComplete)) {
                  onComplete();
                }
              },
              ease: Configuration.BLUR_ANIMATION_EASING
            });
          }
        };
      }

      function hideAllBlurredBackgrounds() {
        angular.forEach(blurredBackgrounds, function (category) {
          angular.forEach(category, function (blurredBackground) {
            blurredBackground.alpha = 0;
          });
        });
      }

      function getIsBlurred() {
        return isBlurred;
      }
    }]);
})();
