var schema = require('schema.js');
var mongoose = require('mongoose.js');

var userModel = mongoose.model('user',schema.userSchema);


/**
 * input:
 * 	user:{
 * 		userName:string,
 * 		passWord:string,
 * 		name:String,
 * 		email:String,
 * 		phone:String
 * 	}
 * callback(err):
 * 		
 */
exports.add = function(user,callback){
	
};