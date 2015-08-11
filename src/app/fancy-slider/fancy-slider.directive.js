(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', ['$window', '$rootScope', '$timeout', 'PIXI', 'FancyAnimations', 'FancyBlur', 'FancyConfiguration', 'FancyDepthBars', 'FancyResources', 'FancySliderInitializer', 'ViewportSize', function ($window, $rootScope, $timeout, PIXI, Animations, Blur, Configuration, DepthBars, Resources, SliderInitializer, ViewportSize) {
      return {
        link: function (scope, iElement) {
          ///////////////
          // Variables //
          ///////////////
          var
            stage = new PIXI.Container(),
            renderer = new PIXI.autoDetectRenderer(Configuration.NATIVE_WIDTH, Configuration.NATIVE_HEIGHT, {
              antialised: false,
              transparent: true
            });

          ///////////////
          // Run block //
          ///////////////

          // Appends the canvas, thus initializing pixi.
          angular.element(iElement[0].querySelector('.stage-container')).append(renderer.view);

          // Everything is ready!
          SliderInitializer.init(function () {
            // Adds the depth bars to the stage.
            var depthBars = DepthBars.get();
            angular.forEach(depthBars, function (depthBar) {
              stage.addChild(depthBar);
            });
            // These is needed in order to render the bar changes if the window gets resized.
            ViewportSize.onChange(function () {
              renderer.render(stage);
            });

            // Adds the resources to the stage
            var slidesAndResources = Resources.get();
            angular.forEach(slidesAndResources, function (resources) {
              angular.forEach(resources, function (resource) {
                stage.addChild(resource.sprite);
              });
            });

            // Adds the blur container
            var blurContainer = Blur.get();
            stage.addChild(blurContainer);

            // Applies zIndex
            stage.children.sort(function (a, b) {
              a.zIndex = a.zIndex || 0;
              b.zIndex = b.zIndex || 0;
              return a.zIndex - b.zIndex;
            });

            // Renders the newly added and sorted resources
            renderer.render(stage);

            // The animations
            var animations = Animations.get();
            Animations.setGlobalOnUpdate(function () {
              renderer.render(stage);
            });
            // Hides everything from sight - moves everything to the left.
            animations.secondToThird.pause().progress(1);
            animations.thirdToFirst.pause().progress(1);

            // Pixi constantly triggers RAF. We disable it as RAF will be triggered by TweenLite's ticker!
            // 
            // todo in case of performance issues, this may be one of the culprits. I've read through
            // PIXI source code that some extra RAFs are needed in order to stabilize things.
            PIXI.ticker.shared.stop();

            // Without this line, the first slide may flicker!
            animations.firstFromTheBottom.pause().progress(0.01);
            var
              canAnimate = false,
              currentSlide = 0
            // It starts after 10 seconds to the slider has time to settle.
            $timeout(function () {
              animations.firstFromTheBottom.play();

              // Waits for fromBottom to finish
              setTimeout(function () {
                canAnimate = true;
              }, Configuration.ANIMATION_DURATION);

              // The controls
              scope.changeSlidesToRight = function () {
                if (canAnimate) {
                  canAnimate = false;

                  setTimeout(function () {
                    canAnimate = true;
                  }, Configuration.ANIMATION_DURATION);

                  animations[['firstToSecond', 'secondToThird', 'thirdToFirst'][currentSlide]].restart();

                  currentSlide = (currentSlide + 1) % 3;
                }
              };

              scope.changeSlidesToLeft = function () {
                if (canAnimate) {
                  canAnimate = false;

                  setTimeout(function () {
                    canAnimate = true;
                  }, Configuration.ANIMATION_DURATION);

                  console.log(currentSlide);

                  animations[['firstToThird', 'secondToFirst', 'thirdToSecond'][currentSlide]].restart();
                  // ['firstToThird', 'thirdToSecond', 'secondToFirst']
                  currentSlide -= 1;

                  if (currentSlide < 0) {
                    currentSlide = 2;
                  }
                }
              };

              angular.element($window).on('keydown', function (event) {
                if (event.keyCode === 39) {
                  scope.changeSlidesToRight();
                } else if (event.keyCode === 37) {
                  scope.changeSlidesToLeft();
                }
              });
            }, 10);

            // The blur animation
            $rootScope.$on('$stateChangeStart', function (event, toState) {
              if (toState.name !== 'root.index') {
                canAnimate = false;

                blurContainer.children[0].alpha = 0;
                blurContainer.children[1].alpha = 0;
                blurContainer.children[2].alpha = 0;

                blurContainer.children[currentSlide].alpha = 1;

                TweenLite.to(blurContainer, 0.5, {
                  alpha: 1,
                  onUpdate: function () {
                    renderer.render(stage);
                  },
                  ease: Power3.easeInOut
                });
              } else {
                TweenLite.to(blurContainer, 0.5, {
                  alpha: 0,
                  onUpdate: function () {
                    renderer.render(stage);
                  },
                  onComplete: function () {
                    canAnimate = true;
                  },
                  ease: Power3.easeInOut
                });
              }
            });


            console.log('stage', stage);
            console.log('depthBars', depthBars);
            console.log('animations', animations);
            console.log('blur', Blur.get());
          });
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    }]);
})();
