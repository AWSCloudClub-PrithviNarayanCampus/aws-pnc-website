"use server"

import { authOptions } from "@/lib/utils/auth"
import { getServerSession } from "next-auth"
import { getUser } from "./getUser";

export const getSessionUser = async () => {
    const session = await getServerSession(authOptions);
    if (!session) return null
    const uData = await getUser(session.user.id);
    const user = uData as User;
    return user;
}