(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.webfaction', {
          data: {
            pageTitle: 'Webfaction | Hyperion'
          },
          url: '/webfaction',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/webfaction/webfaction.html'
            }
          }
        });
    }]);
})();
