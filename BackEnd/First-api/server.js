const express = require('express');
const app = express();
app.use(express.json());

// app.use(logger);


app.get('/users', function (req, res){
    return res.send('Testing');
})

app.post('/users',logger({name:'Sohel Shaikh'}) , function (req, res){
    console.log('Welcome Sohel');
    return res.send('POST');
})

app.patch('/users/:id', function (req, res){
    return res.send({id:req.params.id});
})

app.delete('/users/:id', function (req, res){
    return res.send({id:req.params.id});
})

function logger(obj){
    return function (req,res,next){
        if(obj.name === req.body.name){
            next();
        }else{
            return res.send('You are not authorized to access the data');
        }
     }
}

app.listen(5000, ()=> {
    console.log('Listening on port 2345');
})

