var express = require('express');
var router = express.Router();

var appointmentDAO = require('../dao/appointmentDAO.js');
var userDAO = require('../dao/userDAO.js');

router.get('/queryBySlotId', function (req, res, next) {
    var id = req.query.slot_id;
    appointmentDAO.query({ slot_id: id }, function (err, docs) {
        if (err) {
            next(err);
        } else {
            res.send(docs);
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