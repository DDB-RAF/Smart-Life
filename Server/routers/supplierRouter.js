var express = require('express');
var router = express.Router();
var supplierDAO = require('../dao/supplierDAO.js');

router.post('/update',function(req,res,next){
	var s = req.body.supplier;
	supplierDAO.updateSupplier(s,function(err){
		if(err){
			next(err);
		}else{
			res.send('Update success!');		
		}
	})
});

router.get('/queryById',function(req,res,next){
	supplierDAO.findById(req.query.id,function(err,doc){
		if(err){
			next(err)
		}else{
			res.send(doc);
		}
	});
});
module.exports = router;
