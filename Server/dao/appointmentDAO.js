var schema = require('./schema.js');
var db = require('./db.js');
var timeTableDAO = require('./timeTableDAO.js');

var AppointmentModel = db.mongoose.model('appointment', schema.appointmentSchema);
var ServiceModel = db.mongoose.model('service', schema.serviceSchema);
var SupplierModel = db.mongoose.model('supplier', schema.supplierSchema);
/**
 * input:
 *    appointment={
 * 		user_id:ObjectId,
 * 		slot_id:ObjectId,
 * 		timeTable_id:ObjectId
 * }
 * callback(err,a)
 */
exports.add = function (appointment, callback) {
    AppointmentModel.findOne({ user_id: appointment.user_id, slot_id: appointment.slot_id }, function (err, doc) {
        if (err) {
            callback(err);
        } else {
            if (doc != null) {
                err = new Error("Exists");
                callback(err);
            } else {
                //call back problem
                var a = new AppointmentModel({
                    user_id: appointment.user_id,
                    slot_id: appointment.slot_id,
                    timeTable_id: appointment.timeTable_id
                });

                timeTableDAO.findSlotById(a.timeTable_id, a.slot_id, function (err, d) {
                    if (err) {
                        callback(err);
                    } else {
                        var slot = d;
                        slot.app_num++;
                        timeTableDAO.updateSlotById(a.timeTable_id, slot, function (err) {
                            if (err) {
                                callback(err);
                            } else {
                                a.save(function (err) {
                                    callback(err, a);
                                });
                            }
                        });
                    }
                });
            }
        }
    });
};

/**
 * input:
 * 		id:ObjectId
 * callback(err,doc)
 */
exports.findById = function (id, callback) {
    AppointmentModel.findOne({ _id: id }, function (err, doc) {
        callback(err, doc);
    });
};

/**
 * input:
 * 		id:ObjectId
 * callback(err)
 */
exports.deleteById = function (id, callback) {
    AppointmentModel.findOne({ _id: id }, function (err, doc) {
        timeTableDAO.findSlotById(doc.timeTable_id, doc.slot_id, function (err, d) {
            var slot = d;
            slot.app_num--;
            timeTableDAO.updateSlotById(doc.timeTale_id, slot, function (err) {
                callback(err);
            });
        });
    });
};

/**
 * input:
 *      id:ObjectId
 * callback(err)
 */
exports.finishById = function (id, callback) {
    AppointmentModel.findOne({ _id: id }, function (err, doc) {
        timeTableDAO.findSlotById(doc.timeTable_id, doc.slot_id, function (err, d) {
            var slot = d;
            slot.finished_num++;
            timeTableDAO.updateSlotById(doc.timeTable_id, slot, function (err) {
                if (err) {
                    callback(err);
                } else {
                    doc.status = 1;
                    doc.save(function (err) {
                        callback(err);
                    });
                }
            });
        });

    })
}
/**
 * input:
 * 	appointment={
 * 		_id:ObjectId,
 * 		comment:string
 * }
 * callback(err)
 */
exports.commentById = function (appointment, callback) {
    AppointmentModel.findOne({ _id: appointment._id }, function (err, doc) {
        if (err) {
            callback(err);
        } else {
            doc.comment = appointment.comment;
            doc.status = 2;
            doc.save(function (err) {
                callback(err);
            });
        }
    });
};

/**
 * input:
 *     id:slot_id
 * output:
 *     callback(err,docs)
 */
exports.queryBySlotId = function (id, callback) {
    AppointmentModel.find({ slot_id: id })
        .populate('user_id', '_id name email phone')
        .exec(function (err, docs) {
            callback(err, docs);
        });
};

/**
 * 
 */
exports.queryByUserId = function (id, callback) {
    AppointmentModel.find({ user_id: id })
        .populate('timeTable_id', 'service_id date tables')
        .exec(function (err, docs) {
            ServiceModel.populate(docs, {
                path: 'timeTable_id.service_id',
                select: 'name total_app supplier_id'
            }, function (err, docs) {
                SupplierModel.populate(docs, {
                    path: 'timeTable_id.service_id.supplier_id',
                    select: 'name phone email'
                }, function (err, docs) {
                    if (err) {
                        callback(err, null);
                    } else {
                        var result = [];
                        for (var i in docs) {
                            var r = {};
                            r['_id'] = docs[i]._id;
                            r['slot'] = docs[i].timeTable_id.tables.id(docs[i].slot_id);
                            r['service'] = docs[i].timeTable_id.service_id;
                            r['supplier'] = docs[i].timeTable_id.service_id.supplier_id;
                            // delete r.service.supplier_id;
                            result.push(r);
                        }
                            callback(err,result);
                    }
                });
            });
        });
}