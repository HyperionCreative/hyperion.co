(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.pleo', {
          data: {
            simpleSeoTitle: 'pleo - Hyperion',
            simpleSeoDescription: 'You can learn more about the mobile interface we created for pleo.',
            simpleSeoKeywords: 'hyperion, pleo, transport, company, design, mobile app, application, iOS, ui, interface'
          },
          url: '/pleo',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/pleo/pleo.html'
            }
          }
        });
    }]);
})();
