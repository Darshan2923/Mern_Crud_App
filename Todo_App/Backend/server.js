const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TaskModel = require('./models/Task')

const app = express();

app.use(cors());
app.use(express.json());
// Above to are to handle data coming from frontend

mongoose.connect("mongodb://127.0.0.1:27017/userData")

//New Record API
app.post('/addTask', (req, res) => {
    TaskModel.create(req.body)
        .then(task => res.json(task))
        .catch(e => res.json(e))
})

//Get data from the db
app.get('/getTask/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findById({ id: _id })
        .then(task => res.json(task))
        .catch(err => res.json(err))
})

app.listen(5050, () => console.log("Server is running"))
