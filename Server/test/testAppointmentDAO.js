var appointmentDAO = require('../dao/appointmentDAO.js');

var appointment = {
	user_id:'566ee3b8b46fe7781a0f77e7',
	timeTable_id:'5676676d34f4439c082c3200',
	slot_id:'5676676d34f4439c082c3205'
};

// appointmentDAO.add(appointment,function(err,doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('success');
// 	}
// });

// appointment._id = '56775620dcc02ff8200a1610';
// appointmentDAO.findById(appointment._id,function(err,doc){
// 	console.log(doc.user_id);
// });

// appointmentDAO.finishById(appointment._id,function(err){
//     console.log('success');
// })
// appointment.status = 1;
// appointment.comment = 'Not bad';
// appointmentDAO.updateById(appointment,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('success');
// 	}
// });

appointmentDAO.queryByUserId(appointment.user_id,function(err,docs){
    if(err){
        console.log(err);
    }else{
        console.log(docs);
    }
})
