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
            // Changing this, from autoDetectRenderer to CanvasRenderer, increases the loading time. 
            // I'm not sure what's the performance impact. todo check this!
            renderer = new PIXI.autoDetectRenderer(Configuration.NATIVE_WIDTH, Configuration.NATIVE_HEIGHT, {
              antialised: false,
              transparent: true
            });

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
            var animationsControllers = Animations.getControllers();
            // Sets the global renderer
            Animations.setGlobalOnUpdate(function () {
              renderer.render(stage);
            });
            animationsControllers.throwIn(function () {
              scope.$evalAsync(function () {
                scope.changeSlidesToRight = animationsControllers.toRight;
              });

              // todo Shouldn't we debounce this?
              angular.element($window).on('keydown', function (event) {
                if (event.keyCode === 39) {
                  animationsControllers.toRight();
                } else if (event.keyCode === 37) {
                  animationsControllers.toLeft();
                }
              });
            });

            console.log('stage', stage);
            console.log('depthBars', depthBars);
            console.log('animationsControllers', animationsControllers);
            console.log('blur', Blur.get());
          });
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    }]);
})();
