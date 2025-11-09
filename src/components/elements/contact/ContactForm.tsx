"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import toast from "react-hot-toast"
import { createContact } from "@/lib/actions/contact/createContact"
import { Send, Loader2 } from "lucide-react"

export function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async () => {
        if (!name || !email || !subject || !message) {
            toast.error("Please fill in all fields!")
            return
        }

        setIsLoading(true)

        const messageData = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }

        try {
            const response = await createContact({ contactData: messageData })

            if (response?.success) {
                setName("")
                setEmail("")
                setSubject("")
                setMessage("")
                toast.success("Thank you for your message! We'll get back to you soon.")
            } else {
                toast.error("Something went wrong. Please try again.")
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to send message. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50">
                <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        Send us a Message
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground mt-2">
                        We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 px-8 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                                Full Name
                            </Label>
                            <Input
                                id="name"
                                value={name}
                                placeholder="Enter your full name"
                                onChange={(e) => setName(e.target.value)}
                                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                value={email}
                                type="email"
                                placeholder="your.email@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                            Subject
                        </Label>
                        <Input
                            id="subject"
                            value={subject}
                            placeholder="What's this regarding?"
                            onChange={(e) => setSubject(e.target.value)}
                            className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            value={message}
                            placeholder="Tell us more about your inquiry..."
                            rows={5}
                            onChange={(e) => setMessage(e.target.value)}
                            className="resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                            disabled={isLoading}
                        />
                    </div>

                    <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending Message...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                            </>
                        )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                        We typically respond within 24 hours during business days.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
