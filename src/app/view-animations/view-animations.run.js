(function () {
  'use strict';

  angular
    .module('app.view-animations', [
      'common.gsap-lite'
    ])
    .run(['$animate', '$document', '$state', '$rootScope', '$window', function ($animate, $document, $state, $rootScope, $window) {
      ///////////////
      // Constants //
      ///////////////
      // Don't forget to change navigation-hamburger.html after you modify the items' order!
      var TOP_LEVEL_SUB_PAGES = [
        'root.sub-page-template.expertise',
        'root.sub-page-template.expertise.consulting',
        'root.sub-page-template.expertise.design',
        'root.sub-page-template.expertise.development',

        'root.sub-page-template.our-processes',
        'root.sub-page-template.portfolio',
        'root.sub-page-template.contact'
      ];
      var PORTFOLIO_PROJECT_DETECTOR = 'root.sub-page-template.portfolio.';

      ///////////////
      // Variables //
      ///////////////
      // This is the default direction.
      var direction = 'right';
      var nagivationType = '';
      var listenerForProjectTransition = false;

      ///////////////
      // Functions //
      ///////////////
      function fromSubToSub(toStateName, fromStateName) {
        return TOP_LEVEL_SUB_PAGES.indexOf(toStateName) !== -1 && TOP_LEVEL_SUB_PAGES.indexOf(fromStateName) !== -1;
      }

      function fromProjectToProject(toStateName, fromStateName) {
        return toStateName.indexOf(PORTFOLIO_PROJECT_DETECTOR) === 0 && fromStateName.indexOf(PORTFOLIO_PROJECT_DETECTOR) === 0;
      }

      function toProject(toStateName) {
        return toStateName.indexOf(PORTFOLIO_PROJECT_DETECTOR) === 0;
      }

      function fromProject(toStateName, fromStateName) {
        return toStateName.indexOf(PORTFOLIO_PROJECT_DETECTOR) !== 0 && fromStateName.indexOf(PORTFOLIO_PROJECT_DETECTOR) === 0;
      }

      ///////////////
      // Run block //
      ///////////////
      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
        if (fromSubToSub(toState.name, fromState.name)) {
          nagivationType = 'fromSubToSub';

          var toStateIndex = TOP_LEVEL_SUB_PAGES.indexOf(toState.name);
          var fromStateIndex = TOP_LEVEL_SUB_PAGES.indexOf(fromState.name);

          var order = toStateIndex - fromStateIndex;

          if (order > 0) {
            direction = 'right';
          } else {
            direction = 'left';
          }
        } else if (fromProjectToProject(toState.name, fromState.name)) {
          nagivationType = 'fromProjectToProject';

          // All new projects come from the right
          direction = 'right';
        } else if (toProject(toState.name)) {
          nagivationType = 'toProject';

          // All new projects come from the right
          direction = 'right';
        } else if (fromProject(toState.name, fromState.name)) {
          nagivationType = 'fromProject';

          // We want the out work page to come from the left
          direction = 'left';
        } else {
          nagivationType = 'other';
        }

        // Appends the direction
        (function () {
          var appendDirectionTo = $document[0].body.querySelector('.sub-page-template .slide-direction');
          if (appendDirectionTo !== null) {
            angular.element(appendDirectionTo)
              .removeClass('left')
              .removeClass('right')
              .addClass(direction);
          }
        })();

        // Hides the navigation hamburger on portfolio pages
        (function () {
          var navigationHamburger = $document[0].body.querySelector('.sub-page-template .navigation-hamburger');
          if (nagivationType === 'toProject') {
            if (navigationHamburger === null) {
              // This covers the case when the first page a user visits is the
              // a project page.

              angular.element($document[0].body)
                .addClass('hide-sub-page-navigation-hamburger');
            } else {
              // The navigation hamburger is presend so we simply fade up the element.

              $animate.addClass(navigationHamburger, 'fade-up');
            }
          } else if (nagivationType === 'fromProject') {
            if (navigationHamburger !== null) {
              // I'm sure that there will always be a navigation hamburger present.
              // This is mostly a safety check.

              // We make sure the element has the needed class in order to prepare
              // it for the animation.
              angular.element(navigationHamburger)
                .addClass('fade-up');

              // We make sure the element is displayed.
              angular.element($document[0].body)
                .removeClass('hide-sub-page-navigation-hamburger');

              if (toState.name !== 'root.index') {
                // Only perform the animation if we're not going to the index page!
                $animate.removeClass(navigationHamburger, 'fade-up');
              }
            }
          }
        })();

        // Fix for the jumping pages
        (function () {
          if (listenerForProjectTransition === false) {
            listenerForProjectTransition = true;

            $animate.on('enter', $document[0].body, function (element, phase) {
              if (nagivationType === 'fromProjectToProject') {
                if (phase === 'start') {
                  var scrollFromTop = ($window.pageYOffset || $document[0].documentElement.scrollTop) - ($document[0].documentElement.clientTop || 0);

                  angular.element(element[0].querySelector('.center-me-container'))
                    .css({
                      'margin-top': scrollFromTop + 'px'
                    });
                } else if (phase === 'close') {
                  angular.element(element[0].querySelector('.center-me-container'))
                    .css({
                      'margin-top': '0px'
                    });

                  $window.scrollTo(0, 0);
                }
              }
            });
          }
        })();
      });
    }]);
})();
