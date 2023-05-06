// The second way to access the properties of an object is bracket notation ([]). 
// If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

// However, you can still use bracket notation on object properties without spaces.

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
testObj["an entree"]
