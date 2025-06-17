import { CustomSidebar } from "@/components/elements/sidebars/CustomSidebar"
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
            <div className="flex h-screen bg-gray-50">
                <CustomSidebar user={user} />

                <main className="flex-1 overflow-auto lg:ml-0">
                    <div className="pt-16 lg:pt-0 min-h-full">{children}</div>
                </main>
            </div>
        </NextAuthSessionProvider >
    )
}

export default ApplicationLayout