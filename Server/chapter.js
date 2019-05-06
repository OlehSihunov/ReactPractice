const mongoose  = require("mongoose");
const Schema = mongoose .Schema;
const ChapterSchema = new Schema({
    Title: String,
    Text: String,
    DatePublish: Date,
    BookId: String,
    ChapterNumver:Number
})
const chapter= mongoose.model("chapter",ChapterSchema);
module.exports = chapter;