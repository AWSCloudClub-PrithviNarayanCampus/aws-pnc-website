import { Cloud } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t py-8 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
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
                    <p className="text-sm text-muted-foreground">© 2025 AWS Cloud Club-PNC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
