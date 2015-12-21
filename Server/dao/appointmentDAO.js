var schema = require('./schema.js');
var db = require('./db.js');
var timeTableDAO = require('./timeTableDAO.js');

var AppointmentModel = db.mongoose.model('appointment', schema.appointmentSchema);

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
                err = new Error("Have made appointment");
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
                callback(err);
            });
            doc.status = 1;
            doc.save(function (err) {
                callback(err);
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
 *  {
 *     slot_id:ObjectId
 *      ...
 *  }
 * output:
 *     callback(err,docs)
 */
exports.query = function(q,callback){
    AppointmentModel.find(q)
    .populate('user_id','_id name email phone')
    .exec(function(err,docs){
        callback(err,docs);
    });
};