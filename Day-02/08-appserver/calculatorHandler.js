var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res, next){
	if (req.urlData.pathname === '/calculator'){
		var reqData = req.method === 'GET' ? req.query : req.body;
		var op = reqData.op,
			n1 = parseInt(reqData.n1, 10),
			n2 = parseInt(reqData.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		next();
	}
}