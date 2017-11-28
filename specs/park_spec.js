var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe('park tests', function(){

  beforeEach(function(){
    // arrange
    park = new Park("Jurassic Park");
    dinosaur1 = new Dinosaur("Tyrannosaurus", 2);
    dinosaur2 = new Dinosaur("Velociraptor", 3);
    dinosaur3 = new Dinosaur("Triceratops", 1);
    dinosaur4 = new Dinosaur("Triceratops", 1);
  });

  it('should start empty', function(){
    // assert
    assert.strictEqual(park.population, 0);
  });

  it('should be able to add dinosaur', function(){
    // act
    park.add(dinosaur1);

    // assert
    assert.strictEqual(park.population, 1);
  });

  it('should be able to remove all dinosaurs by type', function(){
    // act
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    park.add(dinosaur4);

    park.removeByType("Triceratops");

    // assert
    assert.strictEqual(park.population, 2);
  });

  it('should be able to get all dinosaurs with offspring count of more than 2', function(){
    // arrange
    var expected = [dinosaur2];

    // act
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    park.add(dinosaur4);

    // assert
    assert.deepStrictEqual(park.dinosaursMoreOffspringThan(2), expected);
  });

});
