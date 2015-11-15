var server = "127.0.0.1"

function createAccount (username, password, phone, email) {
	var json = {
		username : username,
		password : password,
		phone : phone,
		email : email
	}
	connect('post', '/createAccount', json);
}

function createAppointment (service, date, slot) {
	var json = {
		service : service,
		date : date,
		slot : slot
	}
	connect('post', '/createAppointment', json);
}

function cancelAppointment (service, date, slot) {
	var json = {
		service : service,
		date : date,
		slot : slot
	}
	connect('post', '/cancelAppointment', json);
}

function connect (type, route, data) {
    if (type == "get")
        $.get(server+route, data, function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    else if (type == "post")
        $.post(server+route, data, function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
}