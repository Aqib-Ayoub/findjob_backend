const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(()=> console.log('Connected to atlas')).catch(err=> console.log(err));



app.get('/', (req, res)=> res.send('Hello World!'));

app.listen(process.env.PORT || port, ()=> console.log(`Server is running on port ${process.env.PORT}`));