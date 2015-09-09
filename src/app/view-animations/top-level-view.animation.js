(function () {
  'use strict';

  angular
    .module('app.view-animations')
    .animation('.top-level-view-animation', ['TweenLite', 'TweenEasings', function (TweenLite, TweenEasings) {
      var DURATION = 250 / 1000;
      var EASING = TweenEasings.Power1.easeInOut;

      var CONTAINER_TRAVEL = 250;
      var HEADER_TRAVEL = 125;

      return {
        enter: function (element, doneFn) {
          if (element[0].querySelector('.header-index') !== null) {
            // The main page enters the screen
            var headerIndex = element[0].querySelector('.header-index');

            if (headerIndex === null) {
              doneFn();
              return;
            }

            TweenLite.fromTo(headerIndex, DURATION * 0.7, {
              autoAlpha: 0,
              z: 0
            }, {
              autoAlpha: 1,
              z: 0,

              ease: EASING,
              onComplete: doneFn
            });
          } else {
            // A sub page enters the screen
            var navigationHamburger = element[0].querySelector('.navigation-hamburger');
            var container = element[0].querySelector('.top-level-animation-container');

            if (navigationHamburger === null || container === null) {
              doneFn();
              return;
            }

            TweenLite.fromTo(navigationHamburger, DURATION, {
              autoAlpha: 0,
              y: -HEADER_TRAVEL,
              z: 0
            }, {
              autoAlpha: 1,
              y: 0,
              z: 0,

              ease: EASING
            });

            TweenLite.fromTo(container, DURATION, {
              autoAlpha: 0,
              y: CONTAINER_TRAVEL,
              z: 0
            }, {
              autoAlpha: 1,
              y: 0,
              z: 0,

              ease: EASING,
              onComplete: doneFn
            });
          }
        },
        leave: function (element, doneFn) {
          if (element[0].querySelector('.header-index') !== null) {
            // The main page leaves the screen
            var headerIndex = element[0].querySelector('.header-index');

            if (headerIndex === null) {
              doneFn();
              return;
            }

            TweenLite.fromTo(headerIndex, DURATION * 0.7, {
              autoAlpha: 1,
              z: 0
            }, {
              autoAlpha: 0,
              z: 0,

              ease: EASING,
              onComplete: doneFn
            });
          } else {
            // A sub page leaves the screen
            var navigationHamburger = element[0].querySelector('.navigation-hamburger');
            var container = element[0].querySelector('.top-level-animation-container');

            if (navigationHamburger === null || container === null) {
              doneFn();
              return;
            }

            TweenLite.fromTo(navigationHamburger, DURATION, {
              autoAlpha: 1,
              y: 0,
              z: 0
            }, {
              autoAlpha: 0,
              y: -HEADER_TRAVEL,
              z: 0,

              ease: EASING
            });

            TweenLite.fromTo(container, DURATION, {
              autoAlpha: 1,
              y: 0,
              z: 0
            }, {
              autoAlpha: 0,
              y: CONTAINER_TRAVEL,
              z: 0,

              ease: EASING,
              onComplete: doneFn
            });
          }
        }
      };
    }]);
})();
