var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('dinosaur tests', function(){

  beforeEach(function(){
    // arrange
    dinosaur = new Dinosaur("Tyrannosaurus", 2);
  });

  it('should have a type', function(){
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });

  it('should have a number of offspring per year', function(){
    assert.strictEqual(dinosaur.numOffspring, 2);
  });

});
