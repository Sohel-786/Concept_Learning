const express = require('express');
const router = express.Router();
const User = require('../models/user.model')

router.get('/create', async (req, res) =>{
    return res.render('addUsers.ejs');
})

router.post('', async (req, res) =>{
    try{
        // let user = await User.create(req.body);
        // return res.status(201).send(user);

            return res.send(req.body);
    }catch(err){
        return res.status(400).send(err.message)
    }
})

router.get('', async (req, res) =>{
    try{
        let user = await User.find().lean().exec();
        let pageTitle = 'Welcome to Users Page'
        return res.render('users', {
            users : user,
            pageTitle
        });
    }catch(err){
        return res.status(400).send(err.message)
    }
})


module.exports = router;