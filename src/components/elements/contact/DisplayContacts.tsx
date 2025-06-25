import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Calendar, Hash, Mail, MessageSquare, User } from 'lucide-react'
import React from 'react'

interface DisplayContactsProps {
    contact: Contact
}

const DisplayContacts = ({
    contact,
}: DisplayContactsProps) => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <Card className="w-full">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold">Contact Details</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {(contact.createdAt)}
                        </Badge>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    {/* Contact ID */}
                    <div className="flex items-center gap-3">
                        <Hash className="w-4 h-4 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Contact ID</p>
                            <p className="text-sm font-mono bg-muted px-2 py-1 rounded">{contact._id}</p>
                        </div>
                    </div>

                    <Separator />

                    {/* Name */}
                    <div className="flex items-center gap-3">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Name</p>
                            <p className="text-lg font-semibold">{contact.name}</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Email</p>
                            <a href={`mailto:${contact.email}`} className="text-lg text-blue-600 hover:text-blue-800 hover:underline">
                                {contact.email}
                            </a>
                        </div>
                    </div>

                    <Separator />

                    {/* Subject */}
                    <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Subject</p>
                        <p className="text-lg font-medium">{contact.subject}</p>
                    </div>

                    {/* Message */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <MessageSquare className="w-4 h-4 text-muted-foreground" />
                            <p className="text-sm font-medium text-muted-foreground">Message</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{contact.message}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default DisplayContacts
