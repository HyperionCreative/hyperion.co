(function () {
  'use strict';

  function getResourceUrl(slide, resourceName) {
    return 'assets/' + slide + '/' + resourceName + '@2x.png';
  }

  function loadResources(onLoad) {
    var loader = new PIXI.loaders.Loader();

    // First slide
    loader.add('' + 0, getResourceUrl('slide-1', 'flower-pot'));
    loader.add('' + 1, getResourceUrl('slide-1', 'macbook'));
    loader.add('' + 2, getResourceUrl('slide-1', 'sketchbook'));
    loader.add('' + 3, getResourceUrl('slide-1', 'watch'));
    // Second slide
    loader.add('' + 4, getResourceUrl('slide-2', 'imac'));
    loader.add('' + 5, getResourceUrl('slide-2', 'iphone'));
    loader.add('' + 6, getResourceUrl('slide-2', 'sketchpad'));
    // Third slide
    loader.add('' + 7, getResourceUrl('slide-3', 'imac'));
    loader.add('' + 8, getResourceUrl('slide-3', 'iphone'));

    loader.load(onLoad);
  }

  window.ResourceLoader = {
    load: loadResources
  };
})();
