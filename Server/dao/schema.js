var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;


var classificationSchema = new Schema({
	name:String			//for hospital,bank and others
});

var supplierSchema = new Schema({
	userName:String,
	passWord:String,
	name:String,
	email:String,
	phone:String,
	desc:String,
	classification:classificationSchema,
	services:[Schema.Types.ObjectId]
});

var userSchema = new Schema({
	userName:String,
	passWord:String,
	name:String,
	email:String,
	phone:String,
	total_app:{type:Number,default:0},
	canceled_app:{type:Number,default:0}
});

var serviceSchema = new Schema({
	name:String,
	keyWords:[String],
	total_app:{type:Number,default:0},
	weeks:[Number],			//example:[1,5] means service can be accessed at Mon. Fri.
});
