var express = require('express');
var router = express.Router();

router.get('/abc',function(req,res){
	res.send('abf');
});

module.exports = router;
