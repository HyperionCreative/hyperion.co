(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', ['$rootScope', '$state', '$window', 'DEVICE_PIXEL_RATIO', 'PIXI', 'FancyAnimations', 'FancyBlur', 'FancyConfiguration', 'FancyResizer', 'FancySliderInitializer', 'ViewportSize', function ($rootScope, $state, $window, DEVICE_PIXEL_RATIO, PIXI, Animations, Blur, Configuration, Resizer, SliderInitializer, ViewportSize) {
      return {
        link: function (scope, iElement) {
          ///////////////
          // Variables //
          ///////////////
          // This is limited to 2 as we don't have @3x resources.
          var pixiResolution = (function () {
            var normalizedDevicePixelRatio = (DEVICE_PIXEL_RATIO < 1) ? 1 : (DEVICE_PIXEL_RATIO > 2) ? 2 : DEVICE_PIXEL_RATIO;

            // The user browses the site using a high dpi laptop screen
            if (angular.isDefined($window.screen) && $window.screen.width <= 1440 && normalizedDevicePixelRatio === 2) {
              // We reduce the dpi as this will increase the performance. Also the difference is not (that) noticeable!
              normalizedDevicePixelRatio = 1.5;
            }

            return normalizedDevicePixelRatio;
          })();

          var
            stage = new PIXI.Container(),
            // Changing this, from autoDetectRenderer to CanvasRenderer, increases the loading time.
            // I'm not sure what's the performance impact. todo check this!
            renderer = new PIXI.autoDetectRenderer(Configuration.NATIVE_WIDTH, Configuration.NATIVE_HEIGHT, {
              autoResize: true,
              transparent: true,
              resolution: pixiResolution
            });
          // Needed in order to scale back to the original size after applying pixiResolution.
          renderer.resize(Configuration.NATIVE_WIDTH, Configuration.NATIVE_HEIGHT);

          // https://code.google.com/p/chromium/issues/detail?id=445542
          // Chrome, Safari and Opera have a limit of 4096 for drawingBufferWidth and drawingBufferHeight.
          // This is a workaround.
          var widthRatio = 1,
            heightRatio = 1;
          (function () {
            // Needed only for WebGl canvases
            if (angular.isDefined(renderer.gl)) {
              var
                expectedWidth = Configuration.NATIVE_WIDTH * pixiResolution,
                expectedHeight = Configuration.NATIVE_HEIGHT * pixiResolution;

              widthRatio = renderer.gl.drawingBufferWidth / expectedWidth;
              heightRatio = renderer.gl.drawingBufferHeight / expectedHeight;

              stage.scale.set(widthRatio, heightRatio);
            }
          })();

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
          PIXI.ticker.autoStart = false;
          PIXI.ticker.shared.stop();

          // Destroy InteractionManager as we're not using it.
          renderer.plugins.interaction.destroy();

          ///////////////
          // Run block //
          ///////////////

          // Needed by slider description in order to change the client's opacity
          iElement.attr('data-active-slide', currentSlide + 1);

          // Appends the canvas, thus initializing pixi.
          angular.element(iElement[0].querySelector('.actual-stage-container')).append(renderer.view);

          // Everything is ready!
          SliderInitializer.init(stage, renderer, function () {
            /*@@@ window.ga('send', 'event', 'Homepage Slider', 'Is init'); @@@*/

            // Variables
            var
              animationsControllers = Animations.getControllers(),
              blurControllers = Blur.getControllers();

            // Functions
            function changeCurrentSlideVar(modifier) {
              currentSlide += modifier;

              if (currentSlide >= SLIDES_COUNT) {
                // Start from the beginning
                currentSlide = 0;
              } else if (currentSlide < 0) {
                // Start from the end
                currentSlide = SLIDES_COUNT - 1;
              }

              // Needed by slider description in order to change the client's opacity
              iElement.attr('data-active-slide', currentSlide + 1);
            }

            function toLeft() {
              if (!Blur.isBlurring() && !Blur.isBlurred() && animationsControllers.toLeft(currentSlide)) {
                changeCurrentSlideVar(-1);
                /*@@@ window.ga('send', 'event', 'Homepage Slider', 'Change to left'); @@@*/
              }
            }

            function toRight() {
              if (!Blur.isBlurring() && !Blur.isBlurred() && animationsControllers.toRight(currentSlide)) {
                changeCurrentSlideVar(1);
                /*@@@ window.ga('send', 'event', 'Homepage Slider', 'Change to right'); @@@*/
              }
            }

            // Run block
            // Applies zIndex
            stage.children.sort(function (a, b) {
              a.zIndex = a.zIndex || 0;
              b.zIndex = b.zIndex || 0;
              return a.zIndex - b.zIndex;
            });

            // Renders the newly sorted resources
            renderer.render(stage);

            // The slider is ready, hooray!
            $rootScope.$emit('fancy-slider.ready');

            // State handling
            (function () {
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
                    } else if (event.keyCode === 27) {
                      $state.go('root.index');
                    }
                  });
                },
                // If we're not on the first page, don't show the animation!
                $state.current.name !== 'root.index');

              if ($state.current.name !== 'root.index') {
                blurControllers.fastBlurStage(currentSlide);
              }

              $rootScope.$on('$stateChangeStart',
                function (event, toState) {
                  if (Blur.isBlurring() || Animations.isAnimating()) {
                    event.preventDefault();
                  } else {
                    if (toState.name === 'root.index') {
                      blurControllers.unblurStage(currentSlide);
                    } else {
                      blurControllers.blurStage(currentSlide);
                    }
                  }
                });
            })();

            // Renders all the changes on resize
            ViewportSize.onChange(function () {
              renderer.render(stage);
            });
          });

          // Resize the stage - maybe this will increase the performance?
          Resizer.onProportionChange(function (proportion) {
            proportion = (proportion <= 1) ? proportion : 1;

            stage.scale.set(widthRatio * proportion, heightRatio * proportion);
          });
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    }]);
})();
