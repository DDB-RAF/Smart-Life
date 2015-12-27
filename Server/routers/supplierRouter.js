var express = require('express');
var router = express.Router();
var supplierDAO = require('../dao/supplierDAO.js');

router.post('/update', function (req, res, next) {
    var s = req.body.supplier;
    supplierDAO.updateSupplier(s, function (err) {
        if (err) {
            next(err);
        } else {
            res.send('Update success!');
        }
    })
});

router.get('/queryById', function (req, res, next) {
    supplierDAO.findById(req.query.id, function (err, doc) {
        if (err) {
            next(err);
        } else {
            console.log(doc);
            res.send(doc);
        }
    });
});

router.get('/all', function (req, res, next) {
    supplierDAO.groupByClassificaton(function (err, docs) {
        if (err) {
            next(err);
        } else {
            res.send(docs);
        }
    });
});

router.post('/login', function (req, res, next) {
    var s = req.body.user;
    supplierDAO.findByName(s.userName, function (err, doc) {
        if (err) {
            next(err);
        } else {
            if (doc == null) {
                res.send({
                    message: "Supplier not existing",
                    user: null
                });
            } else {
                if (doc.passWord == s.passWord) {
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

module.exports = router;
