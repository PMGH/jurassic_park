var Enclosure = function(){
  this.dinosaurs = [];
  this.population = 0;
};

Enclosure.prototype = {
  add: function(dinosaur){
    this.dinosaurs.push(dinosaur);
    this.population++;
  },
  removeByType: function(type){
    // create empty array to pass dinosaurs that do not match the given type, then set the this.dinosaurs array to that array
    var newDinosaurs = [];

    for (var dinosaur of this.dinosaurs){
      if (dinosaur.type !== type){
        newDinosaurs.push(dinosaur);
      };
    };
    this.dinosaurs = newDinosaurs;
    this.population = this.dinosaurs.length;
  },
  dinosaursMoreOffspringThan: function(numOffspring){
    var dinosaurs = [];

    for (var dinosaur of this.dinosaurs){
      if (dinosaur.numOffspring > numOffspring){
        dinosaurs.push(dinosaur);
      };
    };
    return dinosaurs;
  }
};

module.exports = Enclosure;
