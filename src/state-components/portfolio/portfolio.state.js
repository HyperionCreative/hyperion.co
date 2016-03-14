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
              title: 'Our Work | Hyperion',
              description: 'These are some of our most recent projects, that we can talk about. Click on each preview to learn more about the work we did.',
              keywords: 'hyperion, hyperion creative, projects, work'
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
