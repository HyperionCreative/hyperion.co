(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.anyvan', {
          data: {
            simpleSeo: {
              title: 'AnyVan - Hyperion',
              description: 'You can learn more about the mobile interface we created for AnyVan.',
              keywords: 'hyperion, anyvan, transport, company, design, mobile app, application, iOS, ui, interface'
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
