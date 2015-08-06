(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', ['MAX_SUPPORTED_HEIGHT', 'MAX_SUPPORTED_WIDTH', 'PIXI', 'TweenLite', 'CssVendorPrefixer', 'FancyAnimations', 'FancyResources', 'FancySliderResizer', function (MAX_SUPPORTED_HEIGHT, MAX_SUPPORTED_WIDTH, PIXI, TweenLite, CssVendorPrefixer, FancyAnimations, FancyResources, FancySliderResizer) {
      return {
        link: function (scope, iElement) {
          ///////////////
          // Variables //
          ///////////////
          var
            stage = new PIXI.Container(),
            renderer = new PIXI.autoDetectRenderer(MAX_SUPPORTED_WIDTH, MAX_SUPPORTED_HEIGHT, {
              antialised: false,
              transparent: true
            });

          var
            animations = FancyAnimations.get(),
            slidesAndResources = FancyResources.get();

          ///////////////
          // Run block //
          ///////////////

          // Appends the canvas, thus initializing pixi.
          iElement.append(renderer.view);

          // Sets the resizer in place.
          var canvas = angular.element(iElement[0].querySelector('canvas'));
          FancySliderResizer.onProportionChange(function (proportion) {
            canvas.css({
              'margin-left': -(MAX_SUPPORTED_WIDTH * proportion / 2) + 'px',
            });

            canvas.css(CssVendorPrefixer.prefixProperty('transform', 'translate3d(0,0,0) scale(' + proportion + ',' + proportion + ')'));
          });

          // Adds the resources to the stage.
          angular.forEach(slidesAndResources, function (resources) {
            angular.forEach(resources, function (resource) {
              stage.addChild(resource.sprite);
            });
          });

          // Hides everything from sight - moves everything to the left.
          animations.firstSlide.toLeft(undefined, true);
          animations.secondSlide.toLeft(undefined, true);
          animations.thirdSlide.toLeft(undefined, true);

          // Pixi constantly triggers RAF. We disable it as RAF will be triggered by TweenLite's ticker!
          // 
          // todo in case of performance issues, this may be one of the culprits. I've read through
          // PIXI source code that some extra RAFs are needed in order to stabilize things.
          PIXI.ticker.shared.stop();

          // This is how the scene will get rendered! 
          // Each time TweenLite triggers a tick, we draw the scene.
          TweenLite.ticker.addEventListener('tick', function () {
            renderer.render(stage);
          });

          // Only start the ticker when needed otherwise RAF will be triggered endlessly.
          // I suspect this is a bug on GSAP side.
          // 
          // todo in case of performance issues, this may be one of the culprits.
          TweenLite.ticker.sleep();

          console.log(animations);
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    }]);
})();
