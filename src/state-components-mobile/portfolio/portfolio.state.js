(function () {
  'use strict';
  angular
    .module('state.portfolio', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio', {
          abstract: true,
          data: {
            pageTitle: 'Our Work | Hyperion'
          },
          // Needed so we don't break the url structure
          url: '/portfolio',
          views: {
            '@': {
              controller: 'PortfolioCtrl',
              templateUrl: 'state-components-mobile/portfolio/portfolio.html'
            }
          }
        });
    }]);
})();
