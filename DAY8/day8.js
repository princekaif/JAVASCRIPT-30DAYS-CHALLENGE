 //DAY8
//TASK1
//USE TEMPLATE LITERALS TO CREATE A STRING THAT INCLUDES VARIBLES FOR A PERSONS AND NAME AND AGE
let name=" kaif";
let age =18;
console.log(`the name is ${name} and age is ${age}`);
// • Task 2: Create a multi-line string using template literals and log it to the console.

let multi =` this is a mukti line string
line2 
line3 `;
console.log(multi); 

// Activity 2: Destructuring

// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const number=[1,2,3,4];
const [first,second]=number;
console.log(first);
console.log(second);


// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book={
    tittle:"The King",
    author:"don",
    year:2007
};
const {tittle,year}=book;
console.log(tittle);
console.log(year);

// Activity 3: Spread and Rest Operators

// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const oldarr=[1,2,3];
const newarr=[...oldarr,4,5,6];
console.log(newarr);
// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
 function sum(...nums){
    return nums.reduce((acc,cur)=>acc+cur,0);
 }
 console.log(sum(10,20,30));

// Activity 4: Default Parameters

// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

// Activity 5: Enhanced Object Literals
 

// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const name = "John";
const age = 30;

const person = {
  name,
  age,
  greet() {
    console.log(Hello, my name is ${this.name} and I am ${this.age} years old.);
  }
};

console.log(person);
person.greet();
// • Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = "score";
const player = {
  name: "Alice",
  [propName]: 100
};

console.log(player); // { name: 'Alice', score: 100 }