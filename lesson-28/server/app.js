"use strict";
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/', (req ,res ,next) => {
    res.send({
        name : "John",
        surname : "Doe"
    })

    next();
})

app.get('/isAdmin', (req ,res ,next) => {
    res.send({
       isAdmin : true
    })
})

app.listen(3000, () => {
    console.log(`Server started on port`);
});



