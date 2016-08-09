var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.js', '.css', '.img', '.png', '.ico', '.xml', '.json', '.txt'];

function isStatic(resource){
	var resourceExtn = path.extname(resource);
	return staticExtns.indexOf(resourceExtn) !== -1;
}

module.exports = function(req, res){
	if (isStatic(req.urlData.pathname)){
		var resource = path.join(__dirname, req.urlData.pathname);
		if (fs.existsSync(resource)){
			console.log('file exists - ', req.urlData.pathname);
			//fs.createReadStream(resource).pipe(res);
			var stream = fs.createReadStream(resource);
			stream.on('open', function(){
				console.log('[@staticServer] opening file for sending to the client');
			});
			stream.on('data', function(chunk){
				console.log('[@staticServer] writing chunk to the client');
				res.write(chunk);
			});
			stream.on('end', function(){
				console.log('[@staticServer] completed writing file to the client');
				res.end();
			});
		} else {
			res.statusCode = 404;
			res.end();
		}
	}
}