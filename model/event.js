
const mongoose = require('mongoose')

const eventschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('evnet',eventschema)