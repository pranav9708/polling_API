const express=require('express');
const app = express();
const dbConfig=require('./config/mongoose');
const dotenv=require('dotenv').config();
const port=process.env.PORT || 8000;

app.use(express.json());
app.use('/',require('./routes'));

app.listen(port,()=>{
    console.log(`server running on http://localhost/${port}`);
})