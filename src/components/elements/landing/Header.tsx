"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const navigationItems = [
    { href: "/#team", label: "Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/#events", label: "Events" },
    { href: "/blogs", label: "Blogs" },
    { href: "/#contact", label: "Contact" },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="fixed top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-14 items-center justify-between">
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

                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/#team" className="hover:text-foreground/80">
                        Team
                    </Link>
                    <Link href="/gallery" className="hover:text-foreground/80">
                        Gallery
                    </Link>
                    <Link href="/#events" className="hover:text-foreground/80">
                        Events
                    </Link>
                    <Link href="/blogs" className="hover:text-foreground/80">
                        Blogs
                    </Link>
                    <Link href="/#contact" className="hover:text-foreground/80">
                        Contact
                    </Link>
                </nav>

                <div className="md:hidden relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9"
                        aria-label="Toggle navigation menu"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>

                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={closeMenu} />

                            {/* Mobile Menu */}
                            <div className="absolute right-0 top-full mt-2 w-48 bg-background border rounded-md shadow-lg z-50">
                                <div className="py-1">
                                    {navigationItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm hover:bg-muted transition-colors cursor-pointer"
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
