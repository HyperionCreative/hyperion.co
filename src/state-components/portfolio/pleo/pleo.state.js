(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.pleo', {
          data: {
            simpleSeoTitle: 'pleo - Hyperion',
            simpleSeoDescription: 'You can learn more about the mobile interface we created for pleo.',
            simpleSeoKeywords: 'hyperion, pleo, transport, company, design, mobile app, application, iOS, ui, interface'
          },
          url: '/pleo',
          views: {
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/pleo/pleo.html'
            }
          }
        });
    }]);
})();
