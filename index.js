const express=require('express');
const app = express();
const dbConfig=require('./config/mongoose');

app.use('/',require('./routes'));

app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost/${process.env.PORT}`);
})