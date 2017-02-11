const sqrt = Math.sqrt;

const square = function(x) {
    return x * x;
}

const diag = function(x, y) {
    return sqrt(square(x) + square(y));
}

module.exports = {
    sqrt: sqrt,
    square: square,
    diag: diag
}
