var userDAO = require('../dao/userDAO.js');
var supplierDAO = require('../dao/supplierDAO.js');
var serviceDAO = require('../dao/serviceDAO.js');

var user = {
	userName: 'zhangfei',
	passWord: 'zhagnfei',
	name: 'Fly zhang',
	email: 'zhangfei614@126.com',
	phone: '188'
};
var supplier = {
	userName: 'bankofchina',
	passWord: '123',
	name: "bank of china",
  	email: "zhangfei614@126.com",
  	phone: "155",
  	desc: "zhangfei",
  	classification:"bank"
};
var service ={
	supplier_id:'566e2d9ad07c3c981e02f1ca',
	name:'save money',
	weeks:[1,2,3,4,5],
	begin_time:'08:00',
	end_time:'17:00',
	slot_length:0.5,
	max_num:5,
	desc:'save money'
};
var timeTable = {
	service_id:'56619eb0b149f37822c1095f',
	date:new Date()
};
