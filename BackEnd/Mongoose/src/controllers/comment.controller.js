const express = require('express');
const router = express.Router();
const Comment = require('../models/comment.model')

router.post('', async (req, res) =>{
    try {
        
            let comment = await Comment.create(req.body);
            return res.status(201).send(comment);

    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.get('', async (req, res) =>{
    try {
        
            let comment = await Comment.find().lean().exec();
            return res.status(200).send(comment);
             
    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.get('/:id', async (req, res) =>{
    try {
        
            let comment = await Comment.findById(req.params.id).lean().exec();
            return res.status(200).send(comment);
             
    } catch (err) {
        return res.status(400).send(err.message);
    }
})


router.patch('/:id', async (req, res) =>{
    try {
        
            let comment = await Comment.findByIdAndUpdate(req.params.id,req.body, {new:1}).lean().exec();
            return res.status(200).send(comment);
             
    } catch (err) {
        return res.status(400).send(err.message);
    }
})

module.exports = router;