"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import toast from "react-hot-toast"
import { createContact } from "@/lib/actions/contact/createContact"

export function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        const messageData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        console.log(messageData)
        const response = await createContact({ contactData: messageData })
        if (response?.success) {
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
            toast.success("Thank you for your Message. We will get back to yo soon!")
        } else {
            toast.error("Something went wrong. Make sure to fill in all fields!")
        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We&apos;ll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium mb-2 block">Name</label>
                        <Input
                            value={name}
                            placeholder="Your name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input
                            value={email}
                            type="email"
                            placeholder="your.email@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                        value={subject}
                        placeholder="What's this about?"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                        value={message}
                        placeholder="Your message..." rows={4}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <Button type="button" onClick={handleSubmit} className="w-full">Send Message</Button>
            </CardContent>
        </Card>
    )
}
