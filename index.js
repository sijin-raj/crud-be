const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sijinsijin2000:Nf4ilwfXNrI4XesM@backendb0.f1vek9s.mongodb.net/?retryWrites=true&w=majority&appName=BackendB0";

const client = new MongoClient(uri);

app.get('/', (req, res) => {
    res.send('lezof web app')
  })

 client.connect().then(() =>{
    console.log("Connected the db");
    app.listen(3000, () =>{
        console.log("Lezof Web Server running in the Port 3000")
    })    
}).catch(() => {
    console.log("failed")
} )





