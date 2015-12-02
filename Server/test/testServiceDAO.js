var serviceDAO = require('../dao/serviceDAO.js');
var service ={
	supplier_id:'565ef2317232a0801d91fae2',
	name:'save money',
	keyWords:['bank','open card'],
	weeks:[1,2,3,4,5],
	begin_time:'8:00',
	end_time:'17:00',
	slot_length:'1h',
	max_num:5,
	desc:'save money'
};

// serviceDAO.add(service,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('success');
// 	}
// });
// service._id = '565f0ecbdf7eb8ac15ea667e';
// serviceDAO.findById(service._id,function(err,doc){
// 	console.log(doc.desc);
// });
// serviceDAO.deleteById(service._id,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('delete success');
// 	}
// })

serviceDAO.queryBySupplierId(service.supplier_id,function(err,docs){
	if(err){
		console.log(err);
	}else{
		console.log(docs);
	}
});


