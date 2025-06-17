import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function ContactInfo() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-orange-500" />
                        <span>awsclub@pnc.edu.np</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-orange-500" />
                        <span>+977-1-4123456</span>
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
                    <Button variant="outline" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                    </Button>
                </div>
            </div>
        </div>
    )
}
