var express = require('express');
var router = express.Router();
var userDAO = require('../dao/userDAO.js');


router.get('/queryById', function (req, res, next) {
    userDAO.findById(req.query.id, function (err, doc) {
        if (err) {
            next(err);
        } else {
            res.send(doc);
        }
    });
});

router.post('/update', function (req, res, next) {
    var u = req.body.user;
    userDAO.updateUser(u, function (err) {
        if (err) {
            next(err);
        } else {
            res.send('Update successfully!');
        }
    });
});

router.post('/login', function (req, res, next) {
    var u = req.body.user;
    userDAO.findByName(u.userName, function (err, doc) {
        if (err) {
            next(err);
        } else {
            if (doc == null) {
                res.send({
                    message: "User not existing",
                    user: null
                });
            } else {
                if (doc.passWord == u.passWord) {
                    res.send({
                        message: 'success',
                        user: doc
                    });
                } else {
                    res.send({
                        message: 'Wrong passwrod!',
                        user: null
                    });
                }
            }
        }
    });
});

router.post('/add',function(req,res,next){
    var u = req.body.user;
    userDAO.add(u,function(err,doc){
        if(err){
            if(err.message =='User Exists'){
                res.send({
                    message:err.message,
                    user:null
                });
            }else{
                next(err);
            }
        }else{
            res.send({
                message:'success',
                user:doc
            });
        }
    });
})
module.exports = router;