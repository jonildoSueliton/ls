var numbers = [1, 2, 4, 7];
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers);

numbers[4] = 10;
numbers[2] = 5;
console.log(numbers);

var numbers = [];
numbers[0] = 10;
numbers[1] = 20;
numbers[10] = 100;
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[10]);
console.log(numbers);

var values = [1, 'fulano', true, null];
console.log(values[1]);

var values = [];
values[0] = 1;
values['number'] = 10;
values[1] = 20;

var students = [];
students[0] = [1, 'fulano', 'fulano@gmail.com'];
students[0][2];

var students = [];
students[0] = [];
students[0]['id'] = 1;
students[0]['name'] = 'Fulano';
students[0]['email'] = 'fulano@gmail.com'
students[0]['email'];
students[0].email;
