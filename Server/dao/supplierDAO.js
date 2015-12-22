var schema = require('./schema.js');
var db = require('./db.js');

var SupplierModel = db.mongoose.model('supplier', schema.supplierSchema);

/**
 * input:
 * supplier:{
 * 		userName:String,
 * 		passWord:String,
 * 		name:String,
 * 		email:String,
 * 		phone:String,
 * 		desc:String,
 * 		classification:String
 * }
 * callback(err,doc):
 * 		err == null : success
 */
exports.add = function (supplier, callback) {
    SupplierModel.findOne({ userName: supplier.userName }, function (err, doc) {
        if (err) {
            callback(err);
        } else {
            if (doc != null) {
                err = new Error('Supplier Exists')
                callback(err);
            } else {
                var s = new SupplierModel({
                    userName: supplier.userName,
                    passWord: supplier.passWord,
                    name: supplier.name,
                    email: supplier.email,
                    phone: supplier.phone,
                    desc: supplier.desc,
                    classification: supplier.classification
                });
                s.save(function (err) {
                    callback(err, s);
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
    SupplierModel.findOne({ _id: id }, function (err, doc) {
        callback(err, doc);
    });
};

/**
 * input:
 * 		id:ObjectId
 * callback(err)
 */
exports.deleteById = function (id, callback) {
    SupplierModel.findByIdAndRemove(id, function (err) {
        callback(err);
    });
}

/**
 * input:
 * supplier:{
 * 		_id:ObjectId,
 * 		userName:String,
 * 		passWord:String,
 * 		name:String,
 * 		email:String,
 * 		phone:String,
 * 		desc:String
 * }
 * callback(err)
 */
exports.updateSupplier = function (supplier, callback) {
    SupplierModel.findOne({ _id: supplier._id }, function (err, doc) {
        if (err) {
            callback(err);
        } else {
            if (supplier.passWord != undefined)
                doc.passWord = supplier.passWord;
            doc.name = supplier.name;
            doc.email = supplier.email;
            doc.phone = supplier.phone;
            doc.desc = supplier.desc;
            doc.save(function (err) {
                callback(err);
            });
        }
    });
};

/**
 * input:
 * output:
 *      callback(err,res)
 */
exports.groupByClassificaton = function (callback) {
    SupplierModel.aggregate([
        {
            $group: 
            {   
                _id : "$classification", 
                suppliers:
                    { 
                        $push: 
                            { 
                                _id: "$_id",
                                userName: "$userName",
                                name: "$name",
                                email:"$email",
                                phone:"$phone",
                                desc:"$desc"
                            } 
                     }
            } 
       }],function(err,res){
           callback(err,res);
       });
}