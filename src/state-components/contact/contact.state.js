(function () {
  'use strict';
  angular
    .module('state.contact', [
      'state.sub-page-template'
    ])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.contact', {
          url: '/contact',
          views: {
            'sub-page-content': {
              templateUrl: 'state-components/contact/contact.html'
            }
          }
        });
    }]);
})();
