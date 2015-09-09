(function () {
  'use strict';

  // This will be overwritten inside the run function
  var animations = {
    enter: function (element, doneFn) {
      doneFn();
    },
    leave: function (element, doneFn) {
      doneFn();
    }
  };

  angular
    .module('app.view-animations')
    .animation('.sub-page-view-animation', function () {
      return animations;
    })
    .run(['$document', '$rootScope', '$window', 'TweenLite', 'TweenEasings', function ($document, $rootScope, $window, TweenLite, TweenEasings) {
      // This helps stabilize things before animating the resource
      var DELAY = 50 / 1000;
      var DURATION = 350 / 1000;
      var EASING = TweenEasings.Power1.easeInOut;

      var CONTAINER_TRAVEL = 625;
      var HEADER_TRAVEL = 125;

      // This is the default direction.
      var direction = 'right';
      var nagivationType = '';

      // Determines navigation rules
      (function () {
        ///////////////
        // Constants //
        ///////////////

        // Don't forget to change navigation-hamburger.html after you modify the items' order!
        var topLevelSubPages = [
          'root.sub-page-template.expertise',
          'root.sub-page-template.expertise.consulting',
          'root.sub-page-template.expertise.design',
          'root.sub-page-template.expertise.development',

          'root.sub-page-template.our-processes',
          'root.sub-page-template.portfolio',
          'root.sub-page-template.contact'
        ];
        var portfolioProjectRegExpSource = 'root.sub-page-template.portfolio.';

        ///////////////
        // Functions //
        ///////////////
        function fromSubToSub(toStateName, fromStateName) {
          return topLevelSubPages.indexOf(toStateName) !== -1 && topLevelSubPages.indexOf(fromStateName) !== -1;
        }

        function fromProjectToProject(toStateName, fromStateName) {
          return toStateName.indexOf(portfolioProjectRegExpSource) === 0 && fromStateName.indexOf(portfolioProjectRegExpSource) === 0;
        }

        function toProject(toStateName) {
          return toStateName.indexOf(portfolioProjectRegExpSource) === 0;
        }

        function fromProject(toStateName, fromStateName) {
          return fromStateName.indexOf(portfolioProjectRegExpSource) === 0;
        }

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
          console.log(toState.name, fromState.name);

          if (fromSubToSub(toState.name, fromState.name)) {
            nagivationType = 'fromSubToSub';

            var toStateIndex = topLevelSubPages.indexOf(toState.name);
            var fromStateIndex = topLevelSubPages.indexOf(fromState.name);

            var order = toStateIndex - fromStateIndex;

            if (order > 0) {
              direction = 'right';
            } else {
              direction = 'left';
            }

            console.log('fromSubToSub', direction);
          } else if (fromProjectToProject(toState.name, fromState.name)) {
            nagivationType = 'fromProjectToProject';

            // All new projects come from the right
            direction = 'right';

            console.log('fromProjectToProject', direction);
          } else if (toProject(toState.name)) {
            nagivationType = 'toProject';

            // All new projects come from the right
            direction = 'right';

            console.log('toProject', direction);
          } else if (fromProject(toState.name, fromState.name)) {
            nagivationType = 'fromProject';

            // We want the out work page to come from the left
            direction = 'left';

            console.log('fromProject', direction);
          }
        });
      })();

      animations.enter = function (element, doneFn) {
        // The actual left/right container animation
        var container = element[0].querySelector('.center-me-container');
        (function () {
          if (container === null) {
            doneFn();
            return;
          }

          TweenLite.fromTo(container, DURATION, {
            autoAlpha: 0,
            x: direction === 'right' ? CONTAINER_TRAVEL : -CONTAINER_TRAVEL,
            z: 0
          }, {
            autoAlpha: 1,
            x: 0,
            z: 0,

            delay: DELAY,
            ease: EASING,
            onComplete: doneFn
          });
        })();

        // Additional conditional animations
        (function () {
          var navigationHamburger = $document[0].querySelector('.sub-page-template .navigation-hamburger');

          if (navigationHamburger === null) {
            return;
          }

          // todo bug: if the first page a user visits is a portfolio project, then the navigation hamburger will be present.
          if (nagivationType === 'toProject') {
            TweenLite.fromTo(navigationHamburger, DURATION, {
              autoAlpha: 1,
              y: 0,
              z: 0
            }, {
              autoAlpha: 0,
              y: -HEADER_TRAVEL,
              z: 0,

              delay: DELAY,
              ease: EASING
            });
          } else if (nagivationType !== 'fromProjectToProject' && angular.isDefined(navigationHamburger._gsTransform) && navigationHamburger._gsTransform.y === -HEADER_TRAVEL) {
            TweenLite.fromTo(navigationHamburger, DURATION, {
              autoAlpha: 0,
              y: -HEADER_TRAVEL,
              z: 0
            }, {
              autoAlpha: 1,
              y: 0,
              z: 0,

              delay: DELAY,
              ease: EASING
            });
          } else if (nagivationType === 'fromProjectToProject' && container !== null) {
            var scrollFromTop = ($window.pageYOffset || $document[0].documentElement.scrollTop) - ($document[0].documentElement.clientTop || 0);

            // Start with an Y offset
            TweenLite.to(container, 0, {
              y: scrollFromTop,
              z: 0
            });

            // Jump back to start when everything is ready - notice the 2 * Delay
            TweenLite.to(container, 0, {
              y: 0,
              z: 0,
              delay: 2 * DELAY + DURATION
            });

            TweenLite.to($window, 0, {
              scrollTo: {
                y: 0
              },
              delay: 2 * DELAY + DURATION
            });
          }
        })();
      };
      animations.leave = function (element, doneFn) {
        var container = element[0].querySelector('.center-me-container');

        if (container === null) {
          doneFn();
          return;
        }

        TweenLite.fromTo(container, DURATION, {
          autoAlpha: 1,
          x: 0,
          z: 0
        }, {
          autoAlpha: 0,
          x: direction === 'right' ? -CONTAINER_TRAVEL : CONTAINER_TRAVEL,
          z: 0,

          delay: DELAY,
          ease: EASING,
          onComplete: doneFn
        });
      };
    }]);
})();
