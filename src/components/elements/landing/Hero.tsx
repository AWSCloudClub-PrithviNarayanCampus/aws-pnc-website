// import { buttonVariants } from "@/components/ui/button"
// import { cn } from "@/lib/utils"
// import Image from "next/image"
// import Link from "next/link"

// export function Hero() {
//     return (
//         <section className="py-20 px-4">
//             <div className="container mx-auto text-center">
//                 <div className="flex justify-center mb-6">
//                     <div className="mr-4 flex">
//                         <Link href="/" className="mr-6 flex items-center space-x-2 px-3">
//                             <Image
//                                 src={"/logo.png"}
//                                 alt="AWS Cloud Club PNC Logo"
//                                 width={160}
//                                 height={160}
//                                 className="w-40 h-40 rounded-full"
//                             />
//                         </Link>
//                     </div>
//                 </div>
//                 <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0073BB]">AWS Cloud Club</h1>
//                 <p className="text-3xl text-muted-foreground mb-4">Prithvi Narayan Campus</p>
//                 <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
//                     Empowering students with cloud computing knowledge and AWS skills. Join us to learn, build, and innovate with
//                     <span className="text-[#0073BB]"> cloud technologies.</span>
//                 </p>
//                 <div className="flex gap-4 justify-center">
//                     <Link href={"https://www.meetup.com/aws-cloud-club-at-prithvi-narayan-campus/"} className={cn(buttonVariants({ variant: "default", size: "lg" }), "bg-[#0073BB]")}>Join Our Club</Link>
//                     <Link href={"/blogs"} className={buttonVariants({ variant: "outline", size: "lg" })}>
//                         Learn More
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     )
// }


"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        // Show popup only once per user session
        const hasVisited = localStorage.getItem("hasVisitedAWSCC")
        if (!hasVisited) {
            setShowPopup(true)
            localStorage.setItem("hasVisitedAWSCC", "true")
        }
    }, [])

    return (
        <>
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <div className="mr-4 flex">
                            <Link href="/" className="mr-6 flex items-center space-x-2 px-3">
                                <Image
                                    src={"/logo.png"}
                                    alt="AWS Cloud Club PNC Logo"
                                    width={160}
                                    height={160}
                                    className="w-40 h-40 rounded-full"
                                />
                            </Link>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0073BB]">AWS Cloud Club</h1>
                    <p className="text-3xl text-muted-foreground mb-4">Prithvi Narayan Campus</p>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Empowering students with cloud computing knowledge and AWS skills. Join us to learn, build, and innovate with
                        <span className="text-[#0073BB]"> cloud technologies.</span>
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href={"https://www.meetup.com/aws-cloud-club-at-prithvi-narayan-campus/"}
                            className={cn(buttonVariants({ variant: "default", size: "lg" }), "bg-[#0073BB]")}
                        >
                            Join Our Club
                        </Link>
                        <Link href={"/blogs"} className={buttonVariants({ variant: "outline", size: "lg" })}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Popup Modal */}
            <Dialog open={showPopup} onOpenChange={setShowPopup}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold text-[#0073BB]">🚀 AWS-SCD Pokhara is Happening!</DialogTitle>
                        <DialogDescription className="mt-2 text-base text-muted-foreground">
                            Don’t miss the biggest AWS Student Community Day event in Pokhara!
                            Connect, learn, and collaborate with cloud enthusiasts and experts.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 flex justify-end gap-3">
                        <Button variant="outline" onClick={() => setShowPopup(false)}>Close</Button>
                        <Link
                            href="https://aws-scd.vercel.app"
                            className={cn(buttonVariants({ variant: "default" }), "bg-[#0073BB]")}
                        >
                            Learn More
                        </Link>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

