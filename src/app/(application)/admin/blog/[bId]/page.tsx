import UpdateBlog from '@/components/elements/forms/UpdateBlog';
import { getBlog } from '@/lib/actions/blog/getBlog';
import { getSessionUser } from '@/lib/actions/user/getSessionUser';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react'

type Params = Promise<{ bId: string }>;
export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const blogId = params.bId
    const response = await getBlog(blogId)
    const data = response.formattedBlogData as Blog;

    return {
        title: data?.title,
        description: data?.meta_description,
        openGraph: {
            images: [
                {
                    url: "./opengraph-image.png",
                }
            ]
        }
    }
}

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
