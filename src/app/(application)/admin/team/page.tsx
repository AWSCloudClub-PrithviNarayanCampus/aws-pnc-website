import { getMembers } from '@/lib/actions/team/getMembers'
import { getSessionUser } from '@/lib/actions/user/getSessionUser'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async() => {
    const user = await getSessionUser();
    if (!user) redirect("/login")
    const response = await getMembers();
    if (!response.success) return <div>{response.message}</div>
    const memberData = response.data as Team[];
    return (
        <div>
            <Link href={"/admin/create-team"}><Plus />Create Team</Link>
            helloworld
            { 
                JSON.stringify(memberData, null, 2)
            }
        </div>
    )
}

export default Page
