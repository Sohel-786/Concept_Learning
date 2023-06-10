const mongoose = require('mongoose');

module.exports = ()=>{
    return mongoose.connect('mongodb+srv://Sohel:8511042933@project2.jlsmuai.mongodb.net/renderdemo?retryWrites=true&w=majority');
}