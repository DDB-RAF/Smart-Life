var mongoose = require('mongoose');
var config = {
	host:'localhost',
	dbName:'test'	
};
mongoose.connect('mongodb://'+config.host+'/'+config.dbName);

