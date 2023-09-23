const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users')

const app = express();

app.use(cors());
app.use(express.json());
// Above to are to handle data coming from frontend

mongoose.connect("mongodb://localhost:27017/userData")

app.listen(5050, () => console.log("Server is running"))