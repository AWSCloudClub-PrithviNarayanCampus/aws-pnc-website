import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
    description: {
        type: String,
    },
    linkedIn: {
        type: String,
    },
    facebook: {
        type: String,
    },
    instagram: {
        type: String,
    },
    twitter: {
        type: String,
    },
    github: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const TeamModel = mongoose.models.TeamModel || mongoose.model("TeamModel", TeamSchema);
export default TeamModel