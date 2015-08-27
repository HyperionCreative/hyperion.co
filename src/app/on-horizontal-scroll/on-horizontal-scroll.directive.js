(function () {
  'use strict';

  angular
    .module('app.on-horizontal-scroll', [])
    .directive('hypOnHorizontalScroll', ['$document', '$window', 'TweenLite', function ($document, $window, TweenLite) {
      return {
        link: function (scope) {
          var
            slider = [],
            slideDescription = [],
            header = [];

          var lastScrollX;

          function onScroll() {
            var left = (window.pageXOffset || $document[0].documentElement.scrollLeft) - ($document[0].documentElement.clientLeft || 0);

            // So we only capture horizontal scrolls
            if (left !== lastScrollX) {
              lastScrollX = left;

              // The elements were not initialized!
              if (slider.length === 0) {
                slider = angular.element($document[0].querySelector('.fancy-slider .stage-container'));
              }
              if (header.length === 0) {
                header = angular.element($document[0].querySelector('.header-index'));
              }
              if (slideDescription.length === 0) {
                slideDescription = angular.element($document[0].querySelector('.slide-description-container'));
              }

              // This is needed to make sure everything is ready for action
              if (slider.length === 1 && header.length === 1) {
                console.log(lastScrollX);

                TweenLite.to([slider[0], header[0], slideDescription[0]], 0, {
                  x: -lastScrollX
                });
              }
            }
          }

          angular.element($window)
            .on('scroll', onScroll);

          scope.$on('$destroy', function () {
            angular.element($window)
              .off('scroll', onScroll);
          });
        },
        restrict: 'A'
      };
    }]);
})();
