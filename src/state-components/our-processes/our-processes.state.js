(function () {
  'use strict';
  angular
    .module('state.our-processes', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.our-processes', {
          url: '/our-processes',
          views: {
            'page-content@': {
              templateUrl: 'state-components/our-processes/our-processes.html'
            }
          }
        });
    }]);
})();
