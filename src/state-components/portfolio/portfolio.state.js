(function () {
  'use strict';
  angular
    .module('state.portfolio', [
      'state.sub-page-template'
    ])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio', {
          url: '/our-work',
          views: {
            'sub-page-content': {
              templateUrl: 'state-components/portfolio/portfolio.html'
            }
          }
        });
    }]);
})();
