(function () {
  'use strict';

  // Its height and width must be defined externally!

  angular
    .module('common.carousel-slider', [])
    .directive('hypCarouselSlider', ['$window', 'TweenEasings', 'TweenLite', function ($window, TweenEasings, TweenLite) {
      var ANIMATION_DURATION = 475 / 1000;
      var ANIMATION_EASING = TweenEasings.Power1.easeInOut;

      function appendImages(appendTo, imagesUrl) {
        for (var i = 0; i < imagesUrl.length; i++) {
          appendTo.append('<img src="' + imagesUrl[i] + '">');
        }
      }

      function moveImageFromTo(image, from, to, onComplete, duration) {
        TweenLite.fromTo(image, angular.isNumber(duration) ? duration : ANIMATION_DURATION, {
          x: from,
          z: '0%'
        }, {
          x: to,
          z: '0%',

          ease: ANIMATION_EASING,
          onComplete: onComplete || angular.noop
        });
      }

      function moveImagesInDirection(toLeave, toEnter, direction, onComplete) {
        // I've added 1% to simulate the images spacing
        moveImageFromTo(toLeave, '0%', direction === 'left' ? '101%' : '-101%');
        moveImageFromTo(toEnter, direction === 'left' ? '-101%' : '101%', '0%', onComplete);
      }

      function hideEverythingExceptFor(imagesContainer, exceptForIndex) {
        var children = imagesContainer.children();
        for (var i = 0; i < children.length; i++) {
          if (i !== exceptForIndex) {
            moveImageFromTo(children[i], '0%', '100%', undefined, 0);
          }
        }
      }

      return {
        link: function (scope, iElement) {
          var imagesContainer = angular.element(iElement[0].querySelector('.images-container'));
          appendImages(imagesContainer, scope.imagesUrl);

          // The first one!
          var
            currentSlide = 0,
            canAnimate = true;

          // Moves everything out of sight except for the first slide which is the default one!
          hideEverythingExceptFor(imagesContainer, 0);

          // Bind the controls to the arrows
          angular.element(iElement[0].querySelector('.controls .icon-arrow-left'))
            .on('click', changeToLeft);

          angular.element(iElement[0].querySelector('.controls .icon-arrow-right'))
            .on('click', changeToRight);

          // Binds the controls to the keyboard
          angular.element($window).on('keydown', handleArrowKeys);
          // Deregisters the above function
          iElement.on('$destroy', function () {
            angular.element($window).off('keydown', handleArrowKeys);
          });

          ///////////////
          // Functions //
          ///////////////
          function changeToLeft() {
            if (canAnimate) {
              canAnimate = false;

              var toLeave = imagesContainer.children()[currentSlide];

              currentSlide += 1;
              currentSlide = currentSlide % imagesContainer.children().length;

              var toEnter = imagesContainer.children()[currentSlide];

              moveImagesInDirection(toLeave, toEnter, 'left', function () {
                canAnimate = true;
              });
            }
          }

          function changeToRight() {
            if (canAnimate) {
              canAnimate = false;

              var toLeave = imagesContainer.children()[currentSlide];

              currentSlide -= 1;
              currentSlide = (currentSlide < 0) ? imagesContainer.children().length - 1 : currentSlide;

              var toEnter = imagesContainer.children()[currentSlide];

              moveImagesInDirection(toLeave, toEnter, 'right', function () {
                canAnimate = true;
              });
            }
          }

          function handleArrowKeys(event) {
            if (event.keyCode === 39) {
              changeToRight();
            } else if (event.keyCode === 37) {
              changeToLeft();
            }
          }
        },
        replace: true,
        restrict: 'E',
        scope: {
          arrowsBackgroundColor: '@',
          arrowsColor: '@',
          imagesUrl: '='
        },
        templateUrl: 'common/carousel-slider/carousel-slider.html'
      };
    }]);
})();
