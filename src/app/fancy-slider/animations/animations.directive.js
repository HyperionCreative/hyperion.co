(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations', [
      'app.fancy-slider.resources',
      'common.gsap-lite'
    ])
    .service('FancyAnimations', ['FancyConfiguration', 'TweenLite', 'TweenTimelineLite', function (Configuration, TweenLite, TweenTimelineLite) {
      this.get = get;
      this.init = init;
      this.setGlobalOnUpdate = setGlobalOnUpdate;

      ///////////////
      // Variables //
      ///////////////
      var animations;
      var onUpdate;

      ////////////
      // Public //
      ////////////
      function get() {
        if (angular.isUndefined(animations)) {
          throw 'FancyAnimations module was not initialized correctly!';
        }

        return animations;
      }

      function init(resources) {
        animations = {
          firstFromTheBottom: createVerticalTimeline(resources.firstSlide),

          firstToSecond: createHorizontalTimeline(resources.firstSlide, resources.secondSlide),
          secondToThird: createHorizontalTimeline(resources.secondSlide, resources.thirdSlide),
          thirdToFirst: createHorizontalTimeline(resources.thirdSlide, resources.firstSlide),

          firstToThird: createHorizontalTimeline(resources.firstSlide, resources.thirdSlide),
          thirdToSecond: createHorizontalTimeline(resources.thirdSlide, resources.secondSlide),
          secondToFirst: createHorizontalTimeline(resources.secondSlide, resources.firstSlide)
        };
      }

      function setGlobalOnUpdate(globalOnUpdate) {
        onUpdate = globalOnUpdate;
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
        var timeline = createTimeline();

        angular.forEach(fromResources, function (fromResource) {
          addToTimeline(timeline, fromResource.sprite, fromResource.positions.center, fromResource.positions.left);
        });

        angular.forEach(toResources, function (toResource) {
          addToTimeline(timeline, toResource.sprite, toResource.positions.right, toResource.positions.center);
        });

        return timeline;
      }

      function createVerticalTimeline(fromResources) {
        var timeline = createTimeline();

        angular.forEach(fromResources, function (fromResource) {
          addToTimeline(timeline, fromResource.sprite, fromResource.positions.bottom, fromResource.positions.center);
        });

        return timeline;
      }

      function createTimeline() {
        return new TweenTimelineLite({
          paused: true,
          onUpdate: function () {
            if (angular.isFunction(onUpdate)) {
              onUpdate();
            }
          }
        });
      }
    }]);
})();
