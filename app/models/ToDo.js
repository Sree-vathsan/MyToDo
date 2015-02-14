//Get ToDo Schema
// define model =================
var mongoose = require('mongoose');
var TodoSchema = mongoose.model('Todo', {
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Todo', TodoSchema);	