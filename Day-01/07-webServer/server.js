var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');


var staticExtns = ['.html', '.js', '.css', '.img', '.png', '.ico', '.xml', '.json', '.txt'];

function isStatic(resource){
	var resourceExtn = path.extname(resource);
	return staticExtns.indexOf(resourceExtn) !== -1;
}

var server = http.createServer(function(req, res){
	console.log(req.method, req.url);
	var resourceName = req.url === '/' ? 'index.html' : req.url;
	var urlObj = url.parse(resourceName);
	if (isStatic(urlObj.pathname)){
		var resource = path.join(__dirname, urlObj.pathname);
		if (fs.existsSync(resource)){
			fs.createReadStream(resource).pipe(res);
		} else {
			res.statusCode = 404;
			res.end();
		}
	} else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var reqData = querystring.parse(urlObj.query);
		var op = reqData.op,
			n1 = parseInt(reqData.n1, 10),
			n2 = parseInt(reqData.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var temp = '';
		req.on('data', function(chunk){
			temp += chunk;
		});
		req.on('end', function(){
			var reqData = querystring.parse(temp);
			var op = reqData.op,
				n1 = parseInt(reqData.n1, 10),
				n2 = parseInt(reqData.n2, 10);
			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		});
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8080);