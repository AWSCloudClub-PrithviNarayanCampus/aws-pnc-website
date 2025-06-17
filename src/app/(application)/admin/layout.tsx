import { getSessionUser } from '@/lib/actions/user/getSessionUser'
import { redirect } from 'next/navigation';
import React from 'react'

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await getSessionUser();
    if (!user) redirect("/login")
    return (
        <div className="flex gap-2 max-h-[calc(100vh-5rem)]">
            <div className="w-full h-full p-2">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout
