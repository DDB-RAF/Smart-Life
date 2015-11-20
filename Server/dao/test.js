var userDAO = require('./userDAO.js');

var user={
	userName:'zhangfly',
 	passWord:'zhagnfei',
 	name:'张飞',
  	email:'zhangfei614@126.com',
	phone:'188'
};

userDAO.add(user,function(err){
	if(err){
		console.log(err);   
	}else{
		console.log('success');
	}
});

userDAO.findByName('zhangfly',function(err,doc){
	if(err){
		console.log(err);
	}else{
		console.log('zhangfei');
		console.log(doc._id);
		user = doc;
	}
});   

userDAO.findById(user._id,function(err,doc){
	if(err){
		console.log(err);
	}else{
		console.log(user.userName);
	}
});

userDAO.updateUser(user,function(err){
	if(err){
		console.log(err);
	}else{
		console.log('success');
	}
});


