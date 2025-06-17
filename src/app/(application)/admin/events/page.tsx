import { EventCard } from '@/components/elements/landing/EventCard';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { getEvents } from '@/lib/actions/event/getEvents'
import { Calendar, Filter, Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Page = async () => {
  const response = await getEvents();
  if (!response.success) return <div>{response.message}</div>
  const events = response.data || [];
  const upcomingEvents = events.filter(
    (event) => event.eventType.toLowerCase() === "upcoming" || event.eventType.toLowerCase() === "upcomming",
  )
  const completedEvents = events.filter((event) => event.eventType.toLowerCase() === "completed")
  const otherEvents = events.filter(
    (event) => !["upcoming", "upcomming", "completed"].includes(event.eventType.toLowerCase()),
  )
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Events</h1>
            <p className="text-muted-foreground">Discover and join our upcoming events, workshops, and webinars</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Link href="/admin/create-event" className={buttonVariants({ variant: "default" })}>
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card rounded-lg p-4 border">
            <div className="text-2xl font-bold text-primary">{events.length}</div>
            <div className="text-sm text-muted-foreground">Total Events</div>
          </div>
          <div className="bg-card rounded-lg p-4 border">
            <div className="text-2xl font-bold text-blue-600">{upcomingEvents.length}</div>
            <div className="text-sm text-muted-foreground">Upcoming</div>
          </div>
          <div className="bg-card rounded-lg p-4 border">
            <div className="text-2xl font-bold text-green-600">{completedEvents.length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="bg-card rounded-lg p-4 border">
            <div className="text-2xl font-bold text-orange-600">{events.filter((e) => e.guest).length}</div>
            <div className="text-sm text-muted-foreground">With Guests</div>
          </div>
        </div>

        {upcomingEvents.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-blue-600" />
              <h2 className="text-2xl font-semibold">Upcoming Events</h2>
              <Badge variant="secondary">{upcomingEvents.length}</Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          </section>
        )}

        {completedEvents.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-green-600" />
              <h2 className="text-2xl font-semibold">Past Events</h2>
              <Badge variant="secondary">{completedEvents.length}</Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completedEvents.map((event) => (
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
          </section>
        )}

        {otherEvents.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-gray-600" />
              <h2 className="text-2xl font-semibold">Other Events</h2>
              <Badge variant="secondary">{otherEvents.length}</Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherEvents.map((event) => (
                <EventCard
                  eventId={event.eventId}
                  key={event.eventId}
                  title={event.eventTitle}
                  description={event.eventDescription}
                  date={event.eventDate}
                  location={event.venue}
                />
              ))}
            </div>
          </section>
        )}

        {events && events.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-4">Get started by creating your first event</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page
