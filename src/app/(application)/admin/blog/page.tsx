import { CreateBlog } from '@/components/elements/forms/CreateBlog';
import { getSessionUser } from '@/lib/actions/user/getSessionUser'
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async () => {
    const user = await getSessionUser();
    if (!user) redirect("/login")
    return <CreateBlog author={user.fullname} />
}
export default Page
