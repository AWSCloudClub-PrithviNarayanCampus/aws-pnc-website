import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
    CalendarDays,
    User
} from "lucide-react"
import { getPublishedBlogs } from "@/lib/actions/blog/getPublishedBlogs"

export default async function BlogListPage() {
    const response = await getPublishedBlogs()
    const blogs = response.data as Blog[]

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Blogs</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover insights, tutorials, and the latest trends in web development
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <article key={blog.blogId} className="group">
                            <Link href={`/blogs/${blog.slug}`}>
                                <div className="space-y-4">
                                    <div className="relative aspect-video overflow-hidden rounded-lg">
                                        <Image
                                            src={blog.headerImageUrl[0] || "/placeholder.svg"}
                                            alt={blog.title}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <Badge variant="secondary" className="text-xs">
                                            {blog.category}
                                        </Badge>

                                        <h2 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                                            {blog.title}
                                        </h2>

                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                            {blog.meta_description}
                                        </p>

                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <User className="h-3 w-3" />
                                                <span>{blog.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <CalendarDays className="h-3 w-3" />
                                                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
