const Animal = require('./Level_1')

// 1) Override the method you create in Animal class
class Bird extends Animal {
  constructor(name, age, color, legs, wings) {
    super(name, age, color, legs)
    this.wings = wings;
  }
}

const parrot = new Bird('Peththappu', 1, 'Green', 2, true)
console.log(parrot)
