(function () {
  'use strict';

  // This current animation is OKish.

  angular
    .module('app.fancy-slider.animations')
    .service('FancyAnimationsControllers', function () {
      this.get = get;
      this.init = init;
      // Helpers
      this.isAnimating = isAnimating;

      ///////////////////
      // Configuration //
      ///////////////////
      var THROW_IN_SELECTOR = 'firstFromTheBottom';
      var
        RIGHT_ORDER = ['firstToSecond', 'secondToThird', 'thirdToFirst'],
        LEFT_ORDER = ['firstToThird', 'secondToFirst', 'thirdToSecond'];
      var NORMAL_SPEED = 1;
      var MAX_QUEUE_LENGTH = 2;

      ///////////////
      // Variables //
      ///////////////
      var controllers, timelines;
      var timelineSpeed;
      var timelineHandlersQueue = [];

      ////////////
      // Public //
      ////////////
      function get() {
        if (angular.isUndefined(controllers)) {
          throw 'FancyAnimationsControl service was not initialized correctly!';
        }

        return controllers;
      }

      function init(_timelines) {
        timelines = _timelines;

        // Everything is moved out of sight except the first slide which remains
        // on screen (in its center position);
        timelines.secondToThird.pause().progress(1);
        timelines.thirdToFirst.pause().progress(1);

        controllers = {
          throwIn: throwIn,
          toLeft: toLeft,
          toRight: toRight
        };
      }

      function isAnimating() {
        return timelineHandlersQueue.length > 0;
      }

      ////////////
      // Public //
      ////////////
      function throwIn(onComplete, fast) {
        // This is not hooked up to handleTimeline as we know that this only
        // runs when the slider starts. This is also why it has an extra
        // parameter.
        if (timelineHandlersQueue.length >= MAX_QUEUE_LENGTH) {
          return false;
        } else {
          if (fast) {
            // This is a special case. We don't need to animate anything as the 
            // resources are already centered!
            // We just need to call the onComplete callback if it exists!
            if (angular.isFunction(onComplete)) {
              onComplete();
            }
          } else {
            var timeline = timelines[THROW_IN_SELECTOR];

            handleTimeline(timeline, onComplete);
          }

          return true;
        }
      }

      function toLeft(currentSlide, onComplete) {
        if (timelineHandlersQueue.length >= MAX_QUEUE_LENGTH || (angular.isDefined(timelineHandlersQueue[0]) && timelineHandlersQueue[0].getProgress() < 0.1)) {
          return false;
        } else {
          var timeline = timelines[LEFT_ORDER[currentSlide]];

          handleTimeline(timeline, onComplete);

          return true;
        }
      }

      function toRight(currentSlide, onComplete) {
        if (timelineHandlersQueue.length >= MAX_QUEUE_LENGTH || (angular.isDefined(timelineHandlersQueue[0]) && timelineHandlersQueue[0].getProgress() < 0.1)) {
          return false;
        } else {
          var timeline = timelines[RIGHT_ORDER[currentSlide]];

          handleTimeline(timeline, onComplete);

          return true;
        }
      }

      /////////////
      // Private //
      /////////////
      function getTimelineSpeed(currentProgress) {
        currentProgress *= 100;

        currentProgress =
          currentProgress < 30 ? 30 :
          currentProgress > 100 ? 100 :
          currentProgress;

        // The max speed is 1.85
        return 1 + ((100 - currentProgress) * ((1.85 - 1) / 70));
      }

      function handleTimeline(timeline, specificOnComplete) {
        // Updates the global timeline speed. This is used by all the timelines
        // present in the queue.
        timelineSpeed = getTimelineSpeed(angular.isDefined(timelineHandlersQueue[0]) ? timelineHandlersQueue[0].getProgress() : 100);

        timelineHandlersQueue.push(new TimelineHandlers(timeline, function () {
          if (angular.isFunction(specificOnComplete)) {
            specificOnComplete();
          }

          // Removes itself from the queue
          timelineHandlersQueue.shift();

          // Runs the remaining handlers
          if (angular.isDefined(timelineHandlersQueue[0])) {
            timelineHandlersQueue[0].setTimelineSpeed(timelineSpeed);
            timelineHandlersQueue[0].play();
          } else {
            // Resets the global timelineSpeed as the queue is now empty
            timelineSpeed = NORMAL_SPEED;
          }
        }));

        // This starts the queue!
        if (timelineHandlersQueue.length === 1) {
          timelineHandlersQueue[0].play();
        }

        timelineHandlersQueue[0].setTimelineSpeed(timelineSpeed);
      }

      // Constructors
      function TimelineHandlers(timeline, onComplete) {
        this.onComplete = onComplete;
        this.timeline = timeline;

        this.play = function () {
          this.timeline.vars.onComplete = this.onComplete;
          this.timeline.restart();
        };

        this.getProgress = function () {
          return this.timeline.progress();
        };

        this.setTimelineSpeed = function (speed) {
          this.timeline.timeScale(speed);
        };
      }
    });
})();
