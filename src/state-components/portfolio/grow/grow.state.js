(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.grow', {
          data: {
            pageTitle: 'Grow with a CFO | Hyperion'
          },
          url: '/grow',
          views: {
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/grow/grow.html'
            }
          }
        });
    }]);
})();
