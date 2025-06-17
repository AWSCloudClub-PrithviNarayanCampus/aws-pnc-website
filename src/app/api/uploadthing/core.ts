import { getSessionUser } from "@/lib/actions/user/getSessionUser";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();
export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "16MB",
      maxFileCount : 5,
    },
  })
    .middleware(async () => {
      const user = await getSessionUser();
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;