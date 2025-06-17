import { getEvents } from "@/lib/actions/event/getEvents"
import { EventCard } from "./EventCard"

export async function EventsSection() {
    const response = await getEvents();
    if (!response.success) return <div>{response.message}</div>
    const events = response.data || [];
    const upcomingEvents = events.filter(
        (event) => event.eventType.toLowerCase() === "upcoming" || event.eventType.toLowerCase() === "upcomming",
    )
    const recentEvents = events.filter((event) => event.eventType.toLowerCase() === "completed")
    return (
        <section id="events" className="py-16 px-4 bg-muted/50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Events</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Stay updated with our latest and upcoming events</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Recent Events</h3>
                        <div className="space-y-4">
                            {recentEvents.map((event) => (
                                <EventCard
                                    eventId={event.eventId}
                                    key={event.eventId}
                                    title={event.eventTitle}
                                    description={event.eventDescription}
                                    date={event.eventDate}
                                    location={event.venue}
                                    isUpcoming={false}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Upcoming Events</h3>
                        <div className="space-y-4">
                            {upcomingEvents.map((event) => (
                                <EventCard
                                    eventId={event.eventId}
                                    key={event.eventId}
                                    title={event.eventTitle}
                                    description={event.eventDescription}
                                    date={event?.eventDate}
                                    location={event.venue}
                                    isUpcoming={false}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
