var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.redirect('./html/main.html');
});
//add body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//add supplier route
var user = require('./routers/userRouter.js');
var supplier = require('./routers/supplierRouter.js');
var service = require('./routers/serviceRouter.js');
var appointment = require('./routers/appointmentRouter.js');

app.use('/supplier', supplier);
app.use('/service', service);
app.use('/appointment', appointment);
app.use('/user', user);


app.set('host', '127.0.0.1');


// to make the files in Client avaliable
app.use(express.static(__dirname + '\\..\\Client'));

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});