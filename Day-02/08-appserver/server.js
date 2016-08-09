var http = require('http'),
	dataParser = require('./dataParser'),
	staticServer = require('./staticServer'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler');



var server = http.createServer(function(req, res){
	console.log(req.method, req.url);
	dataParser(req, res);
	staticServer(req, res);
	calculatorHandler(req, res);
	notFoundHandler(req, res);
});
server.listen(8080);