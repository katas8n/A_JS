const mongoose = require("mongoose");


const profileSchema = new mongoose.Schema({
    username : String ,
    password : String , 
    avatar : String 
});

const Profile = mongoose.model("Profile" , profileSchema);

module.exports = Profile;