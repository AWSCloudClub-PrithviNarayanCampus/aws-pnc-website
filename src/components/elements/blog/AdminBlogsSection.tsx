import { AdminBlogPost } from "./AdminBlogPost"
import { BlogCategories } from "./BlogCategory"

interface AdminBlogsSectionProps {
    blogs: Blog[]
}
export function AdminBlogsSection({
    blogs
}: AdminBlogsSectionProps) {
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
                    {
                        blogs && blogs.length > 0 ? (
                            blogs.map((post, index) => (
                                <AdminBlogPost key={index} {...post} />
                            ))
                        ) : (
                            <div>
                                No Blogs found
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
