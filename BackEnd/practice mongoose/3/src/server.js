const express = require('express');
const path = require('path');
const app = express();
const connect = require('./config/db');


app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/static', express.static(path.join(__dirname, "public")))

const teamController = require('./controllers/team.controller')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/team', teamController);

app.listen(2346, async (req, res) =>{
    await connect();
    console.log('Listening on port 2346');
})