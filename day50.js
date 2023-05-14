// it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. 
// Using the const declaration only prevents reassignment of the variable identifier.

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
