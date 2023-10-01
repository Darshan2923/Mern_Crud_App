const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    time: String,
    task: String,
    priority: String
})

const TaskModel = mongoose.model("userData", TaskSchema);

module.exports = TaskModel