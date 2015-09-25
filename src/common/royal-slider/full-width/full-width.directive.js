(function () {
  'use strict';

  // Its height must be defined externally!

  angular
    .module('common.full-width-slider', [])
    .directive('hypFullWidthSlider', function () {
      // This is used to duplicate the images. As Royal Slider doesn't append
      // the next element until the transition has started, a user may see a
      // white space if he drags the slider far enough! This fixes this.
      var IMAGES_DUPLICATION_MULTIPLIER = 3;

      function appendImages(appendTo, imagesUrl) {
        for (var i = 0; i < IMAGES_DUPLICATION_MULTIPLIER * imagesUrl.length; i++) {
          appendTo.append('<img src="' + imagesUrl[i % imagesUrl.length] + '">');
        }
      }

      return {
        link: function (scope, iElement) {
          var transitionSpeed = parseInt(scope.transitionSpeed);
          transitionSpeed = isFinite(transitionSpeed) ? transitionSpeed : 200;

          var imagesContainer = angular.element(iElement[0].querySelector('.images-container'));
          appendImages(imagesContainer, scope.imagesUrl);

          var rsi = imagesContainer.royalSlider({
            addActiveClass: true,
            arrowsNav: false,
            controlNavigation: 'none',
            imageScaleMode: 'fill',
            keyboardNavEnabled: false,
            loop: true,
            navigateByClick: false,
            numImagesToPreload: 8,
            sliderDrag: true,
            sliderTouch: true,
            slidesSpacing: 5,

            // I don't know why, but this doesn't seem to work with drag enabled
            transitionSpeed: transitionSpeed,

            visibleNearby: {
              enabled: true,
              // As this is set to 1, the slider will look "like a normal slider".
              centerArea: 1,
              center: true,
              navigateByCenterClick: false
            }
          }).data('royalSlider');

          // Exports the royal slider instance
          scope.onInit({
            rsi: rsi
          });
        },
        replace: true,
        restrict: 'E',
        scope: {
          imagesUrl: '=',
          transitionSpeed: '@',
          onInit: '&'
        },
        templateUrl: 'common/royal-slider/full-width/full-width.html'
      };
    });
})();
