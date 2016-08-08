var http = require('http');

var server = http.createServer(function(req, res){
	console.log(req.method, req.url);
	res.write('<h1>Welcome to node</h1>');
	res.end();
});

server.listen(8080);


/*
add a index.html
req.url = / or index.html
	serve index.html
else
	res.statusCode = 404;
	res.end()
*/