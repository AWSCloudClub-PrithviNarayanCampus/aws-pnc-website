import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

interface EventCardProps {
    eventId: string;
    title: string
    date: string
    location: string
    description: string
    isUpcoming?: boolean
}

export function EventCard({eventId, title, date, location, description, isUpcoming = false }: EventCardProps) {
    return (
        <Link href={`/events/${eventId}`}>
            <Card className={isUpcoming ? "border-orange-200" : ""}>
                <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{title}</h4>
                        {isUpcoming && <Badge variant="secondary">Upcoming</Badge>}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {date}
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {location}
                        </div>
                    </div>
                    <p className="text-sm mb-3">{description}</p>
                </CardContent>
            </Card>
        </Link>
    )
}
