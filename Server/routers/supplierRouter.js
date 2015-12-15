var express = require('express');
var router = express.Router();
var serviceDAO = require('../dao/serviceDAO.js');

router.get('/queryBySupplierId',function(req,res,next){
	var id = req.query.id;
	serviceDAO.queryBySupplierId(id,function(err,docs){
		if(err){
			next(err);
		}else{
			res.send(docs);
		}
	});
});

module.exports = router;
