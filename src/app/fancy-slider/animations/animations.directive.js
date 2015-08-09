(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations', [
      'app.fancy-slider.resources',
      'common.gsap-lite'
    ])
    .service('FancyAnimations', ['FancyConfiguration', 'FancyResources', 'TweenLite', 'TweenTimelineLite', function (Configuration, Resources, TweenLite, TweenTimelineLite) {
      this.get = get;

      ///////////////
      // Variables //
      ///////////////
      var animations;
      var onUpdate;

      ////////////
      // Public //
      ////////////
      function get(globalOnUpdate) {
        // Call init only if needed!
        if (angular.isUndefined(animations)) {
          onUpdate = globalOnUpdate;
          animations = init();
        }

        return animations;
      }

      /////////////
      // Private //
      /////////////
      function addToTimeline(timeline, resource, fromPosition, toPosition) {
        timeline.fromTo(resource, Configuration.ANIMATION_DURATION / 1000, {
          x: fromPosition.x,
          y: fromPosition.y,
          z: 0,
          rotation: fromPosition.rotation
        }, {
          x: toPosition.x,
          y: toPosition.y,
          z: 0,
          rotation: toPosition.rotation,

          ease: Configuration.ANIMATION_EASING
        }, 0);
      }

      function createHorizontalTimeline(fromResources, toResources) {
        var timeline = new TweenTimelineLite({
          paused: true,
          onUpdate: onUpdate
        });

        angular.forEach(fromResources, function (fromResource) {
          addToTimeline(timeline, fromResource.sprite, fromResource.positions.center, fromResource.positions.left);
        });

        angular.forEach(toResources, function (toResource) {
          addToTimeline(timeline, toResource.sprite, toResource.positions.right, toResource.positions.center);
        });

        return timeline;
      }

      function createVerticalTimeline(fromResources) {
        var timeline = new TweenTimelineLite({
          paused: true,
          onUpdate: onUpdate
        });

        angular.forEach(fromResources, function (fromResource) {
          addToTimeline(timeline, fromResource.sprite, fromResource.positions.bottom, fromResource.positions.center);
        });

        return timeline;
      }

      function init() {
        var resources = Resources.get();

        return {
          firstFromTheBottom: createVerticalTimeline(resources.firstSlide),
          firstToSecond: createHorizontalTimeline(resources.firstSlide, resources.secondSlide),
          secondToThird: createHorizontalTimeline(resources.secondSlide, resources.thirdSlide),
          thirdToFirst: createHorizontalTimeline(resources.thirdSlide, resources.firstSlide)
        };
      }
    }]);
})();
