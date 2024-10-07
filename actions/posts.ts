"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export async function createPost(prevState: any, formData: FormData) {
  "use server";
  const title = formData.get("title") as string;
  const image = formData.get("image") as File;
  const content = formData.get("content") as string;

  let errors: string[] = [];

  console.log("image", image);
  if (!title || title.trim().length === 0) {
    errors.push("Title is required");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required");
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        "Image upload failed, post was not created. Please try again later."
      );
    }
  }

  if (errors.length > 0) {
    return {
      errors,
    };
  }

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}
