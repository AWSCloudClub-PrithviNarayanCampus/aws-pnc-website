"use server"

import EventModel from "@/lib/models/events.model";
import { connectToDb } from "@/lib/utils/connectDB";
interface CreateEventProps {
    eventData: CreateEvent
}
export const createEvent = async ({
    eventData
}: CreateEventProps) => {
    await connectToDb();
    try {
        const createdEvent = await EventModel.create({
            eventTitle: eventData.eventTitle,
            eventDescription : eventData.eventDescription,
            eventType: eventData.eventType,
            eventDate: eventData.eventDate,
            deliverables: eventData.deliverables,
            guest: eventData.guest,
            guestProfile: eventData.guestProfile,
            venue: eventData.venue,
        })
        if (!createdEvent) return null
        return { success: true, blogId: createdEvent._id.toString() }
    } catch (error) {
        console.log("error occured: ", error);
        console.log(error);
    }
}