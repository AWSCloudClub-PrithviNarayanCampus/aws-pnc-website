"use server"

import BlogModel from "@/lib/models/blog.model";

export const getBlog = async (blogId: string) => {
    try {
        const blogData = await BlogModel.findOne({ _id: blogId });
        if (!blogData) {
            return { message: "404" };
        }
        const formattedBlogData: Blog = {
            blogId: blogData._id.toString(),
            slug: blogData.slug,
            title: blogData.title,
            meta_description: blogData.meta_description,
            category: blogData.category,
            author: blogData.author,
            headerImageUrl: blogData.headerImageUrl || [],
            textContent: blogData.textContent,
            hasPublished: blogData.hasPublished,
            createdAt: new Date(blogData.createdAt).toISOString(),
            updatedAt: blogData.updatedAt.toISOString()
        };
        return {
            success: true,
            formattedBlogData
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        return { message: "something went wrong" };
    }
}
