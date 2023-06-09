const express = require('express');
const path = require('path');
const app = express();

const connect = require('./config/db')
app.use(express.json())

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

const userController = require('./controller/user.controller');

app.use('/users', userController);

app.listen(2345, async ()=>{
    await connect();
    console.log('Listening on port 2345');
})