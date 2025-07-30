const name = 'Paras';
const repoCount = 15;

console.log(`my name is ${name} and i have ${repoCount} repositories`);
console.log(`my name is ${name.toUpperCase()} and i have ${repoCount} repositories`);

const gameName = new String('Super Mario');
console.log(gameName);

console.log(gameName.[0]); // Accessing the first character
console.log(gameName.length); // Getting the length of the string 
console.log(gameName.toLowerCase()); // Converting to lowercase
console.log(gameName.toUpperCase()); // Converting to uppercase
console.log(gameName.indexOf('Mario')); // Finding the index of a substring
console.log(gameName.slice(0, 5)); // Slicing the string from index 0 to 5
console.log(gameName.replace('Super', 'Mega')); // Replacing a substring
console.log(gameName.split(' ')); // Splitting the string into an array

console.log(gameName.charAt(0)); // Getting the character at index 0
console.log(gameName.endsWith('Mario')); // Checking if the string ends with 'Mario'
console.log(gameName.startsWith('Super')); // Checking if the string starts with 'Super'
console.log(gameName.includes('Mario')); // Checking if the string includes 'Mario'
console.log(gameName.trim()); // Trimming whitespace from both ends 
console.log(gameName.repeat(2)); // Repeating the string twice
console.log(gameName.concat(' is a classic game')); // Concatenating another string
console.log(gameName.padStart(20, '*')); // Padding the start of the string
console.log(gameName.padEnd(20, '*')); // Padding the end of the string
console.log(gameName.localeCompare('Super Mario')); // Comparing two strings

console.log(gameName.toString()); // Converting String object to primitive string
console.log(typeof gameName); // Checking the type of gameName

console.log(typeof gameName.valueOf()); // Getting the primitive value of the String object
console.log(gameName.valueOf()); // Getting the primitive value of the String object

console.log(gameName.search('Mario')); // Searching for a substring