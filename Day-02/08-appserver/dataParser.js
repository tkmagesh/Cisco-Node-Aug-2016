var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	var resourceName = req.url === '/' ? 'index.html' : req.url;
	req.urlData = url.parse(resourceName);
	req.query = querystring.parse(req.urlData.query);
	if (req.method === 'POST'){
		var temp = '';
		req.on('data', function(chunk){
			temp += chunk;
		});
		req.on('end', function(){
			req.body = querystring.parse(temp);
			next();
		});
	} else {
		next();
	}
}