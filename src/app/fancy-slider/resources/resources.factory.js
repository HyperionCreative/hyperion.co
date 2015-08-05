(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resources')
    .factory('PixiResource', ['PIXI', 'TweenLite', 'TweenLiteEasings', function (PIXI, TweenLite, TweenLiteEasings) {
      ///////////////////
      // Configuration //
      ///////////////////
      var EASING = TweenLiteEasings.Power3.easeInOut;
      var DURATION = 1.5; // 1500ms

      //////////////
      // Resource //
      //////////////
      function Resource(url) {
        var texture = PIXI.Texture.fromImage(url);

        this.animations = {};
        this.sprite = (function () {
          var sprite = new PIXI.Sprite(texture);

          // Transform origin: 50% 50%
          sprite.anchor.x = 0.5;
          sprite.anchor.y = 0.5;

          return sprite;
        })();
        this.texture = texture;
      }

      ///////////////
      // Prototype //
      ///////////////
      (function () {
        function convertCoordinate(coordinate, size) {
          if (coordinate >= 0) {
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

        Resource.prototype.addToAnimation = function (name, x, y, rotation) {
          // Converts the coordinates since it has altered the sprite's anchors.
          x = convertCoordinate(x, this.texture.width);
          y = convertCoordinate(y, this.texture.height);
          rotation = convertRotation(rotation);

          var sprite = this.sprite;

          // Creates a new position in order not to modify the original one.
          this.animations['to' + name.charAt(0).toUpperCase() + name.slice(1)] = function (onSuccess, fast) {
            TweenLite.to(sprite, (fast === true) ? 0 : DURATION, {
              x: x,
              y: y,
              z: 0,
              rotation: rotation,
              ease: EASING,

              onComplete: onSuccess || angular.noop
            });
          };
        };
      })();

      //////////////
      // Exporter //
      //////////////
      return Resource;
    }]);
})();
