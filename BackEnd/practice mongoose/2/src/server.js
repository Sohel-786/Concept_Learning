const express = require('express');
const path = require('path');
const app = express();

const connect = require('./config/db')
app.use(express.json())
app.use(express.urlencoded({extended : false}));  // for the input data from the frontend

app.use('/static', express.static(path.join(__dirname, "public"))); // it's for applying stylesheet in ejs

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

const userController = require('./controller/user.controller');

app.use('/users', userController);

app.listen(2345, async ()=>{
    await connect();
    console.log('Listening on port 2345');
})