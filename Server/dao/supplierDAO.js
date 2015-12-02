var schema = require('./schema.js');
var db = require('./db.js');

var SupplierModel = db.mongoose.model('supplier',schema.supplierSchema);

/**
 * input:
 * supplier:{
 * 		userName:String,
 * 		passWord:String,
 * 		name:String,
 * 		email:String,
 * 		phone:String,
 * 		desc:String,
 * 		classification:{
 * 			name:String
 * 		}
 * }
 * callback(err):
 * 		err == null : success
 */
exports.add = function(supplier,callback){
	SupplierModel.findOne({userName:supplier.userName},function(err,doc){
		if(err){
			callback(err);
		}else{
			if(doc != null){
				err = new Error('Supplier Exists')
				callback(err);
			}else{
				var s = new SupplierModel({
					userName:supplier.userName,
					password:supplier.passWord,
					name:supplier.name,
					email:supplier.email,
					phone:supplier.phone,
					desc:supplier.desc,
					classification:{
						name:supplier.classification.name
					},
					services:[]
				});
				s.save(function(err){
					callback(err);
				});
			}
		}
	});
};

/**
 * input:
 * 		id:ObjectId
 * callback(err,doc)
 */
exports.findById = function(id,callback){
	SupplierModel.findOne({_id:id},function(err,doc){
		callback(err,doc);
	});
};

/**
 * input:
 * 		id:ObjectId
 * callback(err)
 */
exports.deleteById = function(id,callback){
	SupplierModel.findByIdAndRemove(id,function(err){
		callback(err);
	});
}

/**
 * input:
 * supplier:{
 * 		_id:ObjectId,
 * 		userName:String,
 * 		passWord:String,
 * 		name:String,
 * 		email:String,
 * 		phone:String,
 * 		desc:String
 * }
 * callback(err)
 */
exports.updateSupplier = function(supplier,callback){
	SupplierModel.findOne({_id:supplier._id},function(err,doc){
		if(err){
			callback(err);
		}else{
			doc.passWord = supplier.passWord;
			doc.name = supplier.name;
			doc.email = supplier.email;
			doc.phone = supplier.phone;
			doc.desc = supplier.desc;
			doc.save(function(err){
				callback(err);
			});
		}
	});
};


