const mongoose  = require("mongoose");
const Schema = mongoose .Schema;
const BookSchema = new Schema({
    name: String,
    author:String,
    discription:String
})
const Book= mongoose.model("book",BookSchema);
module.exports = Book;