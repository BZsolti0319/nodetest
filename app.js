import express from 'express'
import bodyParser from 'body-parser';
import fs from 'fs'

const app = express();
const PORT = 3000;

app.listen(3000, ()=>{
    console.log("A szerver fut");
});

app.get('/', (req, res)=>{
    res.send('Hi, there!')
})
app.get('/express', (req, res) =>{
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
});
app.get('/greeting', (req, res) =>{
    res.send("Hello, Börcsök Zsolt");
});
app.get('/nodejs', (req, res) =>{
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.");
});
app.get('/html', (req,res) =>{
    req.get('./public/index.html')
    res.send('./public/index.html')
});

