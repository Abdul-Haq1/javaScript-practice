// Use a Constructor to Create Objects
// Here's the Bird constructor from the previous challenge:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
// NOTE: this inside the constructor always refers to the object being created.

// Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, 
// this inside the constructor would not point to the newly created object, giving unexpected results.
// Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;

// Just like any other object, its properties can be accessed and modified:

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();
//Only change code below this line

// console.log(dog1.name)
// console.log(dog1.color)
// console.log(dog1.numLegs)

// dog1.name = "hound";
// dog1.numLegs = 3;

console.log(hound.name);
//console.log(dog1.numLegs);

// function Dog(name, color, numLegs){
//   this.name = name;
//   this.color = color;
//   this.numLegs = numLegs;

// }

// let dog2 = new Dog("raga", "white", 3)

// console.log(dog2.name)
// console.log(dog2.color)
// console.log(dog2.numLegs)

// dog2.name = "namo";
// dog2.color = "black";
// dog2.numLegs = 2;

// console.log(dog2.name)
// console.log(dog2.color)
// console.log(dog2.numLegs)
