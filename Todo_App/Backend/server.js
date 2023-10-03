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
    const id = req.params.id;
    TaskModel.findById(id)
        .then(task => {
            if (!task) {
                res.status(404).json({ message: "Task not found" });
            } else {
                res.json(task);
            }
        })
        .catch(err => res.json(err))
})

app.listen(5052, () => console.log("Server is running"))
