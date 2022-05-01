const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	const sum = array.reduce((total, currentNum) => total + currentNum, 0);
  return sum;
};

const multiply = function(array) {
  const product = array.reduce((total, currentNum) => total * currentNum, 1);
  return product;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let total = 1;
	for (let i = 1; i <= a; i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
