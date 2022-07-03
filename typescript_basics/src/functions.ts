function add3(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add3(1, 2));

let combineValues: (a: number, b: number) => number;
combineValues = add3;

printResult(combineValues(20, 20));

function addAndHandle(
  n1: number,
  n2: number,
  callBack: (n1: number) => void
): void {
  const result = n1 + n2;
  callBack(result);
}

addAndHandle(10, 20, (value) => console.log(value));
