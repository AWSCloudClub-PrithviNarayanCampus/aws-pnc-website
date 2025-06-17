import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"


export function AdminBlogPost(blogData: Blog) {
    return (
        <Link href={`/admin/blog/${blogData.blogId}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative aspect-video">
                    <Image src={blogData.headerImageUrl[0] || "/placeholder.svg"} alt={blogData.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                            {blogData.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{blogData.createdAt}</span>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2">{blogData.title}</h3>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                        Read More →
                    </Button>
                </CardContent>
            </Card>
        </Link>
    )
}
