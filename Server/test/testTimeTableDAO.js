var timeTableDAO =require('../dao/timeTableDAO.js');

var timeTable = {
	service_id:'56619eb0b149f37822c1095f',
	date:new Date()
};

// timeTableDAO.add(timeTable,function(err,doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('success');
// 	}
// });

var timeTable_id = '566ee3b8b46fe7781a0f77f2';
var slot_id = '566ee3b8b46fe7781a0f7804';
// timeTableDAO.findById(timeTable_id,function(err,doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(doc);
// 	}
// });

timeTableDAO.findSlotById(timeTable_id,slot_id,function(err,doc){
	if(err){
		console.log(err);
	}else{
		console.log(doc);
	}
});
// var slot = {
// 	_id:slot_id,
// 	app_num:10,
// 	finished_num:5
// };
// timeTableDAO.updateSlotById(timeTable_id,slot,function(err){
// 	console.log(err);
// });

// timeTableDAO.findByServiceIdAndDate("566ec4ecf13dad302645a073",new Date('2015-12-16'),function(err,doc){
// 	console.log(doc.date);
// });

