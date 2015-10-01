(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.grow', {
          url: '/grow',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/grow/grow.html'
            }
          }
        });
    }]);
})();
