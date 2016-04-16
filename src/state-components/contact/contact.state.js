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
            simpleSeo: {
              title: 'Contact - Hyperion',
              description: 'Use this page to find information about how to contact us.',
              keywords: 'contact, phone number, call, email, get in touch, hyperion'
            }
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
