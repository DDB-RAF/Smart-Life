
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.supplierSchema = new Schema({
	userName:String,
	passWord:String,
	name:String,
	email:String,
	phone:String,
	desc:String,
	classification:{
		name:String
	}
	// services:[Schema.Types.ObjectId]
});

exports.userSchema = new Schema({
	userName:String,
	passWord:String,
	name:String,
	email:String,
	phone:String,
	total_app:{type:Number,default:0},
	canceled_app:{type:Number,default:0}
});

exports.serviceSchema = new Schema({
	supplier_id:Schema.Types.ObjectId,
	name:String,
	keyWords:[String],
	total_app:{type:Number,default:0},
	weeks:[Number],			//example:[1,5] means service can be accessed at Mon. Fri.
	begin_time:String,		//example:'8:00' means service begin at 8:00  every day
	end_time:String,		//example:'17:00' means service end at 17:00 every day
	slot_length:String,	//example:'1',a whole day spilts by 1h : 8:00~9:00,9:00~10:00
	max_num:Number,	//example:10,the max appointments can be made in one period
	desc:String
});

var slotSchema = new Schema({
	begin_time:Schema.Types.Date,
	end_time:Schema.Types.Date,
	app_num:{type:Number,default:0},
	finished_num:{type:Number,default:0}
});

exports.timeTableSchema = new Schema({
	service_id:Schema.Types.ObjectId,
	date:Schema.Types.Date,		//format:yyyy-MM-dd 00:00
	tables:[slotSchema]
});

exports.appointmentSchema = new Schema({
	user_id:Schema.Types.ObjectId,
	slotSchema_id:Schema.Types.ObjectId,
	timeTable_id:Schema.Types.ObjectId,
	desc:String,
	comment:String
});


