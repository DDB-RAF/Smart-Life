var updateSuppler = function(){
		
};

var selectService = function(event){
	var service_id = $(event.target).attr('_id');
	var date = new Date().toJSON().slice(0,10);
	$.ajax({
		type:'GET',
		url:'/service/queryById',
		data:{
			id:service_id,
			date:date
		},
		success:function(data){
			console.log(data);
		}
	});
	
	$("#myinfoForm").hide();
	
};
$(document).ready(function () {
    $('select').material_select();
	
	//get supplier in session,if can't get jump to login in.
	var supplier = $.session.get('suppler');
	
	//for test,to use a exsiting supplier
	var supplier = {
		"_id": "566ee3b8b46fe7781a0f77e6",
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
				$('<li/>',{
					class:'collection-item',
					html:data[s].name,
					_id:data[s]._id,
					style:"cursor:pointer"
				}).click(selectService).appendTo("#serviceList");
			}
		}
	});
	
});
