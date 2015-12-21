WEEK_NAME = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sta.'];
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var selectSlot = function (event) {
    var td = $(event.currentTarget);
    var app_num = parseInt($(td.children('b')[0]).html().split(':')[1]);
    if (app_num >= parseInt($('#max_num').attr("value"))) {
        Materialize.toast("Please change a slot!",1000);
    } else {
        var user = $.session.get('user');
        if (user == undefined) {
            Materialize.toast("Please login first!");
        } else {
            user = JSON.parse(user);
            $('#user_id').attr("value", user._id);
            $('#slot_id').attr("value", td.attr("_id"));
            var th = td.closest('table').find('th').eq(td.index());
            $('#timeTable_id').attr("value", th.attr("_id"));
            $('#slotModal').openModal();
        }
    }
};
var addAppointment = function (event) {
    var user_id = $('#user_id').attr("value");
    var slot_id = $('#slot_id').attr("value");
    var timeTable_id = $('#timeTable_id').attr("value");
    $.ajax({
        type: 'POST',
        url: '/appointment/add',
        data: {
            app: {
                user_id: user_id,
                slot_id: slot_id,
                timeTable_id: timeTable_id
            }
        },
        success: function (data) {
            Materialize.toast(data, 1000, '', function () {
                if (data != "Exists") {
                    window.location.reload();
                }
            });
        }
    });
}
$(document).ready(function () {
    var user = $.session.get('user');
    if (user == undefined) {
        // for test
        user = {
            "_id": "566ee3b8b46fe7781a0f77e7",
            "userName": "zhangfei0",
            "passWord": "zhagnfei",
            "name": "Fly zhang",
            "email": "zhangfei614@126.com",
            "phone": "188",
            "canceled_app": 0,
            "total_app": 0,
            "__v": 0
        }
        $.session.set("user", JSON.stringify(user));

        // Materialize.toast("Please login first!", 1000, '', function () {
        //     window.location.href = './login.html';
        // });
    } else {
        user = JSON.parse(user);
    }
    
    //fill the from
    var service_id = getUrlParameter('id');
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
            $('#service_desc').html(service.desc);
            //fill the weeks
            for (i in service.weeks) {
                $('<div/>', {
                    html: WEEK_NAME[service.weeks[i]],
                    class: "chip"
                }).appendTo($('#weeks'));
            }
			
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
    
    //add event
    $('#addAppointment').click(addAppointment);
});