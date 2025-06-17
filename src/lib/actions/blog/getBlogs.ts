"use server"

import BlogModel from "@/lib/models/blog.model";
import { connectToDb } from "@/lib/utils/connectDB";

export const getAllblogs = async () => {
    await connectToDb();
    try {
        const blogData = await BlogModel.find();

        if (!blogData) {
            return { message: "404" };
        }

        const formattedBlogData: Blog[] = blogData.map((blog) => ({
            blogId: blog._id.toString(),
            slug: blog.slug,
            title: blog.title,
            meta_description: blog.meta_description,
            category: blog.category,
            author: blog.author,
            headerImageUrl: blog.headerImageUrl,
            textContent: blog.textContent,
            hasPublished: blog.hasPublished,
            createdAt: blog.createdAt.toISOString().slice(0, 10),
            updatedAt: blog.updatedAt.toISOString().slice(0, 10),
        }));

        return { data: formattedBlogData || [], success: true };
    } catch (error) {
        console.log(error);
        return { message: "Error fetching blogs", success: false };
    }
};
