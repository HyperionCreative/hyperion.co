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
            simpleSeoTitle: 'Contact - Hyperion',
            simpleSeoDescription: 'Use this page to find information about how to contact us.',
            simpleSeoKeywords: 'contact, phone number, call, email, get in touch, hyperion'
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
