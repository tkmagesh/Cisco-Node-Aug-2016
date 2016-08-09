var chalk = require('chalk');
module.exports = function(req, res, next){
	console.log(chalk.red(req.method), chalk.blue(req.urlData.pathname));
	next();
}