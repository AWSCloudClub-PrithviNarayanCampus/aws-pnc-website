"use server"

import BlogModel from "@/lib/models/blog.model";
import { connectToDb } from "@/lib/utils/connectDB";
interface CreateBlogProps {
    blogData: CreateBlog
}
export const createBlog = async ({
    blogData
}: CreateBlogProps) => {
    await connectToDb();
    try {
        const createdBlog = await BlogModel.create({
            title: blogData.title,
            meta_description: blogData.meta_description,
            slug: blogData.slug,
            category: blogData.category,
            author: blogData.author,
            headerImageUrl: blogData.headerImageUrl,
            textContent: "",
        })
        if (!createdBlog) return null
        return { success: true, blogId: createdBlog._id.toString() }
    } catch (error) {
        console.log("error occured: ", error);
        console.log(error);
    }
}