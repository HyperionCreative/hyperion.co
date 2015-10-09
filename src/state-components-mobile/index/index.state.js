(function () {
  'use strict';
  angular
    .module('state.index', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('index', {
          data: {
            pageTitle: 'Hyperion | Creative Agency in Birmingham, UK'
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
