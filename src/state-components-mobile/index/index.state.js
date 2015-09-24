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
              templateUrl: 'state-components-mobile/index/index.html'
            }
          }
        });
    }]);
})();
