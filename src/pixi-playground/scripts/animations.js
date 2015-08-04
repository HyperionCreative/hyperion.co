(function () {
  'use strict';

  //////////////////
  // The position //
  //////////////////
  var Position = function (x, y, rotation) {
    this.x = angular.isNumber(x) ? x : 0;
    this.y = angular.isNumber(y) ? x : 0;
    this.rotation = angular.isNumber(rotation) ? rotation : 0;
  };

  //////////////////
  // The resource //
  //////////////////
  var Resource = function (url) {
    var texture = PIXI.Texture.fromImage(url);

    this.positions = [];
    this.sprite = (function () {
      var sprite = new PIXI.Sprite(texture);

      // Transform origin: 50% 50%
      sprite.anchor.x = 0.5;
      sprite.anchor.y = 0.5;

      return sprite;
    })();
    this.texture = texture;
  };

  // addPosition
  (function () {
    function convertCoordinate(coordinate, size) {
      if (coordinate > 0) {
        return coordinate + size / 2;
      } else {
        return coordinate - size / 2;
      }
    }

    function convertRotation(rotation) {
      if (rotation === 0) {
        return 0;
      }

      return PIXI.PI_2 / (360 / rotation);
    }

    Resource.prototype.addPosition = function (name, position) {
      // Converts the coordinates since it has altered the sprite's anchors.
      var x = convertCoordinate(position.x, this.texture.width);
      var y = convertCoordinate(position.y, this.texture.height);
      var rotation = convertRotation(position.rotation);

      // Creates a new position in order not to modify the original one.
      this.positions[name] = new Position(x, y, rotation);
    };
  })();

  ////////////////////////////
  // The animation resource //
  ////////////////////////////
  var AnimationResourceGroup = function (resources) {
    this.resources = resources;
  };

  // animateTo
  (function () {
    function animate(sprite, position) {
      TweenMax.to(sprite, 1.5, {
        x: position.x,
        y: position.y,
        z: 0,
        rotation: position.rotation,
        ease: Power3.easeInOut
      });
    }

    AnimationResourceGroup.prototype.animateTo = function (positionName) {
      angular.forEach(this.resources, function (resource) {
        animate(resource.sprite, resource.positions[positionName]);
      });
    };
  })();

  ///////////
  // Utils //
  ///////////
  function init () {
    var firstSlide = (function () {
      var flowerPot = new Resource('assets/slide-1/flower-pot@2x.png');
      flowerPot.addPosition('stable', new Position(1710, 380, 0));
      flowerPot.addPosition('bottom', new Position(1710, 2880, 30));
      flowerPot.addPosition('left', new Position(-3000, 380, -30));
      flowerPot.addPosition('right', new Position(1440, 380, 30));

      var macbook = new Resource('assets/slide-1/macbook@2x.png');
      macbook.addPosition('stable', new Position(530, 27, 0));
      macbook.addPosition('bottom', new Position(530, 5760, 45));
      macbook.addPosition('left', new Position(-2560, 27, -20));
      macbook.addPosition('right', new Position(2000, 27, 20));

      var sketchbook = new Resource('assets/slide-1/sketchbook@2x.png');
      sketchbook.addPosition('stable', new Position(16, 354, 0));
      sketchbook.addPosition('bottom', new Position(16, 7200, 30));
      sketchbook.addPosition('left', new Position(-720, 354, -20));
      sketchbook.addPosition('right', new Position(2560, 354, 20));

      var watch = new Resource('assets/slide-1/watch@2x.png');
      watch.addPosition('stable', new Position(1017, 965, 0));
      watch.addPosition('bottom', new Position(1017, 4320, -30));
      watch.addPosition('left', new Position(-1920, 965, -20));
      watch.addPosition('right', new Position(1920, 965, 20));

      return new AnimationResourceGroup([flowerPot, macbook, sketchbook, watch]);
    })();

    var secondSlide = (function () {
      var imac = new Resource('assets/slide-2/imac@2x.png');
      imac.addPosition('stable', new Position(1525, -150, 0));
      imac.addPosition('left', new Position(-3000, -150, -10));
      imac.addPosition('right', new Position(1500, -150, 5));

      var iphone = new Resource('assets/slide-2/iphone@2x.png');
      iphone.addPosition('stable', new Position(615, 136, 0));
      iphone.addPosition('left', new Position(-2000, 136, -15));
      iphone.addPosition('right', new Position(1920, 136, 15));

      var sketchpad = new Resource('assets/slide-2/sketchpad@2x.png');
      sketchpad.addPosition('stable', new Position(-5, 268, 0));
      sketchpad.addPosition('left', new Position(-1000, 268, -20));
      sketchpad.addPosition('right', new Position(2800, 268, 20));

      return new AnimationResourceGroup([imac, iphone, sketchpad]);
    })();

    var thirdSlide = (function () {
      var imac = new Resource('assets/slide-3/imac@2x.png');
      imac.addPosition('stable', new Position(182, 25, 0));
      imac.addPosition('left', new Position(-2560, 25, -5));
      imac.addPosition('right', new Position(2560, 25, 5));

      var iphone = new Resource('assets/slide-3/iphone@2x.png');
      iphone.addPosition('stable', new Position(618, 768, 0));
      iphone.addPosition('stable', new Position(-1920, 768, -15));
      iphone.addPosition('stable', new Position(2200, 768, 15));

      return new AnimationResourceGroup([imac, iphone]);
    })();

    return {
      firstSlide: firstSlide,
      secondSlide: secondSlide,
      thirdSlide: thirdSlide
    };
  }

  //////////////
  // Exporter //
  //////////////
  window.Animations = {
    init: init
  };
})();
