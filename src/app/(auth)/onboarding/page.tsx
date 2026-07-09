import { Admins } from "@/db/Admin";
import { createUser } from "@/lib/actions/user/createUser";
import { getUser } from "@/lib/actions/user/getUser";
import { authOptions } from "@/lib/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Page = async () => {
    const session = await getServerSession(authOptions)
    if (!session) redirect('/login');
    const sessionData = {
        userId: session.user.id!,
        fullname: session.user.name!,
        email: session.user.email!,
        profileImage: session.user.image!,
    }

    const isAdmin = Admins.includes(session.user.email!)
    if (isAdmin) {
        const res = await createUser({ userData: sessionData })
        if (res) redirect('/admin')
    }

    const data = await getUser(session.user.id)
    const userInfoFromDb = data as User

    if (!userInfoFromDb || "message" in userInfoFromDb) {
        await createUser({ userData: sessionData })
    }

    redirect('/')

    return (
        <div>
            Validating.....
        </div>
    )
}

export default Page