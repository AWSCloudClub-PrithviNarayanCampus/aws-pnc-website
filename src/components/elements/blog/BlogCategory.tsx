import { Badge } from "@/components/ui/badge"

const categories = ["All", "AWS Basics", "Tutorials", "Best Practices", "Case Studies", "News"]

export function BlogCategories() {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
                <Badge
                    key={category}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                >
                    {category}
                </Badge>
            ))}
        </div>
    )
}
