const lib = require('./lib');

console.log(lib);
console.log(lib.square(4, 3));

const square = require('./lib').square;
const diag = require('./lib').diag;

console.log(square(11));
console.log(diag(4, 3));
