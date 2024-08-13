const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin:WAsQ6qxYbgoI4huN@cluster0.zfe9bjg.mongodb.net/todos")

const todoSchema  = mongoose.schema({
    title:String,
    description:string,
    compleated:Boolean
})

const todo  =  mongoose.model("todos",todoSchema);

module.export = {
    todo
}