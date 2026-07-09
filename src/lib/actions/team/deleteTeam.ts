"use server"

import { revalidatePath } from "next/cache";
import TeamModel from "@/lib/models/team.model";
import { connectToDb } from "@/lib/utils/connectDB";

export const deleteTeam = async (teamId: string) => {
    await connectToDb();

    try {
        await TeamModel.findByIdAndDelete(teamId);
        revalidatePath("/admin/team");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Error deleting team member:", error);
        return { success: false, message: "Failed to delete team member" };
    }
};
