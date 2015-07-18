(function () {
  'use strict';

  var BASE_URL = './assets';
  var EXTENSION = '@2x.png';

  // Constants
  var RESOURCES_DATA = {
    'slide-1': {
      'flower-pot': {
        stable: {
          x: 1710,
          y: 380
        },
        bottom: {
          y: 2880,
          rotation: PIXI.PI_2 / 12
        },
        left: {
          x: -3000,
          rotation: -PIXI.PI_2 / 12
        },
        right: {
          x: 1440,
          rotation: -PIXI.PI_2 / 12
        }
      },
      'macbook': {
        stable: {
          x: 530,
          y: 27
        },
        bottom: {
          y: 5760,
          rotation: PIXI.PI_2 / 8
        },
        left: {
          x: -2560,
          rotation: -PIXI.PI_2 / 18
        },
        right: {
          x: 2000,
          rotation: -PIXI.PI_2 / 18
        }
      },
      'sketchbook': {
        stable: {
          x: 16,
          y: 354
        },
        bottom: {
          y: 7200,
          rotation: PIXI.PI_2 / 12
        },
        left: {
          x: -720,
          rotation: -PIXI.PI_2 / 18
        },
        right: {
          x: 2560,
          rotation: -PIXI.PI_2 / 18
        }
      },
      'watch': {
        stable: {
          x: 1017,
          y: 965
        },
        bottom: {
          y: 4320,
          rotation: -PIXI.PI_2 / 12
        },
        left: {
          x: -1920,
          rotation: -PIXI.PI_2 / 18
        },
        right: {
          x: 1920,
          rotation: -PIXI.PI_2 / 18
        }
      }
    },
    'slide-2': {
      'imac': {
        stable: {
          x: 1525,
          y: -150
        },
        left: {
          x: -3000,
          rotation: -PIXI.PI_2 / 36
        },
        right: {
          x: 1500,
          rotation: PIXI.PI_2 / 72
        }
      },
      'iphone': {
        stable: {
          x: 615,
          y: 136
        },
        left: {
          x: -2000,
          rotation: -PIXI.PI_2 / 24
        },
        right: {
          x: 1920,
          rotation: PIXI.PI_2 / 24
        }
      },
      'sketchpad': {
        stable: {
          x: -5,
          y: 268
        },
        left: {
          x: -1000,
          rotation: -PIXI.PI_2 / 18
        },
        right: {
          x: 2800,
          rotation: PIXI.PI_2 / 18
        }
      }
    },
    'slide-3': {
      'imac': {
        stable: {
          x: 182,
          y: 25
        },
        left: {
          x: -2560,
          rotation: -PIXI.PI_2 / 72
        },
        right: {
          x: 2560,
          rotation: PIXI.PI_2 / 72
        }
      },
      'iphone': {
        stable: {
          x: 618,
          y: 768
        },
        left: {
          x: -1920,
          rotation: -PIXI.PI_2 / 24
        },
        right: {
          x: 2200,
          rotation: PIXI.PI_2 / 24
        }
      }
    }
  };

  // Public functions
  function init() {
    var slide, resource;

    loadResources(function () {
      for (slide in RESOURCES_DATA) {
        for (resource in RESOURCES_DATA[slide]) {
          RESOURCES_DATA[slide][resource].sprite = createSprite(getResourceUrl(slide, resource), RESOURCES_DATA[slide][resource].stable.x, RESOURCES_DATA[slide][resource].stable.y);
        }
      }

      window.RESOURCES_DATA = RESOURCES_DATA;
    });
  }

  // Utils functions
  function createSprite(path, x, y) {
    var texture = PIXI.Texture.fromImage(path);
    var sprite = new PIXI.Sprite(texture);

    // Transform origin: 50% 50%
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;

    // The position needs to be adjusted as we've changed the anchor point.
    sprite.position.x = x + (texture.width / 2);
    sprite.position.y = y + (texture.height / 2);;

    return sprite
  }

  function getResourceUrl(slide, resourceName) {
    return BASE_URL + '/' + slide + '/' + resourceName + EXTENSION;
  }

  function loadResources(onLoad) {
    var loader = new PIXI.loaders.Loader();
    var slide, resource;

    for (slide in RESOURCES_DATA) {
      for (resource in RESOURCES_DATA[slide]) {
        loader.add(slide + '/' + resource, getResourceUrl(slide, resource));
      }
    }

    loader.load(onLoad);
  }

  // Run block
  init();
})();
