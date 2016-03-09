(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.webfaction', {
          data: {
            pageTitle: 'Webfaction | Hyperion'
          },
          url: '/webfaction',
          views: {
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/webfaction/webfaction.html'
            }
          }
        });
    }]);
})();
