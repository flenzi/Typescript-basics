const userName = "Federico";
let age = 34;
age = 35;

//arrow functions
const button = document.querySelector("button");
button?.addEventListener("click", (event) => console.log(event));

// default parameter
const someAddFunction = (a: number, b: number = 1) => a + b;
console.log(someAddFunction(1, 2));
console.log(someAddFunction(2));

//spread operator
const hobbies = ["read", "do nothing", "stare sun", "eat mayonese"];
const activeHobbies = ["do something else"];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const somePerson = {
  name: "pepe",
  age: 7,
  height: 120,
};

const copyPerson = { ...somePerson };
const notCopyPerson = somePerson;
console.log(somePerson);
console.log(copyPerson);

copyPerson.age = 8;
notCopyPerson.age = 9;
console.log(somePerson);
console.log(copyPerson);
console.log(notCopyPerson);

// array destructuring
const [h1, h2, ...remainingHobbies] = hobbies;
console.log(remainingHobbies);

//Object destructuring
const { name: firstName, ...rest } = person;
console.log(firstName);
console.log(rest);
