(function () {
  'use strict';

  angular
    .module('common.simple-seo', [])
    .service('simpleSeoService', ['$document', function ($document) {
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

      //////////////
      // Bindings //
      //////////////
      Object.defineProperty(this, 'title', {
        get: function () {
          return pageTitle.text();
        },
        set: function (value) {
          pageTitle.text(angular.isString(value) ? value : '');
        },
        enumerable: true
      });

      Object.defineProperty(this, 'description', {
        get: function () {
          return pageDescription.attr('content');
        },
        set: function (value) {
          pageDescription.attr('content', angular.isString(value) ? value : '');
        },
        enumerable: true
      });

      Object.defineProperty(this, 'keywords', {
        get: function () {
          return pageKeywords.attr('content');
        },
        set: function (value) {
          pageKeywords.attr('content', angular.isString(value) ? value : '');
        },
        enumerable: true
      });

      ///////////////////////
      // Private functions //
      ///////////////////////
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
    }])
    .run(['$rootScope', 'simpleSeoService', function ($rootScope, simpleSeoService) {
      ///////////////
      // Run block //
      ///////////////
      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        updateSeoTags(angular.isDefined(toState.data) && angular.isObject(toState.data.simpleSeo) ? toState.data.simpleSeo : {});
      });

      ///////////////
      // Functions //
      ///////////////
      function updateSeoTags(seoTags) {
        simpleSeoService.title = seoTags.title;
        simpleSeoService.description = seoTags.description;
        simpleSeoService.keywords = seoTags.keywords;
      }
    }]);
})();
