import { z } from "zod";

export const BlogFormSchema = z.object({
  title: z.string().min(2, {
    message: "blog title should be atleast 2 letters.",
  }),
  meta_description: z.string(),
  slug: z.string(),
  category: z.string(),
})