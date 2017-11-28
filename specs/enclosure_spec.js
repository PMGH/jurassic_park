var assert = require('assert');
var Enclosure = require('../enclosure.js');
var Dinosaur = require('../dinosaur.js');

describe('enclosure tests', function(){

  beforeEach(function(){
    // arrange
    enclosure = new Enclosure();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 2);
    dinosaur2 = new Dinosaur("Velociraptor", 3);
    dinosaur3 = new Dinosaur("Triceratops", 1);
    dinosaur4 = new Dinosaur("Triceratops", 1);
  });

  it('should start empty', function(){
    // assert
    assert.strictEqual(enclosure.population, 0);
  });

  it('should be able to add dinosaur', function(){
    // act
    enclosure.add(dinosaur1);

    // assert
    assert.strictEqual(enclosure.population, 1);
  });

  it('should be able to remove all dinosaurs by type', function(){
    // act
    enclosure.add(dinosaur1);
    enclosure.add(dinosaur2);
    enclosure.add(dinosaur3);
    enclosure.add(dinosaur4);

    enclosure.removeByType("Triceratops");

    // assert
    assert.strictEqual(enclosure.population, 2);
  });

  it('should be able to get all dinosaurs with offspring count of more than 2', function(){
    // arrange
    var expected = [dinosaur2];

    // act
    enclosure.add(dinosaur1);
    enclosure.add(dinosaur2);
    enclosure.add(dinosaur3);
    enclosure.add(dinosaur4);

    // assert
    assert.deepStrictEqual(enclosure.dinosaursMoreOffspringThan(2), expected);
  });

});
