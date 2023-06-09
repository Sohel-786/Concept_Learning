const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    gender : String,
    age : Number,
}, {
    versionKey: false
});

// then we tell mongoose to create that collection inside the mongodb with the given schema and also create a model that will allow us to interact with mongodb easily

const User = mongoose.model('user', userSchema);  //users collection in mongodb

module.exports = User;