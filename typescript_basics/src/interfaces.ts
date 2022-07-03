// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;
// user1 = {
//   name: "F",
//   age: 34,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hello");

// Interface inheritance
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Announce implements Greetable {
  name: string;
  extraMessage?: string;

  constructor(name: string, extraMessage?: string) {
    this.name = name;
    this.extraMessage = extraMessage;

  }

  greet(phrase: string): void {
    this.extraMessage
      ? console.log(
          "I'm an announce: " + phrase + " extraMessage:" + this.extraMessage
        )
      : console.log("I'm an announce: " + phrase);
  }
}

const megaAnnounce = new Announce("Pepe 3");
console.log(megaAnnounce);

const megaAnnounce2 = new Announce("Pepe 3000", "withExtramessage!!");
console.log(megaAnnounce2);

// Interface as function
interface addFn {
  (a: number, b: number): number;
}

const addFunction: addFn = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(addFunction(2, 3));
