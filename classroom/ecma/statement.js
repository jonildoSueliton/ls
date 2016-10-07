// if-else, ?:
var number = 10;
var result;

if(number < 0) {
  result = "menor que zero";
} else if (number > 0) {
  result = "maior que zero";
} else {
  result = "igual a zero";
}

console.log(result);

// switch

var number1 = 10;
var number2 = 10;
var operator = '+'; // (+, -, *, /)
var result;

switch(operator) {
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  case '*':
    result = number1 * number2;
    break;
  case '/':
    result = number1 / number2;
    break;
  default:
    result = 0;
}

console.log(result);

// for

for(let flag = 0; flag < 100; flag++){
    console.log(flag);
}

var result = '';
for(let flag = 0; flag < 100; flag++){
    result += (flag < 10)? '0' + flag + ' ' : flag + ' ';
    if((flag + 1) % 10 == 0)
      result += '\n';
}
console.log(result);

// while

// do-while
