const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TaskModel = require('./models/TaskModel')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/userData")

// New Record API
app.post('/addTask', (req, res) => {
    TaskModel.create(req.body)
        .then(task => res.json(task))
        .catch(e => res.json(e))
})

// Get data from the db
app.get('/getTask', (req, res) => {
    // const id = req.params.id;
    TaskModel.find({})
        .then(task => {
            if (!task) {
                res.status(404).json({ message: "Task not found" });
            } else {
                res.json(task);
            }
        })
        .catch(err => res.json(err))
})

app.get('/getTask/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findById({ _id: id })
        .then(task => {
            if (!task) {
                res.status(404).json({ message: "Task not found" });
            } else {
                res.json(task);
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});



//delete item from database
app.delete('/deleteTask/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})

//updatetask
app.put('/updateTask/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndUpdate({ _id: id }, { time: req.body.time, task: req.body.task, priority: req.body.priority })
        .then(task => res.json(task))
        .catch(err => res.json(err))
})

app.listen(5052, () => console.log("Server is running"))
