(function () {
  'use strict';
  angular
    .module('state.portfolio', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio', {
          abstract: true,
          data: {
            page: {
              title: 'Our Work - Hyperion',
              description: 'These are some of our most recent projects, that we can talk about. Click on each preview to learn more about the work we did.',
              keywords: 'hyperion, hyperion creative, projects, work'
            }
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
