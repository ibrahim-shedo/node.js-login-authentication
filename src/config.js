const mongoose = require('mongoose')
const connect = mongoose.connect("mongodb://localhost:27017/login-tut")

//check database connected or not
connect.then(()=>{
  console.log("datbase connected successfully")
})
.catch(()=>{
    console.log("database cannot connect")
})

//create schema
const loginschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

//collection part
const collection = new mongoose.model('users',loginschema)

module.exports = collection