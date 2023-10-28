const stringOne = new String('Suraj Chaudhary');
const stringTwo = "    Suraj Chaudhary     ";
const stringThree = "Suraj Chaudhary B.Tech CSE";

// console.log(stringOne) // Print string

// console.log(stringOne.charAt(4));   //print character j from stringOne 

// console.log(stringTwo);   //  Print stringTwo along with spaces
// console.log(stringTwo.trim()); // Print strinsTwo after removing unwanted spaces from starting and end of the string


// console.log(stringOne.indexOf('j'));  //return the index value of j in stringOne

// console.log(stringTwo.includes('Suraj')); //Return true because "Suraj" is present in stringTwo

// console.log(stringTwo.includes('suraj'));  //Return false because "suraj" is not present in stringTwo

// console.log(stringOne.replace(" ","-")); // replace space(" ") with (-)hyphen

// console.log(stringThree.split(" "));  // Return array by spliting string with spaces

// console.log(stringOne.toLowerCase()); //Return string in lower alphabet.

// console.log(stringOne.toUpperCase()); // Return string in upper alphabet

// console.log(stringOne.charCodeAt(3));  // Return ASCII value of the character at index 3

console.log(stringOne.codePointAt(3));  //Return ASCII value of the character at position 3