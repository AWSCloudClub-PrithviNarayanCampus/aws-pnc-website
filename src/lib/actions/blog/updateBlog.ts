"use server"

import BlogModel from "@/lib/models/blog.model"
import { connectToDb } from "@/lib/utils/connectDB"


interface UpdateBlogDataProps {
    updateBlogData: {
        textContent: string,
        blogId: string
    }
}

export const updateBlog = async ({
   updateBlogData
}: UpdateBlogDataProps) => {
    await connectToDb()
    try {
        await BlogModel.findByIdAndUpdate(
            { _id: updateBlogData.blogId },
            {
                textContent: updateBlogData.textContent,
                updatedAt: new Date().toISOString()
            }, {
            new: true,
        }
        )
        return { status: "200 0k!" }
    } catch (error) {
        console.log(error)
        console.log("something went wrong in the db: ", error)
    }
}
