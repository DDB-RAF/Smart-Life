var userDAO = require('../dao/userDAO.js');

var user = {
	userName: 'zhangfly',
	passWord: 'zhagnfei',
	name: '张飞',
	email: 'zhangfei614@126.com',
	phone: '188'
};

// userDAO.add(user, function (err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('success');
// 	}
// });

// userDAO.findByName('zhangfly', function (err, doc) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(doc._id);
// 		user = doc;
// 	}
// });


// userDAO.findById(user._id, function (err, doc) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(user.userName);
// 	}
// });

// user._id='565c3e96ecf8804c1c575f22';
// user.phone='155';
// userDAO.updateUser(user, function (err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('success');
// 	}
// });

// user._id = '565c4229ce3fc61c1870efa6';
// userDAO.deleteUserById(user._id,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("success");
// 	}
// });




