(function () {
  'use strict';

  // When a user enters on /kartist he will be redirected here.
  var defaultStateName = 'root.sub-page-template.portfolio.kartist.design';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.kartist', {
          url: '/kartist',
          views: {
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/kartist/kartist.html'
            }
          }
        })
        .state('root.sub-page-template.portfolio.kartist.design', {
          url: '/design',
          views: {
            'kartist-category': {
              templateUrl: 'state-components/portfolio/kartist/design.html'
            }
          }
        })
        .state('root.sub-page-template.portfolio.kartist.development', {
          url: '/development',
          views: {
            'kartist-category': {
              templateUrl: 'state-components/portfolio/kartist/development.html'
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
