import UpdateBlog from '@/components/elements/forms/UpdateBlog';
import { getBlog } from '@/lib/actions/blog/getBlog';
import { getSessionUser } from '@/lib/actions/user/getSessionUser';
import { redirect } from 'next/navigation';
import React from 'react'

type Params = Promise<{ bId: string }>;
const Page = async (props: { params: Params }) => {
    const user = await getSessionUser();
    if (!user) redirect("/login");
    const params = await props.params;
    const blogId = params.bId;
    const response = await getBlog(blogId)
    const blogData = response.formattedBlogData as Blog;
    if (!response.success) return <div>{response.message}</div>
    return <UpdateBlog blogId={blogId} blogData={blogData} />
}

export default Page
