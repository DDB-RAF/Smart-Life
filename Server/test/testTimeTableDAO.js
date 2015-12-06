var timeTableDAO =require('../dao/timeTableDAO.js');

var timeTable = {
	service_id:'56619eb0b149f37822c1095f',
	date:new Date()
};

// timeTableDAO.add(timeTable,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('success');
// 	}
// });

var timeTable_id = '56624d460579a198209374f7';
var slot_id = '56624d460579a19820937509';
// timeTableDAO.findById(timeTable_id,function(err,doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(doc);
// 	}
// });

// timeTableDAO.findSlotById(timeTable_id,slot_id,function(err,doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(doc);
// 	}
// });
var slot = {
	_id:slot_id,
	app_num:10,
	finished_num:5
};
timeTableDAO.updateSlotById(timeTable_id,slot,function(err){
	console.log(err);
});

