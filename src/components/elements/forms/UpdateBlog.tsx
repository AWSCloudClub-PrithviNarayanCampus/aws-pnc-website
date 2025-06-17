"use client"
import React, { useState } from 'react'
import QuilEditor from '../editor/QuillEditor'
import { updateBlog } from '@/lib/actions/blog/updateBlog'
import { Button, buttonVariants } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { ArrowLeft, Save } from 'lucide-react'
import { updatePublish } from '@/lib/actions/blog/updatePublish'
import Link from 'next/link'
import { getBlog } from '@/lib/actions/blog/getBlog'
import { useQuery, useQueryClient } from '@tanstack/react-query'

interface UpdateBlogProps {
    blogId: string
    blogData: Blog
}
const UpdateBlog = ({
    blogId,
    blogData
}: UpdateBlogProps) => {
    const [editorContent, setEditorContent] = useState(() => blogData?.textContent || "")
    const queryClient = useQueryClient()
    const { data: response } = useQuery({
        queryKey: ["get-blog"],
        queryFn: () => getBlog(blogId)
    })
    async function handelUpdate() {
        const updatedBlogData = {
            blogId: blogId,
            textContent: editorContent,
        }
        const response = await updateBlog({ updateBlogData: updatedBlogData })
        if (!response?.status) {
            toast.error("something went wrong!");
        }
        toast.success("Saved successfully!")
        queryClient.invalidateQueries({ queryKey: ["get-blog", blogId] })
    }
    async function handlePublish() {
        const updatePublishData = {
            blogId: blogId,
            hasPublished: !blogData.hasPublished
        }
        const response = await updatePublish({ updateBlogData: updatePublishData })
        if (!response?.status) {
            toast.error("something went wrong!");
        }
        toast.success("Blog published successfully!")
        queryClient.invalidateQueries({ queryKey: ["get-blog", blogId] })
    }
    if (!response?.success) {
        return <div>{response?.message}</div>
    }
    return (
        <div>
            <Link
                href={"/admin/blogs"}
                className={buttonVariants({ variant: "outline" })}
            >
                <ArrowLeft /> Go Back
            </Link>
            <header className='w-full flex justify-end gap-5'>
                <Button onClick={handelUpdate}><Save /> Save</Button>
                <Button onClick={handlePublish}>
                    {blogData.hasPublished ? "published" : "publish"}
                </Button>
            </header>
            <main>
                <div className="col-span-2 flex flex-col gap-5">
                    <h1 className='text-2xl'>Blog Content</h1>
                    <QuilEditor
                        onChange={setEditorContent}
                        initialData={blogData?.textContent}
                    />
                </div>
            </main>
        </div>
    )
}

export default UpdateBlog
