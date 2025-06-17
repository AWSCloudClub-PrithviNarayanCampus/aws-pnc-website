import { AdminBlogsSection } from '@/components/elements/blog/AdminBlogsSection'
import { getAllblogs } from '@/lib/actions/blog/getBlogs';
import { getSessionUser } from '@/lib/actions/user/getSessionUser'
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async () => {
    const user = await getSessionUser();
    if (!user) redirect("/login")
    const response = await getAllblogs();
    if (!response.success) return <div>{response.message}</div>
    const blogData = response.data as Blog[]
    return <AdminBlogsSection blogs={blogData} />
}

export default Page
