import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileX } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center space-y-6">
                <div className="flex justify-center">
                    <FileX className="h-24 w-24 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">Blog Post Not Found</h1>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto">
                        The blog post you're looking for doesn't exist or hasn't been published yet.
                    </p>
                </div>
                <Button asChild>
                    <Link href="/blog">Back to Blog</Link>
                </Button>
            </div>
        </div>
    )
}
