const express=require('express');
const app = express();
const dbConfig=require('./config/mongoose');
const dotenv=require('dotenv').config();
const port=process.env.PORT || 8000;

//middleware to parse json data in request body
app.use(express.json());

//routing all requests to index file in routes
app.use('/',require('./routes'));

//starting server
app.listen(port,()=>{
    console.log(`server running on http://localhost/${port}`);
})