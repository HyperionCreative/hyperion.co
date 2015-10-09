(function () {
  'use strict';
  angular
    .module('state.portfolio', [
      'state.sub-page-template'
    ])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio', {
          data: {
            pageTitle: 'Our Work | Hyperion'
          },
          url: '/portfolio',
          views: {
            'sub-page-content': {
              templateUrl: 'state-components/portfolio/portfolio.html'
            }
          }
        });
    }]);
})();
