"use server"

import EventModel from "@/lib/models/events.model"
import { connectToDb } from "@/lib/utils/connectDB"

interface UpdateEventStatusProps {
    updateBlogData: {
        eventType: boolean,
        eventId: string
    }
}

export const updateEventStatus = async ({
   updateBlogData
}: UpdateEventStatusProps) => {
    await connectToDb()
    try {
        await EventModel.findByIdAndUpdate(
            { _id: updateBlogData.eventId },
            {
                eventType: updateBlogData.eventType,
            }, {
            new: true,
        }
        )
        return { status: "200 0k!" }
    } catch (error) {
        console.log(error)
        console.log("something went wrong in the db: ", error)
    }
}
