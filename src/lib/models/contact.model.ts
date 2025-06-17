import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const ContactModel = mongoose.models.ContactModel || mongoose.model("ContactModel", ContactSchema);
export default ContactModel