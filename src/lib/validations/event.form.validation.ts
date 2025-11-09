import { z } from "zod";

export const EventFormSchema = z.object({
  eventTitle: z.string().min(2, {
    message: "blog title should be atleast 2 letters.",
  }),
  eventDescription: z.string(),
  eventType: z.string(),
  eventDate: z.string(),
  guest: z.array(z.string()),
  guestProfile: z.array(z.string()),
  venue: z.string(),
  eventLink: z.string(),
  rsvpLink: z.string()
})