(function(){
  'use strict';

  //////////////////
  // The position //
  //////////////////
  var Position = function (name, x, y, rotation) {
    this.name = name;
    this.x = angular.isNumber(x) ? x : 0;
    this.y = angular.isNumber(y) ? x : 0;
    this.rotation = angular.isNumber(rotation) ? x : 0;
  };

  //////////////////
  // The resource //
  //////////////////
  var Resource = function (name, url, positions) {
    this.name = name;
    this.url = url;
    this.positions = positions;
  };

  var flowerPot = new Resource

  var AnimationResource = function (resource) {

  };
})();
