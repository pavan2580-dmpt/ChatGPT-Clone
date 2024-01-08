const express = require('express')
const mongoose = require("mongoose");
const app  = express();
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler.js');
const connectDb = require('./config/db.js');
const dotenv = require("dotenv").config();

connectDb();
port =5000;
app.use(express.json());
app.use(cors("*"));

app.get('/api/server',(req,res)=>{
    res.status(200).send("Hello from server")
})

app.use("/api",require("./router/Routes"))
app.use(errorHandler)


app.listen(port,()=>console.log("server is running on port 5000"))
