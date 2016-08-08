/*
create an object accumulator (accumulator.js) that has the following methods
	- add(n)
	- subtract(n)
	- multiply(n)
	- divide(n)
	- getResult()


acc.add(100)
acc.subtract(50)
acc.multiply(10)
acc.divide(2)
acc.getResult() //=> 250


*/



module.exports = function(){ //accumulatorFactory
	var result = 0;
	return {
		add : function(n){
			result += n;
		},
		subtract : function(n){
			result -= n;
		},
		multiply : function(n){
			result *= n;
		},
		divide : function(n){
			result /= n;
		},
		getResult : function(){
			return result;
		}
	}
};