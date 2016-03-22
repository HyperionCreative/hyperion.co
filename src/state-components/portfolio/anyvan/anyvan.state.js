(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.anyvan', {
          data: {
            page: {
              title: 'AnyVan - Hyperion',
              description: 'We worked with AnyVan in early 2014 to help them design their then upcoming iOS app. We handled the UI and UX and worked with their team to help them make it a reality.',
              keywords: 'anyvan, transport, company, design, mobile app, application, iOS, ui, interface'
            }
          },
          url: '/anyvan',
          views: {
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/anyvan/anyvan.html'
            }
          }
        });
    }]);
})();
