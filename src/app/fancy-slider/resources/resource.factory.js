(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources')
    .factory('FancyResource', ['PIXI', function (PIXI) {
      //////////////
      // Resource //
      //////////////
      function Resource(url) {
        var texture = PIXI.Texture.fromImage(url);

        this.positions = {};
        // This is wrapped in 2 layers. The first one is used by the animation engine
        // and the second one can be used internally to apply needed changes.
        this.sprite = (function () {
          var outerLayer = new PIXI.Sprite();
          var innerLayer = new PIXI.Sprite(texture);

          outerLayer.addChild(innerLayer);

          // Transform origin: 50% 50%
          innerLayer.anchor.x = 0.5;
          innerLayer.anchor.y = 0.5;

          return outerLayer;
        })();
        this.texture = texture;
      }

      ///////////////
      // Prototype //
      ///////////////
      (function () {
        function convertCoordinate(coordinate, size) {
          return coordinate + size / 2;
        }

        function convertRotation(rotation) {
          if (rotation === 0) {
            return 0;
          }

          return PIXI.PI_2 / (360 / rotation);
        }

        Resource.prototype.addPosition = function (name, x, y, rotation) {
          // This is a quick fix in order to implement the stable position
          if (name === 'center') {
            // Converts the coordinates since it has altered the sprite's anchors.
            x = convertCoordinate(x, this.texture.width);
            y = convertCoordinate(y, this.texture.height);
            rotation = convertRotation(rotation);
          } else {
            x = this.positions.center.x + x;
            y = this.positions.center.y + y;
            rotation = this.positions.center.rotation + convertRotation(rotation);
          }

          this.positions[name] = {
            x: x,
            y: y,
            rotation: rotation
          };
        };

        Resource.prototype.setZIndex = function (zIndex) {
          this.sprite.zIndex = zIndex;
        };
      })();

      //////////////
      // Exporter //
      //////////////
      return Resource;
    }]);
})();
