import { getSessionUser } from "@/lib/actions/user/getSessionUser"
import NextAuthSessionProvider from "@/lib/providers/NextAuthSessionUser"
import { redirect } from "next/navigation"

const ApplicationLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {
    const user = await getSessionUser();
    if (!user) redirect("/login")
    if (user.role == "user") redirect("/dashboard")
    return (
        <NextAuthSessionProvider>
            <main>
                <div className="w-full"> 
                    {children}
                </div>
            </main>
        </NextAuthSessionProvider >
    )
}

export default ApplicationLayout