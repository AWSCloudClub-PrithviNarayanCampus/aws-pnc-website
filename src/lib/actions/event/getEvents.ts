"use server"

import EventModel from "@/lib/models/events.model";
import { connectToDb } from "@/lib/utils/connectDB";

export const getEvents = async () => {
    await connectToDb();
    try {
        const eventData = await EventModel.find();

        if (!eventData) {
            return { message: "404" };
        }

        const formattedEventData = eventData.map(event => ({
            eventId: event._id.toString(),
            eventTitle: event.eventTitle,
            eventDescription: event.eventDescription,
            eventType: event.eventType,
            eventDate: event.eventDate,
            deliverables: event.deliverables,
            guest: event.guest,
            guestProfile: event.guestProfile,
            venue: event.venue,
            createdAt: event.createdAt.toString().slice(0, 10)
        }));

        return { data: formattedEventData || [], success: true };
    } catch (error) {
        console.log(error);
        return { message: "Error fetching blogs", success: false };
    }
};
