var schema = require('./schema.js');
var db = require('./db.js');


var TimeTableModel = db.mongoose.model('timeTable',schema.timeTableSchema);
var serviceDAO = require('./serviceDAO.js');


/**
 * input:
 * 	timeTable{
 * 		service_id:	Schema.Types.ObjectId,
 * 		date:Schema.Types.Date
 * }
 * callback(err)
 */
exports.add = function(timeTable,callback){
	serviceDAO.findById(timeTable.service_id,function(err,doc){
		if(err){
			callback(err);
		}else{
			var slots=[];
			var btime = new Date(timeTable.date.toJSON().slice(0,10)+"T"+doc.begin_time);
			var etime = new Date(timeTable.date.toJSON().slice(0,10)+"T"+doc.end_time);
			while(btime<etime){
				var t1 = new Date(btime.getTime());
				btime.setMinutes(btime.getMinutes()+doc.slot_length*60);		
				var t2 = new Date(btime.getTime());		
				var slot = {
					begin_time:t1,
					end_time:t2
				};
				slots.push(slot);
			};
			var tTable = new TimeTableModel({
				service_id:timeTable.service_id,
				date:timeTable.date,
				tables:slots
			});
			tTable.save(function(err){
				callback(err);
			});
		}
	});
};

/**
 * input:
 * 		id:ObjectId
 * callback(err,doc)
 */
exports.findById = function(id,callback){
	TimeTableModel.findOne({_id:id},function(err,doc){
		callback(err,doc);
	});
};

/**
 * input:
 *     id:ObjectId
 * callback(err)
 */
exports.deleteById = function(id,callback){
	TimeTableModel.findByIdAndRemove(id,function(err){
		callback(err);
	});
};

