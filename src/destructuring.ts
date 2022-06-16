const userName = "Federico";
let age = 34;
age = 35;

//arrow functions
const button = document.querySelector("button");
button?.addEventListener("click", (event) => console.log(event));

// default parameter
const add = (a: number, b: number = 1) => a + b;
console.log(add(1, 2));
console.log(add(2));

//spread operator
const hobbies = ["read", "do nothing", "stare sun", "eat mayonese"];
const activeHobbies = ["do something else"];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: "pepe",
  age: 7,
  height: 120,
};

const copyPerson = { ...person };
const notCopyPerson = person;
console.log(person);
console.log(copyPerson);

copyPerson.age = 8;
notCopyPerson.age = 9;
console.log(person);
console.log(copyPerson);
console.log(notCopyPerson);

// array destructuring
const [h1, h2, ...remainingHobbies] = hobbies;
console.log(remainingHobbies);

//Object destructuring
const { name: firstName, ...rest } = person;
console.log(firstName);
console.log(rest);
