const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple === array with fixed lenght and types
} = {
  name: "Federico",
  age: 34,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

person.role = [1, "admin"];
console.log(person);

//*********************************/

enum Role {
  ADMIN,
  PEASANT,
}

const person2 = {
  name: "Federico",
  age: 34,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};
console.log(person2);