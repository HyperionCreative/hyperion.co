(function () {
  'use strict';

  angular
    .module('common.greeter', [])
    .directive('hypGreetings', function () {
      return {
        link: function (scope, iElement) {
          var
            currentHour = (new Date()).getHours(),
            greetings = 'Good Evening';

          if (currentHour > 5 && currentHour < 12) {
            greetings = 'Good Morning';
          } else if (currentHour >= 12 && currentHour < 17) {
            greetings = 'Good Afternoon';
          }

          iElement.text(greetings);
        },
        restrict: 'A',
        scope: {},
      };
    });
})();
