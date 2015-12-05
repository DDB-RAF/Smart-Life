var timeTableDAO =require('../dao/timeTableDAO.js');

var timeTable = {
	service_id:'56619eb0b149f37822c1095f',
	date:new Date()
};

timeTableDAO.add(timeTable,function(err){
	if(err){
		console.log(err);
	}else{
		console.log('success');
	}
});
