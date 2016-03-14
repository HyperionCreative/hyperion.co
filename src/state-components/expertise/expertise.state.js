(function () {
  'use strict';

  // When a user enters on /expertise he will be redirected here.
  var defaultStateName = 'root.sub-page-template.expertise.design';

  angular
    .module('state.expertise', [
      'state.sub-page-template'
    ])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
      // This state acts as a redirect
        .state('root.sub-page-template.expertise', {
          url: '/about',
          views: {
            'sub-page-content': {
              // This highlights the current open tab
              controller: ['$scope', function ($scope) {
                $scope.$on('$stateChangeSuccess', function (event, toState) {
                  $scope.activeTab = toState.name;
                });
              }],
              templateUrl: 'state-components/expertise/expertise.html'
            }
          }
        })
        .state('root.sub-page-template.expertise.consulting', {
          data: {
            page: {
              title: 'Consulting Expertise | Hyperion',
              description: 'As a design consulting firm, with only a small team - for now, our job is to help bring your ideas to life. We organise, we create and we solve problems.',
              keywords: 'team, experience, consultation, professional, ideas, advice, design, technologies, angular, jquery, wordpress, UI, hyperion, hyperion creative'
            }
          },
          url: '/consulting',
          views: {
            'expertise': {
              templateUrl: 'state-components/expertise/consulting.html'
            }
          }
        })
        .state('root.sub-page-template.expertise.design', {
          data: {
            page: {
              title: 'Design Expertise | Hyperion',
              description: 'As a design consulting firm, with only a small team - for now, our job is to help bring your ideas to life. We organise, we create and we solve problems.',
              keywords: 'graphic design birmingham, web design studio birmingham, design consulting firm birmingham, web design birmingham, website design birmingham, design studio birmingham, team, experience, UI/UX, user interface, design, adequate, minimalist, professional, beautiful'
            }
          },
          url: '/design',
          views: {
            'expertise': {
              templateUrl: 'state-components/expertise/design.html'
            }
          }
        })
        .state('root.sub-page-template.expertise.development', {
          data: {
            page: {
              title: 'Development Expertise | Hyperion',
              description: 'As a design consulting firm, with only a small team - for now, our job is to help bring your ideas to life. We organise, we create and we solve problems.',
              keywords: 'digital studio birmingham, birmingham development, web development birmingham, team, experience, development, code, modular, angular, angularjs, jquery, cost efficient, experience'
            }
          },
          url: '/development',
          views: {
            'expertise': {
              templateUrl: 'state-components/expertise/development.html'
            }
          }
        });
    }])
    .run(['$rootScope', '$state', function ($rootScope, $state) {
      $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState) {
          // Clicking from an about sub-page on the about link in the hamburger menu
          // doesn't do anything.
          if (toState.name === 'root.sub-page-template.expertise' && fromState.name.match(/root\.sub\-page\-template\.expertise\./) !== null) {
            event.preventDefault();

            return;
          }

          if (toState.name === 'root.sub-page-template.expertise') {
            event.preventDefault();

            $state.go(defaultStateName);
          }
        });
    }]);
})();
