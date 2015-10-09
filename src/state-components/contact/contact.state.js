(function () {
  'use strict';
  angular
    .module('state.contact', [
      'app.contact-form',
      'state.sub-page-template'
    ])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.contact', {
          data: {
            pageTitle: 'Get in Touch | Hyperion'
          },
          url: '/contact',
          views: {
            'sub-page-content': {
              controller: 'ContactCtrl',
              templateUrl: 'state-components/contact/contact.html'
            }
          }
        });
    }]);
})();
