/* global name */
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
});