(function () {
  'use strict';

  // Since we're rendering the stage only in onUpdate in the timeline, the resize changes won't be visible
  // until the animation is triggered again. todo fix this

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', ['$timeout', 'PIXI', 'TweenLite', 'FancyAnimations', 'FancyConfiguration', 'FancyDepthBars', 'FancyResources', 'FancySliderInitializer', 'Preloader', function ($timeout, PIXI, TweenLite, Animations, Configuration, DepthBars, Resources, SliderInitializer, Preloader) {
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

          SliderInitializer.init(function(){
            // Everything is ready!
          });

          // This will be added shortly after I make sure I didn't break anything
          // // Adds the depth bars to the stage.
          // var depthBars = DepthBars.get();
          // angular.forEach(depthBars, function (depthBar) {
          //   stage.addChild(depthBar);
          // });
          // // Renders the added depth bars
          // renderer.render(stage);

          // // The resources are added when they're loaded
          // var preloaderListener = scope.$watch(function () {
          //   return Preloader.getTotalProgress();
          // }, function (newValue) {
          //   if (newValue === 100) {
          //     // Init the resources
          //     Resources.init(function () {
          //       var
          //         slidesAndResources = Resources.get(),
          //         animations = Animations.get(function () {
          //           // This is how the scene will get rendered! 
          //           // Each time a Timeline is playing, trigger a scene render
          //           renderer.render(stage);
          //         });

          //       // Adds the resources to the stage.
          //       angular.forEach(slidesAndResources, function (resources) {
          //         angular.forEach(resources, function (resource) {
          //           stage.addChild(resource.sprite);
          //         });
          //       });

          //       // Applies zIndex
          //       stage.children.sort(function (a, b) {
          //         a.zIndex = a.zIndex || 0;
          //         b.zIndex = b.zIndex || 0;
          //         return a.zIndex - b.zIndex;
          //       });

          //       // Renders the newly added and sorted resources
          //       renderer.render(stage);

          //       // Hides everything from sight - moves everything to the left.
          //       animations.secondToThird.pause().progress(1);
          //       animations.thirdToFirst.pause().progress(1);

          //       // Pixi constantly triggers RAF. We disable it as RAF will be triggered by TweenLite's ticker!
          //       // 
          //       // todo in case of performance issues, this may be one of the culprits. I've read through
          //       // PIXI source code that some extra RAFs are needed in order to stabilize things.
          //       PIXI.ticker.shared.stop();

          //       // The animations!
          //       // Without this line, the first slide may flicker!
          //       animations.firstFromTheBottom.pause().progress(0.01);
          //       // It starts after 10 seconds to the slider has time to settle.
          //       $timeout(function () {
          //         var
          //           canAnimate = false,
          //           currentSlide = 0,
          //           animationMoments = ['firstToSecond', 'secondToThird', 'thirdToFirst'];

          //         animations.firstFromTheBottom.play();

          //         // Waits for fromBottom to finish
          //         setTimeout(function () {
          //           canAnimate = true;
          //         }, Configuration.ANIMATION_DURATION);

          //         // The controls
          //         scope.changeSlides = function () {
          //           if (canAnimate) {
          //             canAnimate = false;

          //             setTimeout(function () {
          //               canAnimate = true;
          //             }, Configuration.ANIMATION_DURATION);

          //             animations[animationMoments[currentSlide]].restart();

          //             currentSlide = (currentSlide + 1) % 3;
          //           }
          //         };
          //       }, 10);

          //       // Helpful logs
          //       console.log('stage', stage);
          //       // console.log('depthBars', depthBars);
          //       console.log('animations', animations);

          //       // Unregisters the (night) watch
          //       preloaderListener();
          //     });
          //   }
          // });
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    }]);
})();
