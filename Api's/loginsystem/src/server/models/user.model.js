const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const user   = new Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String,unique:true},
    userName:{type:String,unique:true},
    password:{type:String,required:true}
})


module.exports = mongoose.model(`user`,user)