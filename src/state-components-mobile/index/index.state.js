(function () {
  'use strict';

  var playAnimation = true;

  angular
    .module('state.index', [
      'app.simple-footer'
    ])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('index', {
          data: {
            page: {
              title: 'Hyperion - Design Consulting Firm in Birmingham, UK',
              description: 'A design consulting firm specialising in UI/UX, Web Design and Development',
              keywords: 'graphic design birmingham, web design studio birmingham, design consulting firm birmingham, web design birmingham, website design birmingham, design studio birmingham, birmingham development, digital studio birmingham, digital studio birmingham, web development birmingham, digital studio, design consulting firm'
            }
          },
          url: '/',
          views: {
            '@': {
              controller: ['$document', function ($document) {
                if (playAnimation) {
                  playAnimation = false;

                  var animContainer = $document[0].querySelector('.introduction .animation-container');
                  animContainer = angular.element(animContainer);

                  animContainer.addClass('animation-init');
                  setTimeout(function(){
                    animContainer.addClass('animation-start');
                  }, 250);
                }
              }],
              templateUrl: 'state-components-mobile/index/index.html'
            }
          }
        });
    }]);
})();
