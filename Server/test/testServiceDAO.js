var serviceDAO = require('../dao/serviceDAO.js');
var service ={
	// supplier_id:'566e2d9ad07c3c981e02f1ca',
	// name:'save money',
	// weeks:[1,2,3,4,5],
	// begin_time:'08:00',
	// end_time:'17:00',
	// slot_length:0.5,
	// max_num:5,
	// desc:'save money'
};

// serviceDAO.add(service,function(err,doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('success');
// 	}
// });
service._id = '5680e22ea526ab280cfe83a5';
serviceDAO.findById(service._id,function(err,doc){
	console.log(doc.desc);
});
// serviceDAO.deleteById(service._id,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('delete success');
// 	}
// })

// serviceDAO.queryBySupplierId(service.supplier_id,function(err,docs){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(docs);
// 	}
// });


