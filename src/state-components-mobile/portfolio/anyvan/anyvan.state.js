(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.anyvan', {
          data: {
            page: {
              title: 'AnyVan - Hyperion',
              description: 'We worked with AnyVan in early 2014 to help them design their then upcoming iOS app. We handled the UI and UX and worked with their team to help them make it a reality.',
              keywords: 'anyvan, transport, company, design, mobile app, application, iOS, ui, interface'
            }
          },
          url: '/anyvan',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/anyvan/anyvan.html'
            }
          }
        });
    }]);
})();
