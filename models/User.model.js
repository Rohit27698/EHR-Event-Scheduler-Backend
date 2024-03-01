const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    password : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    phone : {type : Number, required : true},
})  

const Usermodel = mongoose.model("user", userSchema)

module.exports = {Usermodel}