"use server"

import TeamModel from "@/lib/models/team.model";
import { connectToDb } from "@/lib/utils/connectDB";
interface CreateTeamProps {
    teamData: CreateTeamMember
}
export const createTeam = async ({
    teamData
}: CreateTeamProps) => {
    await connectToDb();
    try {
        const createdBlog = await TeamModel.create({
            fullname: teamData.fullname,
            role: teamData.role,
            email: teamData.email,
            number: teamData.number,
            address: teamData.address,
            description: teamData.description,
            order: teamData.order,
            image: teamData.image,
            linkedIn: teamData.linkedIn,
            facebook: teamData.facebook,
            instagram: teamData.instagram,
            twitter: teamData.twitter,
            github: teamData.github,
        })
        if (!createdBlog) return null
        return { success: true, blogId: createdBlog._id.toString() }
    } catch (error) {
        console.log("error occured: ", error);
        console.log(error);
    }
}