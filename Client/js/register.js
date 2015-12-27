var switchFunction = function (event) {
    var role = $(event.currentTarget).prop('checked');
    if (role == false) {
        $('#classificationDiv').hide();
        $('#textareaDiv').hide();
    } else {
        $('#classificationDiv').show();
        $('#textareaDiv').show();
    }
};
var register = function () {
    var role = $('#roleSwitch').prop('checked');
    var userName = $('#username').val();
    var passWord = $('#password').val();
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var classification = $('#classification').val();
    var desc = $('#textarea').val();

    if (userName == "" || passWord == "" || name == "" || email == "" || phone == "") {
        Materialize.toast("Please fill the form", 1000);
    } else {
        var s = {};
        var url = "";
        s['userName'] = userName;
        s['passWord'] = passWord;
        s['name'] = name;
        s['email'] = email;
        s['phone'] = phone;
        if (role == true) {
            s['classification'] = classification;
            s['desc'] = desc;
            url = '/supplier/add';
        } else {
            url = '/user/add';
        }
        console.log(s);
        console.log(url);
        $.ajax({
            type: 'POST',
            url: url,
            data: {
                user: s
            },
            success: function (data) {
                if (data.message != 'success') {
                    Materialize.toast(data.message, 1000);
                } else {
                    if (role == false) {
                        $.session.set('user', JSON.stringify(data.user));
                        window.location.href = 'main.html';
                    } else {
                        $.session.set('supplier', JSON.stringify(data.user));
                        window.location.href = 'supplier.html';
                    }
                }
            }
        });
    }
};
$(document).ready(function () {
    $('select').material_select();
    $('#roleSwitch').click(switchFunction);
    $('#registerButton').click(register);
});