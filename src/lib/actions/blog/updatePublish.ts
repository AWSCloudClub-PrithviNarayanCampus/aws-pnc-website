"use server"

import BlogModel from "@/lib/models/blog.model"
import { connectToDb } from "@/lib/utils/connectDB"
import { revalidatePath } from "next/cache"


interface UpdateBlogDataProps {
    updateBlogData: {
        hasPublished: boolean,
        blogId: string
    }
}

export const updatePublish = async ({
    updateBlogData
}: UpdateBlogDataProps) => {
    await connectToDb()
    try {
        await BlogModel.findByIdAndUpdate(
            { _id: updateBlogData.blogId },
            {
                hasPublished: updateBlogData.hasPublished,
            }, {
            new: true,
        }
        )
        revalidatePath("/blogs")
        return { status: "200 0k!" }
    } catch (error) {
        console.log(error)
        console.log("something went wrong in the db: ", error)
    }
}
