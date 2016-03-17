(function () {
  'use strict';

  angular
    .module('app.navigation-tracker', [])
    .run(['$rootScope', '$window', function ($rootScope, $window) {
      ///////////////
      // Constants //
      ///////////////
      var NAME_DICTIONARY = {
        'root.index': 'Index',

        'root.sub-page-template.contact': 'Contact',

        'root.sub-page-template.expertise.consulting': 'Consulting Expertise',
        'root.sub-page-template.expertise.design': 'Design Expertise',
        'root.sub-page-template.expertise.development': 'Development Expertise',

        'root.sub-page-template.justification': 'Justification',

        'root.sub-page-template.portfolio': 'Our Work',
        'root.sub-page-template.portfolio.anyvan': 'AnyVan',
        'root.sub-page-template.portfolio.grow': 'Grow with a CFO',
        'root.sub-page-template.portfolio.kartist': 'Kartist',
        'root.sub-page-template.portfolio.quizkick': 'QuizKick',
        'root.sub-page-template.portfolio.webfaction': 'Webfaction'
      };

      //////////////
      // Variables //
      //////////////
      var referrer = $window.document.referrer;
      var statesName = [];

      //////////////
      // Run block //
      //////////////
      $rootScope.navigationHistory = {
        referrer: referrer,
        statesName: statesName
      };

      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        var currentStateName = NAME_DICTIONARY[toState.name];

        if (!angular.isString(currentStateName)) {
          currentStateName = 'Lost in Time and Space!';
        }

        statesName.push(currentStateName);
      });
    }]);
})();
