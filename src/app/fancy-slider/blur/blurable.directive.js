(function () {
  'use strict';

  angular
    .module('app.fancy-slider.blur')
    .directive('hypFancySliderBlurable', ['$rootScope', 'BlurService', function ($rootScope, BlurService) {
      var blurStatus = {
        isBlurred: BlurService.getBlurStatus()
      };

      $rootScope.$watch(function () {
        return BlurService.getBlurStatus();
      }, function (newValue) {
        blurStatus.isBlurred = newValue;
      });

      return {
        link: function (scope, iElement, iAttrs) {
          scope.blurStatus = blurStatus;

          // A basic normalizer!
          if (iAttrs.type === 'blurred') {
            scope.type = 'blurred';
          } else {
            scope.type = 'unblurred';
          }
        },
        replace: true,
        restrict: 'E',
        scope: {},
        templateUrl: 'app/fancy-slider/blur/blur.html',
        transclude: true
      };
    }]);
})();
