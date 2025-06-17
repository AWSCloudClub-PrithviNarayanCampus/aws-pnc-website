"use server"

import EventModel from "@/lib/models/events.model";

export const getEvent = async (eventId: string) => {
    try {
        const eventData = await EventModel.findOne({ _id: eventId });
        if (!eventData) {
            return { message: "404" };
        }
        const formattedEventData = {
            eventId: eventData._id.toString(),
            eventTitle: eventData.eventTitle,
            eventDescription: eventData.eventDesctiption,
            eventType: eventData.eventType,
            eventDate: eventData.eventDate,
            deliverables: eventData.deliverables,
            guest: eventData.guest,
            guestProfile: eventData.guestProfile,
            venue: eventData.venue,
            createdAt: new Date(eventData.createdAt).toISOString(),
        };
        return {
            success: true,
            formattedEventData
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        return { message: "something went wrong" };
    }
}
