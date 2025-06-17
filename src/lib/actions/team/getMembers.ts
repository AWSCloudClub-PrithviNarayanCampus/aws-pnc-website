"use server"

import TeamModel from "@/lib/models/team.model";
import { connectToDb } from "@/lib/utils/connectDB";

export const getMembers = async () => {
    await connectToDb();
    try {
        const teamData = await TeamModel.find();

        if (!teamData) {
            return { message: "404" };
        }

        const formattedTeamData: Team[] = teamData.map((team) => ({
            _id: team._id.toString(),
            fullname: team.fullname,
            role: team.role,
            description: team.description,
            order: team.order,
            image: team.image || [],
            linkedIn: team.linkedIn,
            facebook: team.facebook,
            instagram: team.instagram,
            twitter: team.twitter,
            github: team.github,
            createdAt: team.createdAt.toString().slice(0, 10)
        }));

        return { data: formattedTeamData || [], success: true };
    } catch (error) {
        console.log(error);
        return { message: "Error fetching blogs", success: false };
    }
};
