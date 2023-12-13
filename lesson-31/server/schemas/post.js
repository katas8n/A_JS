const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title : String,
    text : {
        type : String,
        required : true 
    },
    img : String
})

module.exports = mongoose.model("Post", postSchema);