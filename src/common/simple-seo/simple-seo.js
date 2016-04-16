(function () {
  'use strict';

  angular
    .module('common.simple-seo', [])
    .run(['$document', '$rootScope', function ($document, $rootScope) {
      ///////////////
      // Variables //
      ///////////////
      var pageTitle = getSeoTag('head > title', createTitleTag);
      var pageDescription = getSeoTag('head > meta[name="description"]', function () {
        return createMetaTag('description');
      });
      var pageKeywords = getSeoTag('head > meta[name="keywords"]', function () {
        return createMetaTag('keywords');
      });

      ///////////////
      // Run block //
      ///////////////
      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        updateSeoTags(angular.isDefined(toState.data) && angular.isObject(toState.data.simpleSeo) ? toState.data.simpleSeo : {});
      });

      ///////////////
      // Functions //
      ///////////////
      function getSeoTag(selector, createElementFn) {
        var toReturn = $document[0].querySelector(selector);

        if (toReturn === null) {
          toReturn = createElementFn();

          $document[0].head.appendChild(toReturn);
        }

        return angular.element(toReturn);
      }

      function createTitleTag() {
        return $document[0].createElement('title');
      }

      function createMetaTag(name) {
        var metaTagToCreate = $document[0].createElement('meta');
        metaTagToCreate.setAttribute('name', name);

        return metaTagToCreate;
      }

      function updateSeoTags(seoTags) {
        pageTitle.text(angular.isString(seoTags.title) ? seoTags.title : '');
        pageDescription.attr('content', angular.isString(seoTags.description) ? seoTags.description : '');
        pageKeywords.attr('content', angular.isString(seoTags.keywords) ? seoTags.keywords : '');
      }
    }]);
})();
