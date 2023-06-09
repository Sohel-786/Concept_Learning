const express = require('express');

const app = express()
const connect = require('./configs/db');

const userController = require('./controllers/user.controller');
const postController = require('./controllers/post.controller');
const commentController = require('./controllers/comment.controller');
const tagController = require('./controllers/tag.controller');

app.use(express.json());

app.use("/users", userController);
app.use('/tags', tagController);
app.use('/posts', postController);
app.use("/comments", commentController);



app.listen(2345, async ()=>{
    await connect();
    console.log('Listening on 2345');
});