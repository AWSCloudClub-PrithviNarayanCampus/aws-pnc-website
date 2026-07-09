"use server"

import { revalidatePath } from "next/cache";
import TeamModel from "@/lib/models/team.model";
import { connectToDb } from "@/lib/utils/connectDB";

export const updateTeam = async (teamId: string, teamData: Partial<CreateTeamMember>) => {
    await connectToDb();

    try {
        await TeamModel.findByIdAndUpdate(teamId, teamData, { new: true });
        revalidatePath("/admin/team");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Error updating team member:", error);
        return { success: false, message: "Failed to update team member" };
    }
};
