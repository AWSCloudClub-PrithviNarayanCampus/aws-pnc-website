declare type CreateEvent = {
    eventTitle: string;
    eventDescription: string;
    eventType: string;
    eventDate: string;
    deliverables: string;
    guest: string[];
    guestProfile: string[];
    venue: string;
    eventLink: string;
    rsvpLink: string;
}

declare type Event = {
    eventId: string;
    eventTitle: string;
    eventDescription: string;
    eventType: string;
    eventDate: string;
    deliverables: string;
    guest: string[];
    guestProfile: string[];
    venue: string;
    eventLink: string;
    rsvpLink: string;
    createdAt: string;
}