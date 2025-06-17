import { Cloud } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t py-8 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Cloud className="h-6 w-6 text-orange-500" />
                        <span className="font-bold">AWS Cloud Club - Prithvi Narayan Campus</span>
                    </div>
                    <p className="text-sm text-muted-foreground">© 2024 AWS Cloud Club PNC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
