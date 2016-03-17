(function () {
  'use strict';

  // Its height and width must be defined externally!

  angular
    .module('common.carousel-slider', [])
    .directive('hypCarouselSlider', ['$timeout', function ($timeout) {
      function appendImages(appendTo, imagesUrl) {
        for (var i = 0; i < imagesUrl.length; i++) {
          appendTo.append('<img src="' + imagesUrl[i] + '">');
        }
      }

      return {
        link: function (scope, iElement) {
          var imagesContainer = angular.element(iElement[0].querySelector('.images-container'));
          appendImages(imagesContainer, scope.imagesUrl);

          $timeout(function(){
            var rsi = imagesContainer.royalSlider({
              arrowsNav: false,
              controlNavigation: 'none',
              fadeinLoadedSlide: false,
              imageScaleMode: 'fill',
              keyboardNavEnabled: true,
              loop: false,
              transitionSpeed: 400,
              sliderDrag: false
            }).data('royalSlider');

            // Bind the controls to the arrows
            angular.element(iElement[0].querySelector('.controls .icon-arrow-left'))
              .on('click', function () {
                rsi.prev();
              });

            angular.element(iElement[0].querySelector('.controls .icon-arrow-right'))
              .on('click', function () {
                rsi.next();
              });
          }, 10);
        },
        replace: true,
        restrict: 'E',
        scope: {
          arrowsBackgroundColor: '@',
          arrowsColor: '@',
          imagesUrl: '='
        },
        templateUrl: 'common/royal-slider/carousel/carousel.html'
      };
    }]);
})();
