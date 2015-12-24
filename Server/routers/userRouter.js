var express = require('express');
var router = express.Router();
var userDAO = require('../dao/userDAO.js');


router.get('/queryById',function(req,res,next){
    userDAO.findById(req.query.id,function(err,doc){
        if(err){
            next(err);
        }else{
            res.send(doc);
        }
    });
});

router.post('/update',function(req,res,next){
   var u = req.body.user;
   userDAO.updateUser(u,function(err){
       if(err){
           next(err);
       }else{
           res.send('Update successfully!');
       }
   });
});

module.exports = router;