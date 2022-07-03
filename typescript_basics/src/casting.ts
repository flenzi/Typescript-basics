const userInput = <HTMLInputElement>document.getElementById("user-input")!;
userInput.value = "hola";

const userInput2 = (<HTMLInputElement>(
  document.getElementById("user-input2")!
)) as HTMLInputElement;
userInput2.value = "hola2";

const userInput3 = document.getElementById("user-input3");
if (userInput3) {
  (userInput3 as HTMLInputElement).value = "hola3";
}
