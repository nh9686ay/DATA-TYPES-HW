console.log('you are running the hw file; good start and happy coding');

/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */
let myFavoriteNumber;
    myFavoriteNumber=9;
/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */
let name = "Emoniista";
var Gender = 'Male';
const age = 26;
console.log(name, Gender, age);
/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */
const myNumer = 21;
console.log(myNumer + 10);
console.log(myNumer - 15);
console.log(myNumer * 3);
console.log(myNumer / 7);
console.log( myNumer % 2);
/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */
const firstName = "ABDUR RAHMAN";
const lastName = "EMON"
const fullName = firstName + " " + lastName;
console.log(fullName);
/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */
const hello = "Hello"
const world = "World!"
const message = `${hello} ${world}`
console.log(message);
/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below.
 */

// A. Use loose-equals (==) to create a statement that is false
// B. Use strict equals (===) to create a statement that is true
// C. Use strict unequal (!==) to create a statement that is true
// D. Use less than (<) to create a statement that is false
// E. Use greater than (>) to create a statement that is false
// F. Use less than or equals (<=) to create a statemetn that is true
// G. Use greater than or equals (>=) to create a statemetn that is false
console.log("cat"=="dog");
console.log(10===10);
console.log('sugar'!=='salt');
console.log(4<2);
console.log(2>4);
console.log(2<=3);
console.log(3<=2);

/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to true
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = 'Kevin';

 console.log(a < b);

console.log(c > d);

console.log('Name' === 'Name');

console.log(a + b === c);

console.log(a * a === d);

console.log(e === 'Kevin');

console.log(48 !== '48');

/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false
 */

a = 6;
b = 100;
c = -5;
d = 3000;
e = 'Jelly Bean';

console.log(a > b);

console.log(c > d);

console.log('Peanut' !== 'Peanut');

console.log(a + b === c);

console.log(a + a > d);

console.log(e !== 'Jelly Bean');

console.log(48 === '48');

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];
console.log(array1[2]);
console.log(array2[1][1]);
console.log(array3[1][1][1][0]);

/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4[3]);

/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".
thom[0] = 'Gameboy'
console.log(thom);

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.
karolin[1] = 16+1; //or i could have just put 17 istead of doing math way 16+1
console.log(karolin);
// Change Cathleen's hometown from New York to "Gotham City".
cathleen[2] = "Gotham City";
console.log(cathleen);
// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
kristyn.pop();
kristyn.push('Oakland');
console.log(kristyn);