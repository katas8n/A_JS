const express = require('express');
const mongoose = require("mongoose");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors');
const bodyParser = require('body-parser')


const Post = require("./schemas/post.js")
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post((req: Request , res: Response , next: Function) => {

    console.log("First middleware completed.");

    mongoose.connect("mongodb+srv://zohman:2323@cluster0.nhedlre.mongodb.net/?retryWrites=true&w=majority");

    const post = new Post({
        title : "Misha",
        text : "Davai po novoi"
    });

    post.save();

    console.log(post)

    next();

});

app.post("/api/submit-item", upload.single("image") , 
(req, res) => {

    
    const newPost = new Post({
        title : req.body.title,
        text : req.body.text,
        image : req.file.path
    })

    newPost.save().then((post) => {
        res.status(201).json(post);
    })
})

app.use((req: Request , res: Response , next: Function) => {
    console.log("Another middleware")
});

module.exports = { app };
