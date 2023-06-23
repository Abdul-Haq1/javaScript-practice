// Specify Upper and Lower Number of Matches
// Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

// You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

let threeAs = "aaa";
let fourAs = "aaaa";
let sevenAs = "aaaaaaa";

let myRegex = /a{2,4}/;
myRegex.test(threeAs); // true
myRegex.test(fourAs); // true
myRegex.test(sevenAs); // true


let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
