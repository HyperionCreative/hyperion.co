(function () {
  'use strict';
  angular
    .module('state.index', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('index', {
          data: {
            pageTitle: 'Hyperion | Creative Studio in Birmingham, UK'
          },
          url: '/',
          views: {
            '@': {
              controller: 'IndexCtrl',
              templateUrl: 'state-components-mobile/index/index.html'
            }
          }
        });
    }]);
})();
