const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin:WAsQ6qxYbgoI4huN@cluster0.zfe9bjg.mongodb.net/todos")

const todoSchema  = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo  =  mongoose.model("todo",todoSchema);

module.exports = {
    todo
}