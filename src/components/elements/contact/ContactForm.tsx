import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium mb-2 block">Name</label>
                        <Input placeholder="Your name" />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="your.email@example.com" />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="What's this about?" />
                </div>
                <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Your message..." rows={4} />
                </div>
                <Button className="w-full">Send Message</Button>
            </CardContent>
        </Card>
    )
}
