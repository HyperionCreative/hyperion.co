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
            page: {
              title: 'Get in Touch - Hyperion',
              description: 'We are always interested in new and exciting projects to work on and great people to meet. Tell us your story and how we can help.',
              keywords: 'contact, phone number, call, email, get in touch, hyperion, hyperion creative'
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
