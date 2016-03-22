(function () {
  'use strict';

  angular
    .module('common.seo-tags', [
      'ui.router'
    ])
    .run(['$document', '$rootScope', function($document, $rootScope) {
      var pageTitle = $document.find('head > title');
      var pageDescription = $document.find('head > meta[name="description"]');
      var pageKeywords = $document.find('head > meta[name="keywords"]');

      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        if (angular.isDefined(toState.data) && angular.isObject(toState.data.page)) {
          if (angular.isString(toState.data.page.title) && toState.data.page.title.length > 0) {
            pageTitle.text(toState.data.page.title);
          } else {
            console.warn(toState.name + ' is missing the page title property');
          }

          if (angular.isString(toState.data.page.description) && toState.data.page.description.length > 0) {
            pageDescription.attr('content', toState.data.page.description);
          } else {
            console.warn(toState.name + ' is missing the page description property');
          }

          if (angular.isString(toState.data.page.keywords) && toState.data.page.keywords.length > 0) {
            pageKeywords.attr('content', toState.data.page.keywords);
          } else {
            console.warn(toState.name + ' is missing the page keywords property');
          }
        }
      });
    }]);
})();
