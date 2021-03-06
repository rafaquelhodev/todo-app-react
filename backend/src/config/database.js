const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = mongoose.connect("mongodb://mongo:27017/todo");