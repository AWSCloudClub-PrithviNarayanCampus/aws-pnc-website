import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set("strictQuery", true);

    const mongoUrl = process.env.MONGODB_URL;
    if (!mongoUrl) {
        console.warn("MONGODB_URL is not set. Skipping MongoDB connection.");
        return false;
    }

    if (isConnected && mongoose.connection.readyState === 1) {
        console.log("Already connected to MongoDB");
        return true;
    }

    try {
        await mongoose.connect(mongoUrl);
        isConnected = mongoose.connection.readyState === 1;
        console.log("Connected to MongoDB", { readyState: mongoose.connection.readyState });
        return true;
    } catch (error) {
        isConnected = false;
        console.error("MongoDB connection error:", error);
        return false;
    }
};
