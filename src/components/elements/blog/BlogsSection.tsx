"use client"
import { useQuery } from "@tanstack/react-query"
import { BlogCategories } from "./BlogCategory"
import { BlogPost } from "./BlogPost"
import { getPublishedBlogs } from "@/lib/actions/blog/getPublishedBlogs"


export function BlogsSection() {
    const { data: response } = useQuery({
        queryKey: ["get-blogs"],
        queryFn: () => getPublishedBlogs()
    })
    const blogPosts = response?.data as Blog[]
    return (
        <section id="blogs" className="py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Blogs</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Read our latest articles and insights about cloud computing
                    </p>
                </div>

                <BlogCategories />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <BlogPost key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    )
}
