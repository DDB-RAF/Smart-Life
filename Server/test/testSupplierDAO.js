var supplierDAO = require('../dao/supplierDAO.js');
var supplier = {
	userName: 'bankofchina',
	passWord: '123',
	name: "bank of china",
  	email: "zhangfei614@126.com",
  	phone: "155",
  	desc: "zhangfei",
  	classification: {
		name: "bank"
  	}
};

supplierDAO.add(supplier,function(err){
	if(err){
		console.log(err);
	}else{
		console.log('success');
	}
});

// supplier._id = '565ef0325422bae41f7e60f9';
// supplierDAO.findById(supplier._id,function(err,doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(doc.email);
// 	}
// });

// supplier.phone='199';
// supplierDAO.updateSupplier(supplier,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('update success');
// 	}
// });

// supplierDAO.deleteById(supplier._id,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('delete success');
// 	}
// });

