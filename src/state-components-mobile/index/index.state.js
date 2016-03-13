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
            pageTitle: 'Hyperion | Creative Studio in Birmingham, UK'
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
