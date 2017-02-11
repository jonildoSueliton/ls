/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const square = __webpack_require__(1).square;
	const diag = __webpack_require__(1).diag;

	console.log(square(11));
	console.log(diag(4, 3));

	const lib = __webpack_require__(1);

	// console.log(lib);
	console.log(lib.square(4, 3));


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);