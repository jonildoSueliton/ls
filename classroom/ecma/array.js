// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals

// Create an Array []
var numbers = [1, 2, 4, 7];
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers[4]); //=> undefined
console.log(numbers);

// Changing Array
// loading element
numbers[4] = 10;
// changing value
numbers[2] = 5;
console.log(numbers);

// Defining Empty Array
var numbers = [];
numbers[0] = 10;
numbers[1] = 20;
numbers[10] = 100;
// accessing array elements
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[10]);
console.log(numbers);

// multiple types
var values = [1, 'fulano', true, null, [1, 2]];
console.log(values[1]);

// string index
var values = [];
values[0] = 1;
values['number'] = 10;
values[1] = 20;

// n dimentions
var students = [];
students[0] = [1, 'fulano', 'fulano@gmail.com'];
students[0][2]; //=> 'fulano@gmail.com'

var students = [];
students[0] = [];
students[0]['id'] = 1;
students[0]['name'] = 'Fulano';
students[0]['email'] = 'fulano@gmail.com'
students[0]['email']; //=> 'fulano@gmail.com'
students[0].email; //=> 'fulano@gmail.com'

// spread operator

// interaction: for, for..of, for..in, for([key, value] of [].entries())
ips = [
  {address: "192.168.0.2", mask: "255.255.255.0"},
  {address: "192.168.0.10", mask: "255.255.255.0"},
  {address: "192.168.0.26", mask: "255.255.255.0"},
  {address: "192.168.0.30", mask: "255.255.255.0"}
]

// OO
// Properties:
// Methods:
//    Mutator: pop, push, reverse, shift, unshift, sort
//    Accessor: includes, join
//    Iteration: forEach, reduce, filter, map, every, some, find, reduceRight
