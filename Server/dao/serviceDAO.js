var schema = require('./schema.js');
var db = require('./db.js');

var ServiceModel = db.mongoose.model('service',schema.serviceSchema);

/**
 * input:
 * service:{
 * 		supplier_id:Schema.Types.ObjectId,
 *		name:String,
 *		keyWords:[String],
 *		weeks:[Number],			//example:[1,5] means service can be accessed at Mon. Fri.
 *		begin_time:String,		//example:'8:00' means service begin at 8:00  every day
 *		end_time:String,		//example:'17:00' means service end at 17:00 every day
 *		slot_length:String,	//example:'1',a whole day spilts by 1h : 8:00~9:00,9:00~10:00
 *		max_num:{type:Number,default:5},	//example:10,the max appointments can be made in one period
 *		desc:String
 * }
 * 
 */
exports.add = function(service,callback){
	var s = new ServiceModel({
		supplier_id:service.supplier_id,
		name:service.name,
		keyWords:service.keyWords,
		weeks:service.weeks,
		begin_time:service.begin_time,
		end_time:service.end_time,
		slot_length:service.slot_length,
		max_num:service.max_num,
		desc:service.desc
	});
	s.save(function(err){
		callback(err);
	});
};

/**
 * input:
 *    id:ObjetId
 * callback(err,doc)
 */
exports.findById = function(id,callback){
	ServiceModel.findOne({_id:id},function(err,doc){
		callback(err,doc);
	});
};

/**
 * input:
 *    id:ObjetId
 * callback(err)
 */ 
exports.deleteById = function(id,callback){
	ServiceModel.findByIdAndRemove(id,function(err){
		callback(err);
	});	
};

/**
 * input:
 * 		id:supplier.ObjectId
 * callback(err,docs)
 */
exports.queryBySupplierId = function(id,callback){
	ServiceModel.find({supplier_id:id},function(err,docs){
		callback(err,docs);
	});
};






