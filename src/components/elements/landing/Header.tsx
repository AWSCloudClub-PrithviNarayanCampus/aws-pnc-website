import { Cloud } from "lucide-react"
import Link from "next/link"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Cloud className="h-6 w-6 text-orange-500" />
                        <span className="font-bold">AWS Cloud Club</span>
                    </Link>
                </div>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="#team" className="hover:text-foreground/80">
                        Team
                    </Link>
                    <Link href="#gallery" className="hover:text-foreground/80">
                        Gallery
                    </Link>
                    <Link href="#events" className="hover:text-foreground/80">
                        Events
                    </Link>
                    <Link href="#blogs" className="hover:text-foreground/80">
                        Blogs
                    </Link>
                    <Link href="#contact" className="hover:text-foreground/80">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    )
}
