/* create a calculator object and assign it to a variable 'calculator'

	The object must have the following behaviors
		- add(x,y)
		- subtract(x,y)
		- multiply(x,y)
		- divide(x,y)

  Execute all the above methods for x = 100 and y = 150 and print the result
*/

var calculator = {
	add : function(x,y){
		return x + y;
	},
	subtract : function(x,y){
		return x - y;
	},
	multiply : function(x,y){
		return x * y;
	},
	divide : function(x,y){
		return x / y;
	}
};

console.log('[@calculator] - calculator = ', calculator);
module.exports = calculator;