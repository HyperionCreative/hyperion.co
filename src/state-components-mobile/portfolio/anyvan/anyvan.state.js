(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.anyvan', {
          url: '/anyvan',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/anyvan/anyvan.html'
            }
          }
        });
    }]);
})();
