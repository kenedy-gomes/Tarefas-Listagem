const mongoose = require('mongoose');
 
const taskSchema = new mongoose.Schema({
   name: String, 
   description: String, 
   status: String
  });
const List = mongoose.model('Task', taskSchema);
module.exports = List
 
 