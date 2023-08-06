const mongoose=require('mongoose');
const dotenv=require('dotenv').config();

const dbURL=process.env.mongodbURL;
mongoose.connect(dbURL);
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error while connecting to Database"));

db.once('open',()=>{
    console.log('Connected to Database');
});

module.exports=db;

