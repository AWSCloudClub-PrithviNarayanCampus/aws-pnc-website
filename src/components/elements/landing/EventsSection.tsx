import { EventCard } from "./EventCard"

const recentEvents = [
    {
        title: "AWS Fundamentals Workshop",
        date: "March 15, 2024",
        location: "Computer Lab, PNC",
        description: "Introduction to AWS services and cloud computing basics",
    },
    {
        title: "Cloud Security Seminar",
        date: "February 28, 2024",
        location: "Auditorium Hall",
        description: "Best practices for securing cloud infrastructure",
    },
    {
        title: "Serverless Architecture Talk",
        date: "February 10, 2024",
        location: "Conference Room",
        description: "Building scalable applications with AWS Lambda",
    },
]

const upcomingEvents = [
    {
        title: "AWS Solutions Architect Workshop",
        date: "April 20, 2024",
        location: "Computer Lab, PNC",
        description: "Hands-on workshop for AWS Solutions Architect certification",
    },
    {
        title: "Cloud Migration Strategies",
        date: "May 5, 2024",
        location: "Seminar Hall",
        description: "Learn how to migrate applications to the cloud",
    },
    {
        title: "AWS Community Day",
        date: "May 25, 2024",
        location: "Main Campus",
        description: "Full day event with multiple sessions and networking",
    },
]

export function EventsSection() {
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
                            {recentEvents.map((event, index) => (
                                <EventCard key={index} {...event} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Upcoming Events</h3>
                        <div className="space-y-4">
                            {upcomingEvents.map((event, index) => (
                                <EventCard key={index} {...event} isUpcoming />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
