"use server"

import UserModel from "@/lib/models/user.model";
import { connectToDb } from "@/lib/utils/connectDB";

export const getUser = async (userId: string) => {
    await connectToDb();
    try {
        const userData = await UserModel.findOne({ userId });
        if (!userData) {
            return { message: "404" };
        }
        const formattedUserData: User = {
            userId: userData.userId.toString(),
            fullname: userData.fullname,
            email: userData.email,
            profileImage: userData.profileImage,
            role: userData.role,
            createdAt: new Date(userData.createdAt).toISOString(),
        };
        return formattedUserData;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return { message: "something went wrong" };
    }
}
