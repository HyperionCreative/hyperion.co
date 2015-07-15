(function () {
  'use strict';

  angular
    .module('state.sub-page-template', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template', {
          abstract: true,
          views: {
            'page-content@': {
              templateUrl: 'state-components/sub-page-template/sub-page-template.html'
            }
          }
        });
    }]);
})();
