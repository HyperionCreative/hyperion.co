(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.webfaction', {
          data: {
            simpleSeoTitle: 'Webfaction - Hyperion',
            simpleSeoDescription: 'This is a case study of a redesign project we did for Webfaction, our hosting provider.',
            simpleSeoKeywords: 'hyperion, webfaction, hosting, host, interface, dashboard, front end, angular, angularjs, design, clean'
          },
          url: '/webfaction',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/webfaction/webfaction.html'
            }
          }
        });
    }]);
})();
