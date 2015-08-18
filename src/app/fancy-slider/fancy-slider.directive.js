(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', ['$rootScope', '$window', 'PIXI', 'FancyAnimations', 'FancyBlur', 'FancyConfiguration', 'FancySliderInitializer', function ($rootScope, $window, PIXI, Animations, Blur, Configuration, SliderInitializer) {
      return {
        link: function (scope, iElement) {
          ///////////////
          // Variables //
          ///////////////
          var
            stage = new PIXI.Container(),
            // Changing this, from autoDetectRenderer to CanvasRenderer, increases the loading time. 
            // I'm not sure what's the performance impact. todo check this!
            renderer = new PIXI.autoDetectRenderer(Configuration.NATIVE_WIDTH, Configuration.NATIVE_HEIGHT, {
              antialised: false,
              transparent: true
            });

          var
            FIRST_SLIDE = 0,
            SLIDES_COUNT = 3,
            // It starts from the beginning
            currentSlide = FIRST_SLIDE;

          ///////////////////
          // Configuration //
          ///////////////////
          // Pixi constantly triggers RAF. We disable it as RAF will be triggered by TweenLite's ticker!
          // 
          // todo in case of performance issues, this may be one of the culprits. I've read through
          // PIXI source code that some extra RAFs are needed in order to stabilize things.
          PIXI.ticker.shared.stop();

          ///////////////
          // Run block //
          ///////////////

          // Appends the canvas, thus initializing pixi.
          angular.element(iElement[0].querySelector('.stage-container')).append(renderer.view);

          // Everything is ready!
          SliderInitializer.init(stage, renderer, function () {
            // The slider is ready, hooray!
            $rootScope.$emit('fancy-slider.ready');

            // Applies zIndex
            stage.children.sort(function (a, b) {
              a.zIndex = a.zIndex || 0;
              b.zIndex = b.zIndex || 0;
              return a.zIndex - b.zIndex;
            });

            // Renders the newly sorted resources
            renderer.render(stage);

            // The animations
            (function () {
              var animationsControllers = Animations.getControllers();

              function toLeft() {
                if (animationsControllers.toLeft(currentSlide)) {
                  // Only change the current slide if the animationsControllers has actually animated!
                  currentSlide -= 1;
                  currentSlide = (currentSlide < 0) ? SLIDES_COUNT - 1 : currentSlide;
                }
              }

              function toRight() {
                if (animationsControllers.toRight(currentSlide)) {
                  // Only change the current slide if the animationsControllers has actually animated!
                  currentSlide += 1;
                  currentSlide = currentSlide % SLIDES_COUNT;
                }
              }

              animationsControllers.throwIn(function () {
                scope.$evalAsync(function () {
                  scope.changeSlidesToRight = toRight;
                });

                // todo Shouldn't we debounce this?
                angular.element($window).on('keydown', function (event) {
                  if (event.keyCode === 39) {
                    toRight();
                  } else if (event.keyCode === 37) {
                    toLeft();
                  }
                });
              });
            })();
          });
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    }]);
})();
