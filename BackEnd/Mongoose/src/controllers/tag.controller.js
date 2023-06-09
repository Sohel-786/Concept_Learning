const express = require('express');
const router = express.Router();
const Tag = require('../models/tag.model')

router.post('', async (req, res)=>{
    try{

            let tag = await Tag.create(req.body);
            return res.status(201).send(tag);

    }catch(err){
        return res.status(400).send(err.message);
    }
})

router.get('/:id', async (req, res)=>{
    try{

            let tag = await Tag.findById(req.params.id).lean().exec();
            return res.status(200).send(tag);
            
    }catch(err){
        return res.status(400).send(err.message);
    }
})

router.get('', async (req, res)=>{
    try{

            let tag = await Tag.find().lean().exec();
            return res.status(200).send(tag);
            
    }catch(err){
        return res.status(400).send(err.message);
    }
})

router.patch('/:id', async (req, res)=>{
    try{

            let tag = await Tag.findByIdAndUpdate(req.params.id,req.body,{new:1}).lean().exec();
            return res.status(200).send(tag);
            
    }catch(err){
        return res.status(400).send(err.message);
    }
})

router.delete('/:id', async (req, res)=>{
    try{

            let tag = await Tag.findByIdAndDelete(req.params.id);
            return res.status(200).send(tag);
            
    }catch(err){
        return res.status(400).send(err.message);
    }
})

module.exports = router;