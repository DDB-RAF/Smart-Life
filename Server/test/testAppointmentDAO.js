var appointmentDAO = require('../dao/appointmentDAO.js');

var appointment = {
	user_id:'564adf45405ea0742ac1f143',
	timeTable_id:'56624d460579a198209374f7',
	slot_id:'56624d460579a19820937509'
};

// appointmentDAO.add(appointment,function(err,doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('success');
// 	}
// });

appointment._id = '5665969fbc7f3bd023727e0f';
// appointmentDAO.findById(appointment._id,function(err,doc){
// 	console.log(doc.user_id);
// });

appointment.status = 1;
appointment.comment = 'Not bad';
appointmentDAO.updateById(appointment,function(err){
	if(err){
		console.log(err);
	}else{
		console.log('success');
	}
});
