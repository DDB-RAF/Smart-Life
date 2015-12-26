var express = require('express');
var router = express.Router();

var appointmentDAO = require('../dao/appointmentDAO.js');
var userDAO = require('../dao/userDAO.js');

router.get('/queryBySlotId', function (req, res, next) {
    var id = req.query.slot_id;
    appointmentDAO.queryBySlotId(id, function (err, docs) {
        if (err) {
            next(err);
        } else {
            res.send(docs);
        }
    });
});

router.get('/queryByUserId',function(req,res,next){
   var id = req.query.id;
   appointmentDAO.queryByUserId(id,function(err,docs){
       if(err){
           next(err);
       }else{
           res.send(docs);
       }
   });
});
router.get('/cancelById',function(req,res,next){
    var id = req.query.id;
    appointmentDAO.deleteById(id,function(err){
        if(err){
            next(err);
        }else{
            res.send("Cancel successfully!");
        }
    });
});

router.get('/finishById', function (req, res, next) {
    var id = req.query.id;
    appointmentDAO.finishById(id, function (err) {
        if (err) {
            next(err);
        } else {
            res.send("Finished!");
        }
    });
});

router.post('/comment',function(req,res,next){
    var app = req.body.app;
    appointmentDAO.commentById(app,function(err){
        if(err){
            next(err);
        }else{
            res.send("Comment successfully!");
        }
    });
});

router.post('/add', function (req, res, next) {
    var app = req.body.app;
    appointmentDAO.add(app, function (err, doc) {
        if (err) {
            if (err.message == "Exists") {
                res.send(err.message);
            } else {
                next(err);
            }
        } else {
            res.send('Success!')
        }
    })
});
module.exports = router;