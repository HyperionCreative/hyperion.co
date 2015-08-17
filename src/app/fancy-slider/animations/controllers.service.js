(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations')
    .service('FancyAnimationsControllers', function () {
      this.get = get;
      this.init = init;
      // Helpers
      this.getCurrentSlide = getCurrentSlide;
      this.isAnimating = isAnimating;

      ///////////////////
      // Configuration //
      ///////////////////
      var
        FIRST_SLIDE = 0,
        SLIDES_COUNT = 3;
      var THROW_IN_SELECTOR = 'firstFromTheBottom';
      var
        RIGHT_ORDER = ['firstToSecond', 'secondToThird', 'thirdToFirst'],
        LEFT_ORDER = ['firstToThird', 'secondToFirst', 'thirdToSecond'];
      var
        NORMAL_SPEED = 1,
        MAX_SPEED = 20,
        SPEED_STEP = 1;
      var MAX_QUEUE_LENGTH = 20;

      ///////////////
      // Variables //
      ///////////////
      var controls, timelines;
      // It starts from the beginning
      var currentSlide = FIRST_SLIDE;
      var timelineSpeed;
      var timelineHandlersQueue = [];

      ////////////
      // Public //
      ////////////
      function get() {
        if (angular.isUndefined(controls)) {
          throw 'FancyAnimationsControl service was not initialized correctly!';
        }

        return controls;
      }

      function init(_timelines) {
        timelines = _timelines;

        // Everything is moved out of sight except the first slide which remains
        // on screen (in its center position);
        timelines.secondToThird.pause().progress(1);
        timelines.thirdToFirst.pause().progress(1);

        controls = {
          throwIn: throwIn,
          toLeft: toLeft,
          toRight: toRight
        };
      }

      function getCurrentSlide() {
        return currentSlide;
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
          return;
        }


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
      }

      function toLeft(onComplete) {
        if (timelineHandlersQueue.length >= MAX_QUEUE_LENGTH) {
          return;
        }

        var timeline = timelines[LEFT_ORDER[currentSlide]];

        currentSlide -= 1;
        currentSlide = (currentSlide < 0) ? SLIDES_COUNT - 1 : currentSlide;

        handleTimeline(timeline, onComplete);
      }

      function toRight(onComplete) {
        if (timelineHandlersQueue.length >= MAX_QUEUE_LENGTH) {
          return;
        }

        var timeline = timelines[RIGHT_ORDER[currentSlide]];

        currentSlide += 1;
        currentSlide = currentSlide % SLIDES_COUNT;

        handleTimeline(timeline, onComplete);
      }

      /////////////
      // Private //
      /////////////
      function getTimelineSpeed() {
        var toReturn = NORMAL_SPEED + (SPEED_STEP * timelineHandlersQueue.length);

        if (toReturn > MAX_SPEED) {
          toReturn = MAX_SPEED;
        } else if (toReturn < NORMAL_SPEED) {
          toReturn = NORMAL_SPEED;
        }

        return toReturn;
      }

      function handleTimeline(timeline, specificOnComplete) {
        // Updates the global timeline speed. This is used by all the timelines
        // present in the queue.
        timelineSpeed = getTimelineSpeed();

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

        this.setTimelineSpeed = function (speed) {
          this.timeline.timeScale(speed);
        };
      }
    });
})();
