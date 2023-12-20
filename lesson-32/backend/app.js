const Profile = require("./schema/Profile");

const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://zohman:2323@cluster0.nhedlre.mongodb.net/?retryWrites=true&w=majority", 
{
    dbName: 'test',
} ,
{ 
    collection: 'profile'
});

const upload = multer({
    storage : multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "../client/src/uploads");
        },
        filename : function(req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".png");
        }
    })
});

app.get("/api/get-profiles" , (req, res) => {
    Profile.find({}).then((profile) => {
        res.json(profile);
    })
}) 

app.post("/api/submit-profile",
    upload.single("avatar"), 
    (req , res) => {
        const newProfile = new Profile({
            username : req.body.username,
            password : req.body.password,
            avatar : req.file.path,
        })

        newProfile.save().then(() => {
            res.redirect('http://127.0.0.1:5173', 301);
        }).catch((error) => {
            res.end("Error : " , error);
        })

    }
)

app.listen(3000 , () => {
    console.log("Server was successfuly loaded on the 3000 port.");
})