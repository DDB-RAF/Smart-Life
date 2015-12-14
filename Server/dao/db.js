var mon = require('mongoose');
var config = {
	host:'localhost',
	dbName:'test'	
};
exports.mongoose = mon.connect('mongodb://'+config.host+'/'+config.dbName);
