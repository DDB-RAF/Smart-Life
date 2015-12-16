var express = require('express');
var router = express.Router();
var serviceDAO = require('../dao/serviceDAO.js');
var timeTableDAO = require('../dao/timeTableDAO.js');


router.get('/queryBySupplierId', function (req, res, next) {
	var id = req.query.id;
	serviceDAO.queryBySupplierId(id, function (err, docs) {
		if (err) {
			next(err);
		} else {
			res.send(docs);
		}
	});
});

router.get('/queryById', function (req, res, next) {
	var id = req.query.id;
	var date = new Date(req.query.date);
	var timeTable = [];
	serviceDAO.findById(id, function (err, doc) {
		if (err) {
			next(err);
		} else {
			var RECENT_DAYS = 7;
			var dayList = [];
			dayList.push(new Date(date));
			while (dayList.length < RECENT_DAYS) {
				var d = new Date(date.setDate(date.getDate() + 1));
				if (doc.weeks.indexOf(d.getDay()) >= 0) {
					dayList.push(d);
				}
			}

			for (i in dayList) {
				timeTableDAO.findByServiceIdAndDate(doc._id, dayList[i], function (err, t, tdate) {
					if (err) {
						next(err);
					} else {
						if (t != null) {
							timeTable.push(t);
							RECENT_DAYS--;
						} else {
							var t = {
								service_id: doc._id,
								date: tdate
							};
							timeTableDAO.add(t, function (err, tadd) {
								if (err) {
									next(err);
								} else {
									timeTable.push(tadd);
									RECENT_DAYS--;
								}
							});
						}
						if (RECENT_DAYS <= 0) {
							var result = {
								service:doc,
								timeTable:timeTable
							};
							res.send(result);
						}
					}
				});
			}
		}
	});
});


module.exports = router;