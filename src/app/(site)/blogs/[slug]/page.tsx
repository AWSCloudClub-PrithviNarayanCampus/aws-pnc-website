import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CalendarDays, User } from "lucide-react"
import { getBlogBySlug } from "@/lib/actions/blog/getBlogBySlug"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const response = await getBlogBySlug(slug)
    const blog = response.formattedBlogData

    if (!blog || !blog.hasPublished) {
        notFound()
    }

    return (
        <main>
            <Link
                href={"/blogs"}
                className={cn(buttonVariants({ variant: "outline" }), "m-4")}
            >
                <ArrowLeft /> Go Back
            </Link>
            <article className="min-h-screen bg-background">
                <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
                    <Image
                        src={blog.headerImageUrl[0] || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
                    <div className="mb-4">
                        <Badge variant="secondary" className="text-sm">
                            {blog.category}
                        </Badge>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">{blog.title}</h1>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{blog.meta_description}</p>

                    <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                                Published on{" "}
                                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                        </div>
                        {blog.createdAt !== blog.updatedAt && (
                            <div className="text-sm text-muted-foreground">
                                Updated on{" "}
                                {new Date(blog.updatedAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </div>
                        )}
                    </div>

                    <div
                        className="prose prose-gray max-w-none dark:prose-invert prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-6 prose-p:leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: blog.textContent }}
                    />

                    <div className="mt-12 pt-8 border-t">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="text-sm text-muted-foreground">Article ID: {blog.blogId}</div>
                            <div className="text-sm text-muted-foreground">Slug: {blog.slug}</div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}
