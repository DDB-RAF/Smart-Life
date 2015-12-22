var userDAO = require('../dao/userDAO.js');
var supplierDAO = require('../dao/supplierDAO.js');
var serviceDAO = require('../dao/serviceDAO.js');
var timeTableDAO =require('../dao/timeTableDAO.js');




for (var i = 0; i < 3; i++) {
	// var user = {
	// 	userName: 'zhangfei' + i,
	// 	passWord: 'zhagnfei',
	// 	name: 'Fly zhang',
	// 	email: 'zhangfei614@126.com',
	// 	phone: '188'
	// };
	// userDAO.add(user, function (err) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log("add user success");
	// 	}
	// });

	var supplier = {
		userName: 'school' + i,
		passWord: 'school',
		name: "school ",
		email: "zhangfei614@126.com",
		phone: "155",
		desc: "school",
		classification: "school"
	};

	supplierDAO.add(supplier, function (err, doc) {
		if (err) {
			console.log(err);
		} else {
			console.log('add supplier success');
			for (var i = 0; i < 2; i++) {
				var service = {
					supplier_id: doc._id,
					name: 'school service' + i,
					weeks: [1, 2, 3, 4, 5],
					begin_time: '08:00',
					end_time: '17:00',
					slot_length: 0.5,
					max_num: 5,
					desc: 'school service'
				};
				serviceDAO.add(service, function (err, d) {
					if (err) {
						console.log(err);
					} else {
						console.log("add service in " + doc.userName)
						for (var i = 0; i < 5; i++) {
							var t = new Date();
							t.setDate(t.getDate()+i);
							var timeTable = {
								service_id: d._id,
								date:t
							};
							timeTableDAO.add(timeTable,function(err,t){
								if(err){
									console.log(err);
								}else{
									console.log("add timetabe in "+d.name);
								}
							});
						}
					}
				});
			};
		}
	});
}