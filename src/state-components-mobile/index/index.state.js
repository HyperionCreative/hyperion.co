(function () {
  'use strict';
  angular
    .module('state.index', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('index', {
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
