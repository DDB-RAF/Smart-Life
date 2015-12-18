var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
  console.log('Hello world');
})
.get('/servicesList', function (req, res) {

})
.get('/sortServices', function (req, res) {

})
.get('/serviceDetails', function (req, res) {

})
.post('/createAccount', function (req, res) {

})
.get('/userInfos', function (req, res) {

})
.get('/userAppointments', function (req, res) {

})
.post('/disconnect', function (req, res) {

})
.post('/deleteAccount', function (req, res) {

})
.post('/createAppointment', function (req, res) {

})
.post('/cancelAppointment', function (req, res) {

})
.get('/globalTimetable', function (req, res) {

})
.get('/detailsTimetable', function (req, res) {

});

//add body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//add supplier route
var supplier = require('./routers/supplierRouter.js');
var service = require('./routers/serviceRouter.js');

app.use('/supplier',supplier);
app.use('/service',service);


app.set('host', '127.0.0.1');

// to make the files in Client avaliable
app.use(express.static(__dirname+'\\..\\Client'));
var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});