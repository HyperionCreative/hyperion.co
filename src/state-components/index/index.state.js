(function () {
  'use strict';
  angular
    .module('state.state-components')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.index', {
          url: '/'
        });
    }]);
})();
