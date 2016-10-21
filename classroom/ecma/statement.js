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

// for..of
var numbers = [1, 2, 3, 4];
for(let number of numbers){
  console.log(number);
}

var numbers = [1, 2, 3, 4];
// numbers['number'] = 10;
for(let [index, number] of numbers.entries()){
  console.log(`${index} => ${number}`);
}


// for..in
var numbers = [1, 2, 3, 4];
for(let index in numbers){
  console.log(index);
}

var student = {
  "id": 1,
  "name": "fulano",
  "email": "fulano@gmail.com"
}
console.log(student.name);
console.log(student['name']);
for(let index of Object.keys(student)){
  console.log(student[index]);
}

// while

// do-while
