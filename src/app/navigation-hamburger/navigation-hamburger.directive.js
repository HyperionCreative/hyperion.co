(function () {
  'use strict';

  angular
    .module('app.navigation-hamburger', [
      'common.simple-hoverable'
    ])
    .directive('hypNavigationHamburger', ['$compile', function ($compile) {
      return {
        link: function (scope, iElement, iAttrs) {
          var menuContainer = angular.element(iElement[0].querySelector('.menu-container'));
          
          if (angular.isUndefined(iAttrs.alwaysShowLinks)) {
            menuContainer.attr('hyp-simple-hoverable', '');
            menuContainer.attr('on-mouseenter', '.icon-three-horizontal-bars');

            $compile(menuContainer)(scope);
          } else {
            menuContainer.addClass('mouse-entered');
          }
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/navigation-hamburger/navigation-hamburger.html'
      };
    }]);
})();
