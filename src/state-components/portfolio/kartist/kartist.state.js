(function () {
  'use strict';

  // When a user enters on /kartist he will be redirected here.
  var defaultStateName = 'root.sub-page-template.portfolio.kartist-design';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.kartist', {
          url: '/kartist'
        })
        .state('root.sub-page-template.portfolio.kartist-design', {
          data: {
            pageTitle: 'Kartist Design | Hyperion'
          },
          url: '/kartist/design',
          views: {
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/kartist/kartist-design.html'
            }
          }
        })
        .state('root.sub-page-template.portfolio.kartist-development', {
          data: {
            pageTitle: 'Kartist Development | Hyperion'
          },
          url: '/kartist/development',
          views: {
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/kartist/kartist-development.html'
            }
          }
        });
    }])
    .run(['$rootScope', '$state', function ($rootScope, $state) {
      $rootScope.$on('$stateChangeStart',
        function (event, toState) {
          if (toState.name === 'root.sub-page-template.portfolio.kartist') {
            event.preventDefault();

            $state.go(defaultStateName);
          }
        });
    }]);
})();
