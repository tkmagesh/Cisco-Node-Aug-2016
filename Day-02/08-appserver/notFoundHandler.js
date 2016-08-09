module.exports = function(req, res){
	console.log('[@notFoundHandler] sending 404 response');
	res.statusCode = 404;
	res.end();
}