var supplierDAO = require('../dao/supplierDAO.js');
var supplier = {
	userName: 'bankofchina',
	passWord: '123',
	name: "bank of china",
  	email: "zhangfei614@126.com",
  	phone: "155",
  	desc: "zhangfei",
  	classification:"bank"
};

// supplierDAO.add(supplier,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('success');
// 	}
// });

supplier._id = '566e2d9ad07c3c981e02f1ca';
// supplierDAO.findById(supplier._id,function(err,doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(doc.email);
// 	}
// });

supplier.phone='199';
supplierDAO.updateSupplier(supplier,function(err){
	if(err){
		console.log(err);
	}else{
		console.log('update success');
	}
});

// supplierDAO.deleteById(supplier._id,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('delete success');
// 	}
// });

