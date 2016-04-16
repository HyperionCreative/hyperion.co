(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.anyvan', {
          data: {
            simpleSeo: {
              title: 'AnyVan - Hyperion',
              description: 'You can learn more about the mobile interface we created for AnyVan.',
              keywords: 'hyperion, anyvan, transport, company, design, mobile app, application, iOS, ui, interface'
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
