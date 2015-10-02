(function () {
  'use strict';

  // Its height must be defined externally!

  angular
    .module('common.full-width-slider', [])
    .directive('hypFullWidthSlider', function () {
      var MIN_SLIDES_COUNT = 12;
      // This is used to multiply the slides. As Royal Slider doesn't append
      // the next element until the transition has started, a user may see a
      // white space if he drags the slider far enough! This fixes this.
      function multiplyArrayContent(toMultiply, minLength, fn) {
        var multiplier = 1;
        if (toMultiply.length < minLength) {
          multiplier = Math.ceil(minLength / toMultiply.length);
        }

        for (var i = 0; i < multiplier * toMultiply.length; i++) {
          fn(toMultiply[i % toMultiply.length]);
        }
      }

      function appendImages(appendTo, imagesUrl) {
        multiplyArrayContent(imagesUrl, MIN_SLIDES_COUNT, function (imageUrl) {
          appendTo.append('<img src="' + imageUrl + '">');
        });
      }

      function appendslidesHtml(appendTo, slidesHtml) {
        multiplyArrayContent(slidesHtml, MIN_SLIDES_COUNT, function (slide) {
          appendTo.append(slide);
        });
      }

      // The default options
      var defaultRsiOptions = {
        addActiveClass: true,
        arrowsNav: false,
        controlNavigation: 'none',
        imageScaleMode: 'fill',
        keyboardNavEnabled: false,
        loop: true,
        navigateByClick: true,
        numImagesToPreload: 8,
        sliderDrag: true,
        sliderTouch: true,
        slidesSpacing: 5,

        // This doesn't affect the drag animation.
        transitionSpeed: 600,

        visibleNearby: {
          enabled: true,
          // As this is set to 1, the slider will look "like a normal slider".
          centerArea: 1,
          center: true,
          navigateByCenterClick: false
        }
      };

      return {
        link: function (scope, iElement) {
          var sliderContainer = angular.element(iElement[0].querySelector('.actual-slider-container'));

          if (angular.isArray(scope.imagesUrl)) {
            appendImages(sliderContainer, scope.imagesUrl);
          } else {
            appendslidesHtml(sliderContainer, scope.slidesHtml);
          }

          var rsi = sliderContainer.royalSlider(angular.isObject(scope.rsiOptions) ? angular.extend(angular.copy(defaultRsiOptions), scope.rsiOptions) : defaultRsiOptions).data('royalSlider');

          // Exports the royal slider instance
          scope.onInit({
            rsi: rsi
          });
        },
        replace: true,
        restrict: 'E',
        scope: {
          imagesUrl: '=?',
          slidesHtml: '=?',

          rsiOptions: '=?',

          onInit: '&'
        },
        templateUrl: 'common/royal-slider/full-width/full-width.html'
      };
    });
})();
