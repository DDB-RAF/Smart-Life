var updateSuppler = function () {

};


var selectService = function (event) {
	var service_id = $(event.target).attr('_id');
	var date = new Date().toJSON().slice(0, 10);
	$.ajax({
		type: 'GET',
		url: '/service/queryById',
		data: {
			id: service_id,
			date: date
		},
		success: function (data) {
			console.log(data);
			var service = data.service;
			var timeTable = data.timeTable;
			$('#service_name').attr("value", service.name).nextAll('label').addClass('active');
			$('#total_app').attr("value", service.total_app).nextAll('label').addClass('active');
			$('#begin_time').attr("value",service.begin_time).nextAll('label').addClass('active');
			$('#end_time').attr("value",service.end_time).nextAll('label').addClass('active');
			$('#slot_length').attr("value",service.slot_length).nextAll('label').addClass('active');
			$('#max_num').attr("value",service.max_num).nextAll('label').addClass('active');
			$('#myinfoForm').hide();
			$('#serviceForm').show();
			
			//fill the timeTable head
			$('#timeTable thead tr').empty();
			$('<th/>',{html:'slots'}).appendTo('#timeTable thead tr');
			for(i=0;i<timeTable.length;i++){
				$('<th/>',{
					html:timeTable[i].date.slice(5,10)
				}).appendTo('#timeTable thead tr');
			}
			
			//fill the timeTable
			$('#timeTable tbody').empty();
			for(i=0;i<timeTable[0].tables.length;i++){
				var tr = $('<tr/>');
				var btime = timeTable[0].tables[i].begin_time.slice(11,16);
				var etime = timeTable[0].tables[i].end_time.slice(11,16)
				$('<td/>',{
					html:btime+"~"+etime
				}).appendTo(tr);
				for(j=0;j<timeTable.length;j++){
					$('<td/>',{
						html:'<b>A:'+timeTable[j].tables[i].app_num+'</b><br/>'
						+'<b>F:'+timeTable[j].tables[i].finished_num+'</b>'
					}).appendTo(tr);
				}
				tr.appendTo('#timeTable tbody');
			}
		}
	});


};
$(document).ready(function () {
    $('select').material_select();
	
	//get supplier in session,if can't get jump to login in.
	var supplier = $.session.get('suppler');
	
	//for test,to use a exsiting supplier
	var supplier = {
		"_id": "566ec4ecf13dad302645a06f",
		"userName": "boc1",
		"passWord": "boc",
		"name": "bank of china",
		"email": "zhangfei614@126.com",
		"phone": "155",
		"desc": "zhangfei",
		"classification": "bank",
		"__v": 0
	}

	if (supplier == null || supplier == undefined) {
		window.location.href = './login.html';
	}
	
	//fill the form
	$("#userName").attr("value", supplier.userName);
	$("#name").attr("value", supplier.name);
	$("#email").attr("value", supplier.email);
	$("#phone").attr("value", supplier.phone);
	$("#classification").prevAll("input").attr("value", supplier.classification);
	$("#textarea").val(supplier.desc);

	//load the services
	$.ajax({
		type: 'GET',
		data: {
			id: supplier._id
		},
		url: '/service/queryBySupplierId',
		success: function (data) {
			// console.log(data);
			for (s in data) {
				$('<li/>', {
					class: 'collection-item',
					html: data[s].name,
					_id: data[s]._id,
					style: "cursor:pointer"
				}).click(selectService).appendTo("#serviceList");
			}
		}
	});

});
