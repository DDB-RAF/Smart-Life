var schema = require('./schema.js');
var db = require('./db.js');

var UserModel = db.mongoose.model('user', schema.userSchema);

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
exports.add = function (user, callback) {
	UserModel.findOne({ userName: user.userName }, function (err, doc) {
		if (err) {
			callback(err);
		} else {
			if (doc != null) {
				err = new Error('User Exists');
				callback(err);
			} else {
				var u = new UserModel({
					userName: user.userName,
					passWord: user.passWord,
					name: user.name,
					email: user.email,
					phone: user.phone
				});
				u.save(function (err) {
					callback(err);
				});
			}
		}
	});
};

/**
 * input:
 * 		id:ObjectId
 * callback(err,doc):
 * 		err==null:success
 */
exports.findById = function (id, callback) {
	UserModel.findOne({ _id: id }, function (err, doc) {
		callback(err, doc);
	});
};

/**
 * input:
 * 		userName:string
 * callback(err,docs):
 * 		err==null:success
 */

exports.findByName = function (userName, callback) {
	UserModel.findOne({ userName: userName }, function (err, doc) {
		callback(err, doc);
	});
};

/**
 * input:
 * 		user:{
 * 			_id:ObjectId,
 * 			passWord:String,
 * 			name:String,
 * 			email:String,
 * 			phone:String
 *		 }	
 * callback(err)
 * 		err==null:success
 */
exports.updateUser = function (user, callback) {
	UserModel.findOne({ _id: user._id }, function (err, doc) {
		if (err) {
			callback(err);
		} else {
			doc.passWord = user.passWord;
			doc.name = user.name;
			doc.email = user.email;
			doc.phone = user.phone;
			doc.save(function (err) {
				callback(err);
			});
		}
	});
};


/**
 * input : 
 * 		_id : id
 * callback(err)
 * 		err==null : success
 */
exports.deleteUserById = function(id,callback){
	UserModel.findByIdAndRemove(id,function(err){
		callback(err);
	});	
}