(function () {
  'use strict';

  angular
    .module('state.state-components')
    .config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      /*@@@ $locationProvider.html5Mode(true); @@@*/
    }]);
})();
