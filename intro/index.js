// Data types
// ---------- Primitive data types ---------------

// String ( Sequennce of characters. Must be in quotes or bacticks )
const firstName = "Sara";

console.log(firstName, typeof firstName);

// Number ( Integers as well as floating-point numbers )
const age = 30;
const temp = 98.9;

console.log(age, typeof age, typeof temp);

// Boolean ( Logical entity/ true or false )
const hasKids = false;
console.log(hasKids, typeof hasKids);

// Null ( Intentional absence of any object value )
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// Undefined ( A variable that has not yet been defined/ assigned )
let score;
console.log(score, typeof score);

// Symbol ( Built-in object whose constructor returns a unique symbol )
const id = Symbol("id");
console.log(id, typeof id);

// BigInt ( Numbers that are greater than the "Number" type can handle )
const n = 90077199254740991n;
console.log(n, typeof n);

// ---------- Reference data types ---------------
// Reference types or objects are non-primitive value and when assigned to a variable, the variable is given a reference to that value.
// Object literals, arrays and functions are all reference types

const numbers = [1,2,3,4];

const person = {
  name: "Ivana",
  age: 28,
  job: "programmer",
};

const sayHello = (obj) => console.log(obj.name, obj.age);






































,4