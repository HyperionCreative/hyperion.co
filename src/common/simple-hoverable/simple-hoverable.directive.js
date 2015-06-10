(function () {
  'use strict';

  angular
    .module('common.simple-hoverable')
    .directive('hypSimpleHoverable', function () {
      return {
        link: function (scope, iElement, iAttrs) {
          ///////////////////////////////
          // Parse the initial options //
          ///////////////////////////////

          // The debounce rate
          var debounce = parseInt(iAttrs.debounce);
          debounce = isFinite(debounce) ? debounce : parseFloat(window.getComputedStyle(iElement[0])['transition-duration']) * 1000;
          debounce = isFinite(debounce) ? debounce : 0;

          // The element on which the mouse needs to enter.
          var onmouseenterElem = angular.element(iElement[0].querySelectorAll(iAttrs.onMouseenter));
          onmouseenterElem = onmouseenterElem.length > 0 ? onmouseenterElem : iElement;

          // The element on which the mouse needs to leave.
          var onmouseleaveElem = angular.element(iElement[0].querySelectorAll(iAttrs.onMouseleave));
          onmouseleaveElem = onmouseleaveElem.length > 0 ? onmouseleaveElem : iElement;

          // The element on which the classes (mouse-leaving, mouse-left, mouse-entered)
          // will be added.
          var addClassesTo = angular.element(iElement[0].querySelectorAll(iAttrs.addClassesTo));
          addClassesTo = addClassesTo.length > 0 ? addClassesTo : iElement;

          // The timeout. Needed to prevent timeout pile up.
          var timeout;

          ///////////////////////
          // The initial state //
          ///////////////////////

          addClassesTo.addClass('mouse-left');
          onmouseenterElem.on('mouseenter', onmouseenter);
          onmouseleaveElem.on('mouseleave', onmouseleave);

          ///////////////
          // Functions //
          ///////////////

          function onmouseenter() {
            clearTimeout(timeout);

            addClassesTo.removeClass('mouse-leaving');
            addClassesTo.removeClass('mouse-left');

            addClassesTo.addClass('mouse-entered');
            // do we need this?
            // iElement.trigger('sh.mouse-entered');
          }

          function onmouseleave() {
            if (addClassesTo.hasClass('mouse-entered')) {
              addClassesTo.removeClass('mouse-entered');

              addClassesTo.addClass('mouse-leaving');
              // do we need this?
              // iElement.trigger('sh.mouse-leaving');

              timeout = setTimeout(function () {
                addClassesTo.removeClass('mouse-leaving');

                addClassesTo.addClass('mouse-left');
                // do we need this?
                // iElement.trigger('sh.mouse-left');
              }, debounce);
            }
          }
        },
        restrict: 'A'
      };
    });
})();
