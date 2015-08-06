(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations', [
      'app.fancy-slider.resources',
      'common.gsap-lite'
    ])
    .service('FancyAnimations', ['$timeout', 'FancyConfiguration', 'FancyResources', 'TweenLite', function ($timeout, Configuration, FancyResources, TweenLite) {
      this.get = get;

      ///////////////
      // Variables //
      ///////////////
      var animations;

      ////////////
      // Public //
      ////////////
      function get() {
        // Call init only if needed!
        if (angular.isUndefined(animations)) {
          animations = init();
        }

        return animations;
      }

      /////////////
      // Private //
      /////////////
      function animate(resource, position, fast) {
        TweenLite.to(resource.sprite, (fast === true) ? 0 : Configuration.ANIMATION_DURATION, {
          x: position.x,
          y: position.y,
          z: 0,
          rotation: position.rotation,
          ease: Configuration.ANIMATION_EASING
        });
      }

      function animationHandler(resources, positionName) {
        return function (onSuccess, fast) {
          angular.forEach(resources, function (resource) {
            animate(resource, resource.positions[positionName], fast);
          });

          if (angular.isFunction(onSuccess)) {
            $timeout(onSuccess, Configuration.ANIMATION_DURATION);
          }
        };
      }

      function init() {
        var resources = FancyResources.get();

        return {
          firstSlide: {
            toBottom: animationHandler(resources.firstSlide, 'bottom'),
            toCenter: animationHandler(resources.firstSlide, 'center'),
            toLeft: animationHandler(resources.firstSlide, 'left'),
            toRight: animationHandler(resources.firstSlide, 'right')
          },
          secondSlide: {
            toCenter: animationHandler(resources.secondSlide, 'center'),
            toLeft: animationHandler(resources.secondSlide, 'left'),
            toRight: animationHandler(resources.secondSlide, 'right')
          },
          thirdSlide: {
            toCenter: animationHandler(resources.thirdSlide, 'center'),
            toLeft: animationHandler(resources.thirdSlide, 'left'),
            toRight: animationHandler(resources.thirdSlide, 'right')
          }
        };
      }
    }]);
})();
