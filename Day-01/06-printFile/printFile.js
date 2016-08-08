var fs = require('fs');

/*
var fileContents = fs.readFileSync('test.txt', {encoding : 'utf8'});
console.log(fileContents);
*/

/*fs.readFile('test.txt', {encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log('something went wrong - ', err);
		return;
	}
	console.log(fileContents);	
});*/

var stream = fs.createReadStream('test.txt', {encoding : 'utf8'});
var readCount = 0;
stream.on('data', function(chunk){
	++readCount;
	console.log(chunk);
});

stream.on('end', function(){
	console.log('============= EOF ============= with ' , readCount , ' reads');
});

/* open, data, end, close, error */

