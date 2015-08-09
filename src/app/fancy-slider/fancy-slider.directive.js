(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', ['PIXI', 'TweenLite', 'FancyAnimations', 'FancyConfiguration', 'FancyDepthBars', 'FancyResources', function (PIXI, TweenLite, Animations, Configuration, DepthBars, Resources) {
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

          var
            depthBars = DepthBars.get(),
            slidesAndResources = Resources.get();

          ///////////////
          // Run block //
          ///////////////

          // Appends the canvas, thus initializing pixi.
          angular.element(iElement[0].querySelector('.stage-container')).append(renderer.view);

          // This is how the scene will get rendered! 
          // Each time a Timeline is playing, trigger a scene render
          var animations = Animations.get(function () {
            renderer.render(stage);
          });

          // Adds the resources to the stage.
          angular.forEach(slidesAndResources, function (resources) {
            angular.forEach(resources, function (resource) {
              stage.addChild(resource.sprite);
            });
          });

          // Adds the depth bars to the stage.
          angular.forEach(depthBars, function (depthBar) {
            stage.addChild(depthBar);
          });

          // Applies zIndex
          stage.children.sort(function (a, b) {
            a.zIndex = a.zIndex || 0;
            b.zIndex = b.zIndex || 0;
            return a.zIndex - b.zIndex;
          });

          // Hides everything from sight - moves everything to the left.
          animations.secondToThird.pause().progress(1);
          animations.thirdToFirst.pause().progress(1);

          // Pixi constantly triggers RAF. We disable it as RAF will be triggered by TweenLite's ticker!
          // 
          // todo in case of performance issues, this may be one of the culprits. I've read through
          // PIXI source code that some extra RAFs are needed in order to stabilize things.
          PIXI.ticker.shared.stop();

          // The animations
          var
            canAnimate = false,
            currentSlide = 0,
            animationMoments = ['firstToSecond', 'secondToThird', 'thirdToFirst'];

          animations.firstFromTheBottom.play();

          // Waits for fromBottom to finish
          setTimeout(function(){
            canAnimate = true;
          }, Configuration.ANIMATION_DURATION);

          // The controls
          scope.changeSlides = function(){
            if (canAnimate) {
              canAnimate = false;

              setTimeout(function(){
                canAnimate = true;
              }, Configuration.ANIMATION_DURATION);

              animations[animationMoments[currentSlide]].restart();

              currentSlide = (currentSlide + 1) % 3;
            }
          };

          // Helpful logs
          console.log('stage', stage);
          console.log('depthBars', depthBars);
          console.log('animations', animations);
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    }]);
})();
