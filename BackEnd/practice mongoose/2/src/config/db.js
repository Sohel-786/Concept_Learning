const mongoose = require('mongoose');

const connect = function(){
    return mongoose.connect('mongodb+srv://Sohel-786:8511042933@project-1.vnzztpg.mongodb.net/render?retryWrites=true&w=majority');
}

module.exports = connect;