// 1) Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
}

// 2) Create a Dog and Cat child class from the Animal Class.
const dog = new Animal('Lassie', 5, 'Brown', 4)
const cat = new Animal('Kitty', 2, 'White', 4)
console.log(dog)
console.log(cat)

module.exports = Animal;
