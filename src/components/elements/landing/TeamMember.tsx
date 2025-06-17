import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

interface TeamMemberProps {
    name: string
    role: string
    image: string
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
    return (
        <Card className="text-center">
            <CardContent className="pt-6">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-muted-foreground">{role}</p>
                <div className="flex justify-center gap-2 mt-4">
                    <Button variant="ghost" size="sm">
                        <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
