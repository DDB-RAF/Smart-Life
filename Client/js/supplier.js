var updateSupplier = function () {
    var passWord = $('#passWord').val();
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var classification = $('#classification').val();
    var desc = $('textarea').val();

    if (passWord == "" || name == "" || email == "" || phone == "" || desc == "") {
        Materialize.toast("Please fill the form", 1000);
    } else {
        var supplier = JSON.parse($.session.get('supplier'));
        var s = {};
        s['_id'] = supplier._id;
        s['passWord'] = passWord;
        s['name'] = name;
        s['email'] = email;
        s['phone'] = phone;
        s['classification'] = classification;
        s['desc'] = desc;
        $.ajax({
            type: 'POST',
            url: '/supplier/update',
            data: {
                supplier: s
            },
            success: function (data) {
                Materialize.toast(data, 1000, '', function () {
                    $.ajax({
                        type: 'GET',
                        url: '/supplier/queryById',
                        data: {
                            id: s['_id']
                        },
                        success: function (data) {
                            $.session.set("supplier", JSON.stringify(data));
                            window.location.reload();
                        }
                    })
                });
            }
        });
    }
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
            var service = data.service;
            var timeTable = data.timeTable;
            $('#service_id').attr("value", service._id);
            $('#service_name').attr("value", service.name).nextAll('label').addClass('active');
            $('#total_app').attr("value", service.total_app).nextAll('label').addClass('active');
            $('#begin_time').attr("value", service.begin_time).nextAll('label').addClass('active');
            $('#end_time').attr("value", service.end_time).nextAll('label').addClass('active');
            $('#slot_length').attr("value", service.slot_length).nextAll('label').addClass('active');
            $('#max_num').attr("value", service.max_num).nextAll('label').addClass('active');
            $('#myinfoForm').hide();
            $('#addServiceForm').hide();
            $('#serviceForm').show();
			
            //fill the timeTable head
            $('#timeTable thead tr').empty();
            $('<th/>', { html: 'slots' }).appendTo('#timeTable thead tr');
            for (i = 0; i < timeTable.length; i++) {
                $('<th/>', {
                    html: timeTable[i].date.slice(5, 10),
                    _id: timeTable[i]._id
                }).appendTo('#timeTable thead tr');
            }
			
            //fill the timeTable
            $('#timeTable tbody').empty();
            for (i = 0; i < timeTable[0].tables.length; i++) {
                var tr = $('<tr/>');
                var btime = timeTable[0].tables[i].begin_time.slice(11, 16);
                var etime = timeTable[0].tables[i].end_time.slice(11, 16)
                $('<td/>', {
                    html: btime + "~" + etime
                }).appendTo(tr);
                for (j = 0; j < timeTable.length; j++) {
                    $('<td/>', {
                        html: '<b>A:' + timeTable[j].tables[i].app_num + '</b><br/>'
                        + '<b>F:' + timeTable[j].tables[i].finished_num + '</b>',
                        _id: timeTable[j].tables[i]._id,
                        style: "cursor:pointer",
                        class: timeTable[j].tables[i].app_num - timeTable[j].tables[i].finished_num > service.max_num / 2 ? "red" : "",
                    }).click(selectSlot).appendTo(tr);
                }
                tr.appendTo('#timeTable tbody');
            }
        }
    });
};

var deleteService = function (event) {
    var id = $('#service_id').attr("value");
    $.ajax({
        type: 'GET',
        url: '/service/deleteById',
        data: {
            id: id
        },
        success: function (data) {
            Materialize.toast(data, 1000, '', function () {
                window.location.reload();
            });
        }
    })
};

var addService = function (event) {
    var name = $('#name_add').val();
    var begin_time = $('#begin_time_add').val();
    var end_time = $('#end_time_add').val();
    var slot_length = $('#slot_length_add').val();
    var max_num = $('#max_num_add').val();
    var weeks = $('#weeks_add').val();
    var desc = $('#textarea_add').val();
    var s = {};
    if (name != "" && begin_time != "" && end_time != "" && slot_length != "" && max_num != "" && weeks != "" && desc != "") {
        s['name'] = name;
        s['begin_time'] = begin_time;
        s['end_time'] = end_time;
        s['slot_length'] = slot_length;
        s['max_num'] = max_num;
        s['weeks'] = weeks;
        s['desc'] = desc;
        s['supplier_id'] = JSON.parse($.session.get('supplier'))._id;
        console.log(s);
        $.ajax({
            type: 'POST',
            url: '/service/add',
            data: {
                service: s
            },
            success: function (data) {
                Materialize.toast(data, 1000, '', function () {
                    window.location.reload();
                });
            }
        });
    } else {
        Materialize.toast("Please fill the form");
    }
};
var finishApp = function (event) {
    var id = $(event.currentTarget).attr("_id");
    $.ajax({
        type: 'GET',
        url: '/appointment/finishById',
        data: {
            id: id
        },
        success: function (data) {
            Materialize.toast(data, 2000, '', function () {
                fillUsers($('#app_users').attr("_id"));
            });
        }
    });
};
var fillUsers = function (id) {
    $.ajax({
        type: 'GET',
        url: '/appointment/queryBySlotId',
        data: {
            slot_id: id
        },
        success: function (data) {
            $('#app_users').empty();
            $('#app_users').attr("_id", id);
            for (s in data) {
                var tr = $('<tr/>');
                $('<td/>', { html: data[s].user_id.name }).appendTo(tr);
                $('<td/>', { html: data[s].user_id.email }).appendTo(tr);
                $('<td/>', { html: data[s].user_id.phone }).appendTo(tr);
                if (data[s].status == 0) {
                    $('<div/>', {
                        class: "btn",
                        _id: data[s]._id,
                        html: "Finish"
                    }).click(finishApp).appendTo($('<td/>').appendTo(tr));
                } else {
                    $('<td/>', { html: 'Finished' }).appendTo(tr);
                }
                tr.appendTo($('#app_users'));
            }
        }
    });
}
var selectSlot = function (event) {
    fillUsers($(event.currentTarget).attr("_id"));
    $('#slotModal').openModal();
};


$(document).ready(function () {
    $('select').material_select();
	
    //get supplier in session,if can't get jump to login in.
    var supplier = $.session.get('supplier');
	
    //for test,to use a exsiting supplier
    if (supplier == undefined) {

        Materialize.toast("Please login firstly", 500, '', function () {
            window.location.href = "login.html";
        }); 
    } else {
        supplier = JSON.parse(supplier);
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
            //add a service
            $('<li/>', {
                class: 'collection-item',
                html: 'Add a service',
                style: "cursor:pointer"
            }).click(function () {
                $('#addServiceForm').show();
                $('#myinfoForm').hide();
                $('#serviceForm').hide();
            }).appendTo('#serviceList');
        }
    });

    //add updateSupplier event;
    $('#myInfoCollection').click(function () {
        $('#myinfoForm').show();
        $('#serviceForm').hide();
    });
    $('#updateSupplier').click(updateSupplier);
	
    //add deleteService event
    $('#delete_service').click(deleteService);

    //add service event
    $('#add_service_button').click(addService);

    $('#logout').click(function () {
        $.session.clear();
        window.location.href = "login.html";
    });
});
