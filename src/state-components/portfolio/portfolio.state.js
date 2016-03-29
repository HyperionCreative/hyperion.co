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
            page: {
              title: 'Projects - Hyperion',
              description: 'View case studies on some of our UI and web design projects and learn more about our approaches.',
              keywords: 'hyperion, projects, portfolio, clients'
            }
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
