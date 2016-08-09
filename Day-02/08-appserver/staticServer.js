var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.js', '.css', '.img', '.png', '.ico', '.xml', '.json', '.txt'];

function isStatic(resource){
	var resourceExtn = path.extname(resource);
	return staticExtns.indexOf(resourceExtn) !== -1;
}

module.exports = function(publicPath){
	return function(req, res, next){
		if (isStatic(req.urlData.pathname)){
			var resource = path.join(publicPath, req.urlData.pathname);
			if (fs.existsSync(resource)){
				fs.createReadStream(resource).pipe(res);
			} else {
				res.statusCode = 404;
				res.end();
			}
		} else {
			next();
		} 
	}
}