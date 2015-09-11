(function () {
  'use strict';

  // Its height and width must be defined externally!

  angular
    .module('common.carousel-slider', [])
    .directive('hypCarouselSlider', function () {
      function appendImages(appendTo, imagesUrl) {
        for (var i = 0; i < imagesUrl.length; i++) {
          appendTo.append('<img src="' + imagesUrl[i] + '">');
        }
      }

      return {
        link: function (scope, iElement) {
          var imagesContainer = angular.element(iElement[0].querySelector('.images-container'));
          appendImages(imagesContainer, scope.imagesUrl);

          var rsi = imagesContainer.royalSlider({
            arrowsNav: false,
            controlNavigation: 'none',
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
    });
})();
