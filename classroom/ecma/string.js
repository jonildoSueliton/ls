// String Literal
console.log('h');
console.log('hello world');
console.log("hello world");

var name = "hello \
world";
console.log(name);

console.log('\xA9');
console.log('\u00A9');
console.log('\u{2F804}');
console.log('hello\' world');
console.log("hello' world");
console.log('<img src="url">');

console.log('hello\nworld');
console.log('hello<br>world');

// template string (ecma6)
console.log('hello ' + 'World');
console.log('hello ' + 10);
console.log('hello ' +
              10);

var name = 'Fulano';
console.log('Hello ' + name);

var name = 'Fulano';
var email = 'fulano@gmail.com';
var id = '1';

var row = '<tr><td>'+id+'</td><td>'+name+'</td><td>'+email+'</td></tr>';
console.log(row);

var row = `<tr><td>${id}</td><td>${name}</td><td>${email}</td></tr>`;
console.log(row);
