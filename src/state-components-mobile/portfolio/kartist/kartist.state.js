(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.kartist', {
          url: '/kartist',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/kartist/kartist.html'
            }
          }
        })
    }])
})();
