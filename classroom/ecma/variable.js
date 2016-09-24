// definition var, let, const
var number;
var number = 10; // int number = 10; (C language)
typeof number;
console.log(number);
number = 'fulano';
typeof number;
console.log(number);

let number = 10;

const NUMBER = 10;
NUMBER = 100; //TypeError
console.log(NUMBER);

// Case Sensitive
var number = 8;
var NUmber = 80;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variables
var 0number; //SyntaxError
var %number; //SyntaxError
var var; //SyntaxError
var function; //SyntaxError
var number;
var _number;
var $number;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variable_hoisting
nome = 'fulano';
console.log(nome);

console.log(outroNome); //ReferenceError
outroNome = 10;

console.log(outroNome); //ReferenceError
var outroNome = 10;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
var number1, number2;
[number1, number2] = [8, 80];
console.log(number1);
console.log(number2);

var number, string;
[number, string] = [8, 'fulano'];
console.log(number);
console.log(string);
