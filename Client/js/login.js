var loginFunction = function (event) {
    var userName = $('#username').val();
    var passWord = $('#password').val();
    if (userName == "" || passWord == "") {
        Materialize.toast("Please fill the form", 1000);
    } else {
        var s = {};
        s['userName'] = userName;
        s['passWord'] = passWord;
        var role = $('#roleSwitch').prop('checked');
        var url = '';

        if (role == false) {
            url = '/user/login';
        } else {
            url = '/supplier/login';
        }
        $.ajax({
            type: 'POST',
            url: url,
            data: {
                user: s
            },
            success: function (data) {
                Materialize.toast(data.message, 1000, '', function () {
                    if (data.message == 'success') {
                        if (role == false) {
                            $.session.set('user', JSON.stringify(data.user));
                            window.location.href ='account.html';
                        }else{
                            $.session.set('supplier',JSON.stringify(data.user));
                            window.location.href ='supplier.html';
                        }
                        // console.log('success');
                    }
                });
            }
        })
    }
};

$(document).ready(function () {
    //add event
    $('#loginButton').click(loginFunction);
});