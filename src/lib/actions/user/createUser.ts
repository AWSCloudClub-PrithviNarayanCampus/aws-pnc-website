"use server"

import UserModel from "@/lib/models/user.model";
import { connectToDb } from "@/lib/utils/connectDB";
import { revalidatePath } from "next/cache";
interface CreateAdminProps {
    userData: CreateUser
}
export const createUser = async ({
    userData
}: CreateAdminProps) => {
    await connectToDb();
    try {
        const createdUser = await UserModel.create({
            userId: userData.userId,
            fullname: userData.fullname,
            email: userData.email,
            profileImage: userData.profileImage,
            role: "user",
        })
        if (!createdUser) return null
        return {success: true}
    } catch (error) {
        console.log("error occured: ", error);
        console.log(error);
    }
}