"use server"

import { revalidatePath } from "next/cache";
import TeamModel from "@/lib/models/team.model";
import { connectToDb } from "@/lib/utils/connectDB";

export const deleteTeam = async (teamId: string) => {
    await connectToDb();

    try {
        const result = await TeamModel.findByIdAndDelete(teamId);
        if (!result) {
            return { success: false, message: "Member not found" };
        }

        revalidatePath("/admin/team");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Error deleting team member:", error);
        return { success: false, message: "Failed to delete team member" };
    }
};
