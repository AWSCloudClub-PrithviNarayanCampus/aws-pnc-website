import { NextResponse } from "next/server";
import TeamModel from "@/lib/models/team.model";
import { connectToDb } from "@/lib/utils/connectDB";

export async function GET(request: Request, { params }: { params: Promise<{ teamId: string }> }) {
    const { teamId } = await params;
    await connectToDb();

    try {
        const member = await TeamModel.findById(teamId);
        return NextResponse.json({ member });
    } catch (error) {
        console.error("Failed to fetch team member", error);
        return NextResponse.json({ error: "Failed to fetch team member" }, { status: 500 });
    }
}
