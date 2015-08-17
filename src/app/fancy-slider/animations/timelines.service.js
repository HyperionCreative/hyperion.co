(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations')
    .service('FancyAnimationsTimelines', ['FancyConfiguration', 'TweenEasings', 'TweenTimelineLite', function (Configuration, TweenEasings, TweenTimelineLite) {
      this.get = get;
      this.init = init;

      ///////////////
      // Variables //
      ///////////////
      var timelines;
      var stage, renderer;

      ////////////
      // Public //
      ////////////
      function get() {
        if (angular.isUndefined(timelines)) {
          throw 'FancyAnimationsTimelineCreator service was not initialized correctly!';
        }

        return timelines;
      }

      function init(_stage, _renderer, resources) {
        stage = _stage;
        renderer = _renderer;
        
        timelines = {
          firstFromTheBottom: createVerticalTimeline(resources.firstSlide),

          firstToSecond: createHorizontalTimeline(resources.firstSlide, resources.secondSlide, true),
          secondToThird: createHorizontalTimeline(resources.secondSlide, resources.thirdSlide, true),
          thirdToFirst: createHorizontalTimeline(resources.thirdSlide, resources.firstSlide, true),

          firstToThird: createHorizontalTimeline(resources.firstSlide, resources.thirdSlide, false),
          thirdToSecond: createHorizontalTimeline(resources.thirdSlide, resources.secondSlide, false),
          secondToFirst: createHorizontalTimeline(resources.secondSlide, resources.firstSlide, false)
        };
      }

      /////////////
      // Private //
      /////////////
      function addToTimeline(timeline, resource, fromPosition, toPosition, duration, ease) {
        timeline.fromTo(resource, duration / 1000, {
          x: fromPosition.x,
          y: fromPosition.y,
          z: 0,
          rotation: fromPosition.rotation
        }, {
          x: toPosition.x,
          y: toPosition.y,
          z: 0,
          rotation: toPosition.rotation,

          ease: ease
        }, 0);
      }

      function createHorizontalTimeline(fromResources, toResources, leftToRight) {
        var timeline = createTimeline();

        angular.forEach(fromResources, function (fromResource) {
          addToTimeline(timeline, fromResource.sprite, fromResource.positions.center, fromResource.positions[leftToRight ? 'left' : 'right'], Configuration.ANIMATION_DURATION, Configuration.ANIMATION_EASING);
        });

        angular.forEach(toResources, function (toResource) {
          addToTimeline(timeline, toResource.sprite, toResource.positions[leftToRight ? 'right' : 'left'], toResource.positions.center, Configuration.ANIMATION_DURATION, Configuration.ANIMATION_EASING);
        });

        return timeline;
      }

      function createVerticalTimeline(fromResources) {
        var timeline = createTimeline();

        angular.forEach(fromResources, function (fromResource) {
          addToTimeline(timeline, fromResource.sprite, fromResource.positions.bottom, fromResource.positions.center, Configuration.ANIMATION_DURATION, Configuration.ANIMATION_THROW_IN_EASING);
        });

        return timeline;
      }

      function createTimeline() {
        return new TweenTimelineLite({
          paused: true,

          onStart: function () {},
          onUpdate: function () {
            renderer.render(stage);
          },
          onComplete: function () {}
        });
      }
    }]);
})();
