/* global name */
var cancelAppointment = function (event) {
    var id = $(event.currentTarget).attr("_id");
    $.ajax({
        type: 'GET',
        url: '/appointment/cancelById',
        data: {
            id: id
        },
        success: function (data) {
            Materialize.toast(data, 1000, '', function () {
                window.location.reload();
            });
        }
    });
}
var commentAppointment = function (event) {
    var id = $(event.currentTarget).attr("_id");
    var comment = $(event.currentTarget).parent('p').prev('textarea').val();
    if (comment == "") {
        Materialize.toast("Please fill the comment", 1000);
    } else {
        $.ajax({
            type: 'POST',
            url: '/appointment/comment',
            data: {
                app: {
                    _id: id,
                    comment: comment
                }
            },
            success: function (data) {
                Materialize.toast(data, 1000, '', function () {
                    window.location.reload();
                });
            }
        });
    }
}
var updateUser = function () {
    var passWord = $('#passWord').val();
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();

    if (passWord == "" || name == "" || email == "" || phone == "") {
        Materialize.toast("Please fill the form", 1000);
    } else {
        var user = JSON.parse($.session.get('user'));
        var s = {};
        s['_id'] = user._id;
        s['passWord'] = passWord;
        s['name'] = name;
        s['email'] = email;
        s['phone'] = phone;
        $.ajax({
            type: 'POST',
            url: '/user/update',
            data: {
                user: s
            },
            success: function (data) {
                Materialize.toast(data, 1000, '', function () {
                    $.ajax({
                        type: 'GET',
                        url: '/user/queryById',
                        data: {
                            id: s['_id']
                        },
                        success: function (data) {
                            $.session.set("user", JSON.stringify(data));
                            window.location.reload();
                        }
                    })
                });
            }
        });
    }
};

var myAppointments = function (event) {
    var user_id = JSON.parse($.session.get('user'))._id;
    $.ajax({
        type: 'GET',
        url: '/appointment/queryByUserId',
        data: {
            id: user_id
        },
        success: function (data) {

            for (i in data) {

                var li = $('<li/>');
                var time = data[i].slot.begin_time.slice(0, 10) + " " + data[i].slot.begin_time.slice(11, 16) + "~" + data[i].slot.end_time.slice(11, 16);
                var headerDiv = $('<div/>', {
                    class: "collapsible-header",
                    html: time
                });
                var contentDiv = $('<div/>', {
                    class: "collapsible-body"
                }).append($('<h5/>', {
                    html: "Supplier Name: <b>" + data[i].supplier.name + "</b>"
                }))
                    .append($('<h5/>', {
                        html: "Supplier Phone: <b>" + data[i].supplier.phone + "</b>"
                    }))
                    .append($('<h5/>', {
                        html: "Service Name: <b>" + data[i].service.name + "</b>"
                    }))
                if (data[i].status == 0) {
                    headerDiv.append($('<i/>', {
                        class: "material-icons right",
                        html: "subtitles"
                    }));
                    contentDiv.append($('<p/>').append($('<a/>', {
                        _id: data[i]._id,
                        class: "waves-effect waves-light btn",
                        html: "Cancel",
                        click: cancelAppointment
                    })));
                } else if (data[i].status == 1) {
                    headerDiv.append($('<i/>', {
                        class: "material-icons right",
                        html: "thumb_up"
                    }));
                    contentDiv.append($('<textarea/>', {
                        class: "materialize-textarea",
                    }));
                    contentDiv.append($('<p/>').append($('<a/>', {
                        _id: data[i]._id,
                        class: "waves-effect waves-light btn",
                        html: "Comment",
                        click: commentAppointment
                    })));
                } else if (data[i].status == 2) {
                    headerDiv.append($('<i/>', {
                        class: "material-icons right",
                        html: "done"
                    }));
                    contentDiv.append($('<h5/>', {
                        html: "Comment: <b>" + data[i].comment + "</b>"
                    }))
                }
                headerDiv.appendTo(li);
                contentDiv.appendTo(li);
                li.appendTo('#myAppointmnet');
            }
            $('#myinfoForm').hide();
            $('#myAppointmnet').show();
        }
    });
};

$(document).ready(function () {
    var user = $.session.get('user');
    //for test, to use a exsiting user
    if (user == undefined) {
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
    } else {
        user = JSON.parse(user);
    }
    
    //fill the form
    $("#userName").attr("value", user.userName);
    $("#name").attr("value", user.name);
    $("#email").attr("value", user.email);
    $("#phone").attr("value", user.phone);
    
    //add update event
    $('#updateUser').click(updateUser);
    
    //add myAppointment event
    $('#myAppCollection').click(myAppointments);
});