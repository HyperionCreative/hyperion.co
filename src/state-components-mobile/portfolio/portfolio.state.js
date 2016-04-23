(function () {
  'use strict';
  angular
    .module('state.portfolio', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio', {
          abstract: true,
          data: {
            simpleSeoTitle: 'Projects - Hyperion',
            simpleSeoDescription: 'View case studies on some of our UI and web design projects and learn more about our approaches.',
            simpleSeoKeywords: 'hyperion, projects, portfolio, clients'
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
