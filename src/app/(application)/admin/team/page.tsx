import { AdminTeamSection } from '@/components/elements/landing/AdminTeamSection'
import { getMembers } from '@/lib/actions/team/getMembers'
import { getSessionUser } from '@/lib/actions/user/getSessionUser'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
    const user = await getSessionUser();
    if (!user) redirect("/login")
    const response = await getMembers();
    if (!response.success) return <div>{response.message}</div>
    return <AdminTeamSection />
}

export default Page
