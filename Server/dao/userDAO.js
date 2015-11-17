var schema = require('./schema.js');
var db = require('./db.js');

var UserModel = db.mongoose.model('user',schema.userSchema);

/**
 * input:
 * 	user:{
 * 		userName:String,
 * 		passWord:String,
 * 		name:String,
 * 		email:String,
 * 		phone:String
 * 	}
 * callback(err):
 * 		err==null:success
 * 		err!=null:UserExits
 */
exports.add = function(user,callback){
	exports.findByName(user.userName,function(err,doc){
		if(err){
			callback(err);
		}else{
			if(doc!=null){
				err = new Error('UserExits');
				callback(err);	
			}else{
				var u = new UserModel({
					userName:user.userName,
					passWord:user.passWord,
					name:user.name,
					email:user.email,
					phone:user.phone
				});
				u.save(function(err){
					callback(err);
				});
			}	
		}
	});
};

/**
 * input:
 * 		id:ObjectId
 * callback(err,docs):
 * 		err==null:success
 */
exports.findById = function(id,callback){
	UserModel.find({_id:id},function(err,doc){
		if(err!=null){
			callback(err,null);
		}else{
			callback(null,doc);
		}
	});
}

/**
 * input:
 * 		userName:string
 * callback(err,docs):
 * 		err==null:success
 */

exports.findByName = function(userName,callback){
	UserModel.findOne({userName:userName},function(err,doc){
		if(err!=null){
			callback(err,null);
		}else{
			callback(null,doc);
		}
	});
}