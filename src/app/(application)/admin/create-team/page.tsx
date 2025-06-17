import { CreateTeam } from '@/components/elements/forms/CreateTeamMember';
import { getSessionUser } from '@/lib/actions/user/getSessionUser'
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async() => {
    const user = await getSessionUser();
    if (!user) redirect("/login")
    return <CreateTeam />
}

export default Page
