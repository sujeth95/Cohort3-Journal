const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: String,
    password: String,
    name: String
});

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model('users', User); //This model Helps in inserting data
const TodoModel = mongoose.model('todos', Todo);

module.exports = {   //Exporting the input data to index.js
    UserModel: UserModel,
    TodoModel: TodoModel
}