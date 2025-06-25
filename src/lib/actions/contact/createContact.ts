"use server"

import ContactModel from "@/lib/models/contact.model";
import { connectToDb } from "@/lib/utils/connectDB";
interface CreateContactProps {
    contactData: CreateContact
}
export const createContact = async ({
    contactData
}: CreateContactProps) => {
    await connectToDb();
    if (contactData.name === "") {
        return { success: false }
    }
    if (contactData.email === "") {
        return { success: false }
    }
    if (contactData.subject === "") {
        return { success: false }
    }
    if (contactData.message === "") {
        return { success: false }
    }
    try {
        const createdEvent = await ContactModel.create({
            name: contactData.name,
            email: contactData.email,
            subject: contactData.subject,
            message: contactData.message,
        })
        if (!createdEvent) return null
        return { success: true, blogId: createdEvent._id.toString() }
    } catch (error) {
        console.log("error occured: ", error);
        console.log(error);
    }
}