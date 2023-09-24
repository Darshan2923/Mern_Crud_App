const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users')

const app = express();

app.use(cors());
app.use(express.json());
// Above to are to handle data coming from frontend

mongoose.connect("mongodb://127.0.0.1:27017/userData")

//New Record API
app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(5050, () => console.log("Server is running"))