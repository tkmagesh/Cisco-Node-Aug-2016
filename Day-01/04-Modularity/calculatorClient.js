var calculator = require('./calculator.js');
var x = 100,
	y = 150;
console.log('[@calculatorClient] - calculator = ', calculator);
console.log(calculator.add(x,y));
console.log(calculator.subtract(x,y));
console.log(calculator.multiply(x,y));
console.log(calculator.divide(x,y));