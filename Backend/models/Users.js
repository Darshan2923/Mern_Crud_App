import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const userModel = mongoose.model("userData", UserSchema);

module.exports = UserModel