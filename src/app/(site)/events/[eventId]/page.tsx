import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card"
import {
    ArrowLeft,
    Calendar,
    MapPin,
    Clock,
} from "lucide-react"
import Link from "next/link"
import { getEvent } from "@/lib/actions/event/getEvent"
import { getEvents } from "@/lib/actions/event/getEvents"
import GuestSpeakerCard from "@/components/elements/event/GuestSpeakerCard"

export const revalidate = 60;

export async function generateStaticParams() {
    const { data } = await getEvents()

    return (
        data
            ?.map(({ eventId }) => ({ eventId }))
            .slice(0, 100)
        ?? []
    );
}

export default async function EventDetailPage({
    params,
}: {
    params: Promise<{ eventId: string }>
}) {
    const { eventId } = await params;
    console.log(eventId)
    const response = await getEvent(eventId)
    if (!response.success) return <div>{response.message}</div>
    const event = response.formattedEventData;

    if (!event) {
        notFound()
    }

    const getEventTypeColor = (type: string) => {
        switch (type.toLowerCase()) {
            case "upcoming":
            case "upcomming":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            case "live":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            case "completed":
                return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
            default:
                return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
        }
    }
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
                <div className="mb-6">
                    <Button variant="ghost" asChild>
                        <Link href="/#events">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Events
                        </Link>
                    </Button>
                </div>

                <div className="mb-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                            <Badge className={`mb-3 ${getEventTypeColor(event.eventType)}`}>
                                <Clock className="h-3 w-3 mr-1" />
                                {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
                            </Badge>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-[#0073BB]">{event.eventTitle}</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">{event.eventDescription}</p>
                        </div>
                        {/* <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </Button> */}
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-4 mb-8">
                    <div className="col-span-4">
                        {
                            event.guest && event.guestProfile && (
                                <GuestSpeakerCard
                                    event={{
                                        guest: event.guest,
                                        guestProfile: event.guestProfile,
                                    }}
                                />
                            )

                        }
                    </div>
                    <div className="col-span-2">
                        <Card>
                            <CardHeader className="pb-3 ">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold">Venue</h3>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <span className="font-medium capitalize">{event.venue}</span>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-2">
                        <Card>
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold">Scheduled For</h3>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <span className="font-medium">{event.eventDate}</span>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Card className="mb-8">
                    <CardHeader>
                        <h2 className="text-2xl font-semibold">Event Details</h2>
                    </CardHeader>
                    <CardContent className="overflow-hidden">
                        <div
                            className="prose prose-gray max-w-none dark:prose-invert prose-lg prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                            dangerouslySetInnerHTML={{ __html: event.deliverables }}
                        />
                    </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-4">
                    {event.eventType.toLowerCase() === "upcomming" || event.eventType.toLowerCase() === "upcoming" ? (
                        <>
                            <Link href={event.eventLink}>
                                <Button size="lg" className="flex-1">
                                    Register for Event
                                </Button>
                            </Link>
                            <Link href={event.eventLink}>
                                <Button size="lg" className="flex-1">
                                    Complete RSVP
                                </Button>
                            </Link>
                            <Link href={"https://www.meetup.com/aws-cloud-club-at-prithvi-narayan-campus/"}>
                                <Button size="lg" className="flex-1">
                                    Join our Meetup Group
                                </Button>
                            </Link>
                        </>
                    ) : event.eventType.toLowerCase() === "completed" ? (
                        <div className="flex gap-5">
                            <Link href={"/gallery"}>
                                <Button size="lg" className="flex-1">
                                    View Recordings
                                </Button>
                            </Link>
                            <Link href={"https://www.meetup.com/aws-cloud-club-at-prithvi-narayan-campus/"}>
                                <Button size="lg" className="flex-1">
                                    Join our Meetup Group
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <Link href={"/"}>
                            <Button size="lg" className="flex-1">
                                Learn More
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}