import { buttonVariants } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-orange-500" />
                        <span>awscloudclub.pncampus@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-orange-500" />
                        <span>+977-9860610652</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-orange-500" />
                        <span>Prithvi Narayan Campus, Pokhara, Nepal</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                    <Link
                        href="https://www.facebook.com/profile.php?id=61576565671254"
                        className={buttonVariants({ variant: "outline" })}>
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/aws-cloud-club-prithvi-narayan-campus/"
                        className={buttonVariants({ variant: "outline" })}>
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                    </Link>
                    <Link
                        href="https://github.com/AWSCloudClub-PrithviNarayanCampus/"
                        className={buttonVariants({ variant: "outline" })}>
                        <Github className="h-4 w-4 mr-2" />
                        Github
                    </Link>
                </div>
            </div>
        </div>
    )
}
