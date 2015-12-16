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
 * callback(err,doc)
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
				callback(err,tTable);
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

/**
 * input:
 * 	timeTable_id:ObjectId
 * 	slot_id:ObjectId
 * callback(err,doc)
 */	
exports.findSlotById = function(timeTable_id,slot_id,callback){
	TimeTableModel.findOne({_id:timeTable_id},function(err,doc){
		if(err){
			callback(err);
		}else{
			var slot = doc.tables.id(slot_id);
			callback(err,slot);
		}
	});
};

/**
 * input:
 * timeTable_id:ObjectId,
 * slot = {
 * 		_id:ObjectId,
 * 		app_num:Number,
 * 		finished_num:Number
 * }
 * callback(err)
 */
exports.updateSlotById = function(timeTable_id,slot,callback){
	TimeTableModel.findOne({_id:timeTable_id},function(err,doc){
		if(err){
			callback(err);
		}else{
			var s = doc.tables.id(slot._id);
			s.app_num = slot.app_num;
			s.finished_num = slot.finished_num;
			doc.save(function(err){
				callback(err);
			});
		}
	});
};

/**
 * input:
 * 		id:service_id,
 * 		d:Date
 * callback(err,doc)
 */

exports.findByServiceIdAndDate = function(id,d,callback){
	var b = new Date(d);
	d.setDate(d.getDate()+1);
	TimeTableModel.findOne({service_id:id,date:{$gte:b,$lt:d}},function(err,doc){
		callback(err,doc,b);
	})
};


