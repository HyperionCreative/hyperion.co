(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.grow', {
          data: {
            pageTitle: 'Grow with a CFO | Hyperion'
          },
          url: '/grow',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/grow/grow.html'
            }
          }
        });
    }]);
})();
