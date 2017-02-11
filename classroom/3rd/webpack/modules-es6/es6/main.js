import { square, diag } from './lib';

console.log(square(11));
console.log(diag(4, 3));

// npm install lodash --save-dev
import { zip, uniq } from 'lodash';
console.log(zip(['1', '2'], ['a', 'b'])); // [ [ '1', 'a' ], [ '2', 'b' ] ]
console.log(uniq([1, 2, 1, 2, 3, 4]));
