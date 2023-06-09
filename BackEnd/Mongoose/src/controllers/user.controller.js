const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Tag = require('../models/tag.model');
const Post = require('../models/post.model');
const Comment = require('../models/comment.model');

router.post('',async function(req,res){
    let user = await User.create(req.body);
    return res.send(user);
});


router.get('',async function(req,res){
    let user = await User.find().lean().exec();
    return res.send(user);
});

router.get('/:id',async function(req,res){
    let user = await User.findById(req.params.id,{firstname:1}).lean().exec();
    return res.send(user);
});

router.patch('/:id', async function(req, res){
    let user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
    return res.send(user);
})

router.delete('/:id', async function(req, res){
    let user = await User.findByIdAndDelete(req.params.id);
    return res.send(user);
})


router.get('/:id/posts', async function(req, res){

    let postData = await Post.find({userId:{_id:req.params.id}}).lean().exec();
    let tag = await Tag.find().lean().exec();

    var user = await User.findById(req.params.id);
    postData.forEach((el) => {
        let arr = [];
        var obj = {};
        for(let i = 0; i< el.tagId.length; i++){
            
                    tag.forEach((el2) =>{
                            let id = el2._id;
                            id = id.toString();
                            if(id == el.tagId[i]){
                                
                                obj[id] = el2.name; 
                            }
                     })        
                }
            arr.push(obj);
            el.tags = arr;
    });
    // let ExecPostData = await Post.find({userId:{_id:req.params.id}}, {userId:0,tagId:0}).lean().exec();
    postData.forEach(el => delete el.tagId);
    postData = await comment(postData);

    return res.status(200).json({
        User : name(user),
        Posts : postData
    });
})

function name(obj){
    let name = (obj.firstname +" "+ obj.lastname);
    return name;
}

async function comment(data){
     let comment = await Comment.find().lean().exec();

     data.forEach((el) => {
        let commentData = [];

        comment.forEach((elc) => {
        
            if(el._id.toString() == elc.postId.toString()){
                commentData.push(elc);
            }
        })

        if(commentData.length !== 0){

            el.Comments = commentData;
        }
     })

     return data;
}

module.exports = router;