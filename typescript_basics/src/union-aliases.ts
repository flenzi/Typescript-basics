function combine(
  input1: number | string,
  input2: number | string
): number | string {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  return input1.toString() + input2.toString();
}

type NumberOrString = number | string;

function combineV2(
  input1: NumberOrString,
  input2: NumberOrString,
  resultConversion: "as-number" | "as-string"
): NumberOrString {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  }
  return result.toString();
}

const combineNumbers = combine(2, 3);
console.log(combineNumbers);

const combineStrings = combine("hello", " this union thing sucks!");
console.log(combineStrings);

const combineNumbers2 = combineV2(2, 3, "as-string");
console.log(combineNumbers2);
