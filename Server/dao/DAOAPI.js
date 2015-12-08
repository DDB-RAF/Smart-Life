user:
add(user,callback);
findById(id,callback);
findByName(id,callback);
updateUser(user,callback);
deleteById(id,callback);

supplier:
add(supplier,callback);
findById(id,callback);
deleteById(id,callback);
updateSupplier(supplier,callback);

service:
add(service,callback);
findById(id,callback);
deleteById(id,callback);
queryBySupplierId(id,callback);

timeTable:
add(timeTable,callback);
findById(id,callback);
deleteById(id,callback);
findSlotById(timeTable_id,slot_id,callback);
updateSlotById(timeTable_id,slot,callback);

