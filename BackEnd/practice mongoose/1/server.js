const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const connect = () =>{
    return mongoose.connect('mongodb://127.0.0.1:27017/democonnect');
}

const userinfoSchema = new mongoose.Schema({
    division:String,
    designation:String,
    email:String,
    ph_no:Number
});

const Userinfo = mongoose.model('userinfo', userinfoSchema);

app.post('/users', async function (req ,res){
    let userinfo = await Userinfo.create(req.body);
    return res.send(userinfo);
});

app.get('/users', async function(req ,res){
    let userinfo = await Userinfo.find().lean().exec();
    return res.send(userinfo);
});

app.patch('/users/:id', async (req,res)=>{
    let userinfo = await Userinfo.findByIdAndUpdate(req.params.id,req.body, {new:1}).lean().exec();
    return res.send(userinfo);
})

app.put('/users/:id', async (req,res)=>{
    let field = req.body;
    console.log(field);
    let userinfo = await Userinfo.findByIdAndUpdate(req.params.id,{$unset:{designation:1}},{new:1}).lean().exec();
    return res.send(userinfo);
})

app.listen(2345, ()=>{
    connect();
    console.log('Listening on 2345 ☺');
});