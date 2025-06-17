import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
    },
    email: {
        type: String,
    },
    profileImage: {
        type: String,
    },
    role: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.models.UserModel || mongoose.model("UserModel", UserSchema);
export default UserModel;

