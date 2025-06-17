import { Button } from "@/components/ui/button"
import { Cloud } from "lucide-react"

export function Hero() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <Cloud className="h-16 w-16 text-orange-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">AWS Cloud Club</h1>
                <p className="text-3xl text-muted-foreground mb-4">Prithvi Narayan Campus</p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Empowering students with cloud computing knowledge and AWS skills. Join us to learn, build, and innovate with
                    cloud technologies.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button size="lg">Join Our Club</Button>
                    <Button variant="outline" size="lg">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    )
}
