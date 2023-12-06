const Post = require("./schemas/Post");

const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

// mongodb+srv://zohman:<password>@cluster0.nhedlre.mongodb.net/?retryWrites=true&w=majority



// get - retrieve data 
// post - send data 
// delete - remove data 
// put - change object 
// patch - change filed of object 

// ! const allowlist = ['http://127.0.0.1:5173/'];

app.use(cors());

app.use(bodyParser.json());


(async function () {
    try {
       const connected = await mongoose.connect('mongodb+srv://zohman:2323@cluster0.nhedlre.mongodb.net/');

    }finally {
        console.log("Opertion was canceled!");
    }   
  
})();

app.use((req, res, next) => {

    const post = new Post({
        title : "Hello" ,
        description : "World"
    })
    
    post.save()

    const data = Post.find();
    console.log('[data]', data);

    res.send("Hello")
    next();

})

app.get('/names',(req, res, next) => {

    console.log("Second middleware!");

    return res.send([
        "John",
        "Jim"
    ])

})

app.post('/names',(req, res, next) => {

    console.log("Second middleware!");
    console.log('[req.body]', req.body);
    res.setHeader("Content-Type", "application/json");

    return res.send([
        "John",
        "Jim",
        req.body
    ])

})

app.get('/surnames' , (req, res, next) => {

    console.log("Second middleware!");
    return res.send([
        "Doe",
        "Bibby"
    ])
})

module.exports = app;