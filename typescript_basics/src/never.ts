let _userInput: unknown;
let _userName: string;

_userInput = 5;
_userInput = "as";

if (typeof _userInput === "string") {
  _userName = _userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("Some error", 500);
