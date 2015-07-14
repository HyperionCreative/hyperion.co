(function () {
  'use strict';
  angular
    .module('state.state-components')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.index', {
          url: '/',
          views: {
            'page-content@': {
              templateUrl: 'state-components/index/index.html'
            }
          }
        });
    }]);
})();
