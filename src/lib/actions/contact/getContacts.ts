"use server"

import ContactModel from "@/lib/models/contact.model";
import { connectToDb } from "@/lib/utils/connectDB";

export const getContacts = async () => {
    await connectToDb();
    try {
        const contactData = await ContactModel.find();

        if (!contactData) {
            return { message: "404" };
        }
        const formattedContactData = contactData.map(contact => ({
            _id: contact._id.toString(),
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            message: contact.message,
            createdAt: contact.createdAt.toString().slice(0, 10)
        }));

        return { data: formattedContactData || [], success: true };
    } catch (error) {
        console.log(error);
        return { message: "Error fetching blogs", success: false };
    }
};
