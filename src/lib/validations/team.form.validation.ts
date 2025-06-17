import { z } from "zod";

export const TeamFormSchema = z.object({
  fullname: z.string().min(2, {
    message: "blog title should be atleast 2 letters.",
  }),
  role: z.string(),
  email: z.string(),
  number: z.string(),
  address: z.string(),
  description: z.string(),
  order: z.string(),
  linkedIn: z.string(),
  facebook: z.string(),
  instagram: z.string(),
  twitter: z.string(),
  github: z.string(),
})