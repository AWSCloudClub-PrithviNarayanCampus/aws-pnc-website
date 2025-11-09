import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, ExternalLink } from "lucide-react"
import Link from "next/link"

interface GuestSpeakerCardProps {
    event: {
        guest: string[],
        guestProfile: string[]
    }
}

export default function GuestSpeakerCard({
    event
}: GuestSpeakerCardProps) {
    return (
        <Card className="w-full">
            <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg text-[#0073BB] font-semibold">Guest Speaker{event.guest?.length > 1 ? "s" : ""}</h3>
                        <p className="text-sm text-muted-foreground">
                            {event.guest?.length || 0} speaker{event.guest?.length !== 1 ? "s" : ""} featured
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-3">
                {event.guest?.map((guestName: string, index: number) => {
                    const profileUrl = event.guestProfile?.[index]

                    return (
                        <div
                            key={index}
                            className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-[#0073BB]">
                                    {guestName
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")
                                        .slice(0, 2)}
                                </div>
                                <span className="font-medium">{guestName}</span>
                            </div>

                            {profileUrl ? (
                                <Link
                                    href={profileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 rounded-md px-2 py-1 text-sm text-primary transition-colors hover:bg-primary/10"
                                >
                                    <span className="text-xs text-[#0073BB]">View</span>
                                    <ExternalLink className="h-3 w-3 text-[#0073BB]" />
                                </Link>
                            ) : (
                                <Badge variant="secondary" className="text-xs">
                                    No Profile
                                </Badge>
                            )}
                        </div>
                    )
                })}

                {(!event.guest || event.guest.length === 0) && (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                        <User className="h-12 w-12 text-muted-foreground/50 mb-2" />
                        <p className="text-sm text-muted-foreground">No guest speakers announced yet</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
