const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name : {type:String, required : true},
    designation : {type:String, required: true},
    ex : {type:String, required:true}
}, {
    versionKey: false, 
    timestamps : true
})

const Team = mongoose.model('team_member', teamSchema);

module.exports = Team;