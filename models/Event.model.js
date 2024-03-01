const mongoose = require("mongoose")

const eventSchema = mongoose.Schema({
    title : {type : String, required : true},
    description : {type : String, required : true},
    startTime : {type : String, required : true},
    endTime : {type : String, required : true},
    user_id : {type : String, required : true},
    status:{type : Boolean, required : true},
    creator_name:{type : String, required : true}
})

const EventModel = mongoose.model("events", eventSchema)

module.exports = {EventModel}