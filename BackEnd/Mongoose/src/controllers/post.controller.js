const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

router.post('', async (req, res)=>{
    try{

        let post = await Post.create(req.body);
        return res.status(201).send(post);

    }catch(err){
        return res.status(400).send(err.message)
    }
})

router.get('', async (req, res)=>{
    try{

        let post = await Post.find().lean().exec();
        return res.status(200).json({post: post});

    }catch(err){
        return res.status(400).send(err.message);
    }
})

router.get('/:id', async (req, res)=>{
    try{

        let post = await Post.findById(req.params.id).lean().exec();
        return res.status(200).json({post: post});

    }catch(err){
        return res.status(400).send(err.message);
    }
})

router.patch('/:id', async (req, res)=>{
    try{

         let post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: 1}).lean().exec();
         return res.status(205).send(post);
    }catch(err){
        return res.status(400).send(err.message);
    }
})


router.delete('/:id', async (req, res)=>{
    try{

         let post = await Post.findByIdAndDelete(req.params.id);
         return res.status(200).send(post);
    }catch(err){
        return res.status(400).send(err.message);
    }
})

module.exports = router;