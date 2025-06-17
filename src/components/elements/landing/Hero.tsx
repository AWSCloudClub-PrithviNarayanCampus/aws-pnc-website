import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <div className="mr-4 flex">
                        <Link href="/" className="mr-6 flex items-center space-x-2 px-3">
                            <Image
                                src={"/logo.png"}
                                alt="AWS Cloud Club PNC Logo"
                                width={980}
                                height={967}
                                className="w-40 h-40 rounded-full"
                            />
                        </Link>
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">AWS Cloud Club</h1>
                <p className="text-3xl text-muted-foreground mb-4">Prithvi Narayan Campus</p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Empowering students with cloud computing knowledge and AWS skills. Join us to learn, build, and innovate with
                    cloud technologies.
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href={"/#contact"} className={buttonVariants({ variant: "default", size: "lg" })}>Join Our Club</Link>
                    <Button variant="outline" size="lg">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    )
}
