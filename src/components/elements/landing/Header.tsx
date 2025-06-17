import Image from "next/image"
import Link from "next/link"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2 px-3">
                        <Image
                            src={"/logo.png"}
                            alt="AWS Cloud Club PNC Logo"
                            width={980}
                            height={967}
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="font-bold">AWS Cloud Club-PNC</span>
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
                    <Link href="/blogs" className="hover:text-foreground/80">
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
