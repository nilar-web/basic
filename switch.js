

let num1 = 3;
let num2 = 4;
let operator = '^';
let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;

  default:
   result = 'unknown operator.';
   break;
}

console.log(result); // 7