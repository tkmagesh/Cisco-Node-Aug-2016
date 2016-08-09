var url = require('url');

module.exports = function(req, res){
	var resourceName = req.url === '/' ? 'index.html' : req.url;
	req.urlData = url.parse(resourceName);
}