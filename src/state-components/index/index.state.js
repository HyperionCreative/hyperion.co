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
              template: '<h1>HELLO</h1>'
            }
          }
        });
    }]);
})();
