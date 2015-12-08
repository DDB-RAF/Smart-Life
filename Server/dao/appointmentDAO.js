var schema = require('./schema.js');
var db = require('./db.js');

var AppointmentModel = db.mongoose.model('appointment',schema.appointmentSchema);

/**
 * input:
 *    appointment={
 * 		user_id:ObjectId,
 * 		slot_id:ObjectId,
 * 		timeTable_id:ObjectId
 * }
 * callback(err)
 */
exports.add = function(appointment,callback){
	AppointmentModel.findOne({user_id:appointment.user_id,slot_id:appointment.slot_id},function(err,doc){
		if(err){
			callback(err);
		}else{
			if(doc != null){
				err = new Error("Have made appointment");
				callback(err);
			}else{
				var a = new AppointmentModel({
					user_id:appointment.user_id,
					slot_id:appointment.slot_id,
					timeTable_id:appointment.timeTable_id
				});
				a.save(function(err){
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
	AppointmentModel.findOne({_id:id},function(err,doc){
		callback(err,doc);
	});
};

/**
 * input:
 * 		id:ObjectId
 * callback(err)
 */
exports.deleteById = function(id,callback){
	AppointmentModel.findByIdAndRemove(id,function(err){
		callback(err);
	});
};

/**
 * input:
 * 	appointment={
 * 		_id:ObjectId,
 * 		status:Number,
 * 		comment:string
 * }
 * callback(err)
 */
exports.updateById = function(appointment,callback){
	AppointmentModel.findOne({_id:appointment._id},function(err,doc){
		if(err){
			callback(err);
		}else{
			doc.status = appointment.status;
			doc.comment = appointment.comment;
			doc.save(function(err){
				callback(err);
			});
		}
	});
};