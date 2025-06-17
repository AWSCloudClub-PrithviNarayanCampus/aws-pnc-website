declare type CreateEvent = {
    eventTitle: string;
    eventDescription: string;
    eventType: string;
    eventDate: string;
    deliverables: string;
    guest: string;
    guestProfile: string;
    venue: string;
}

declare type Event = {
    eventId: string;
    eventTitle: string;
    eventDescription: string;
    eventType: string;
    eventDate: string;
    deliverables: string;
    guest: string;
    guestProfile: string;
    venue: string;
    createdAt: string;
}