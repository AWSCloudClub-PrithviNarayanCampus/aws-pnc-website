import mongoose, { Schema } from "mongoose";

const EventSchema = new Schema({
    eventTitle: {
        type: String,
        required: true,
    },
    eventDescription: {
        type: String,
    },
    guest: {
        type: String,
    },
    guestProfile: {
        type: String,
    },
    eventType: {
        type: String,
        enum: ["upcomming", "completed"]
    },
    venue: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const EventModel = mongoose.models.EventModel || mongoose.model("EventModel", EventSchema);
export default EventModel