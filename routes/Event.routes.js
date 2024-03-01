const express = require("express")

const {EventModel} = require("../models/Event.model")

const eventRouter = express.Router();
eventRouter.get("/data", async (req, res) => {
    const events = await EventModel.find()
    res.send({"events" : events})
})

eventRouter.get("/", async (req, res) => {
    const events = await EventModel.find({user_id:req.userID})
    res.send({"events" : events})
})
eventRouter.post("/", async (req, res) => {
    const {title, description,status,startTime,endTime,creator_name} = req.body;
    const user_id = req.userID
    const events = await EventModel.create({title, description, user_id, status,endTime,startTime,creator_name})
    
    res.send({"events" : events})
})

eventRouter.patch("/:eventID", async (req, res) => {
    const eventID = req.params.eventID
    const payload = req.body;
    const user_id = req.userID

 
    const event = await EventModel.findOne({_id : eventID})
    if(event?.user_id !== user_id){
        res.send({"message" : `You are not userised to do this`})
    }
    else{
        await EventModel.findByIdAndUpdate(eventID, payload) 
        res.send({"message" : `todo ${req.params.eventID} successfully updated`})
    }  
})


eventRouter.delete("/:eventID", async (req, res) => {
        const eventID = req.params.eventID;
        const user_id = req.userID
        const event = await EventModel.findOne({_id : eventID})
        const event_user_id = event.user_id
        if(user_id === event_user_id){
            await EventModel.findByIdAndDelete(eventID)
            res.send({message : "deleted successfully"})
        }
        else{
            res.send({message : "Not userised"})
        }
})





module.exports = {eventRouter}