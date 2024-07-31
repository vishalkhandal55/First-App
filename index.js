const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
    console.log('Hello Vishal');
    // res.send('Hello world!');
    
    // res.send({"title": "Node js project setup"})
    next();    
})

app.get("/", (req, res, next) => {
    console.log('object send sussefully');
    next();
})

app.get("/", (req, res, next) => {
    console.log('object send second time');
    next();
})

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    next();
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
})
app.listen(port, ()=> {
    console.log(`app is listing at port ${port}`);
})