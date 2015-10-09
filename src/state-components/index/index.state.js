(function () {
  'use strict';
  angular
    .module('state.state-components')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.index', {
          data: {
            pageTitle: 'Hyperion | Creative Agency in Birmingham, UK'
          },
          url: '/',
          views: {
            'page-content@': {
              templateUrl: 'state-components/index/index.html'
            }
          }
        });
    }]);
})();
