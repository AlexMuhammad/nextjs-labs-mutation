import FormSubmit from "@/components/form-submit";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";
import React from "react";

const NewPostPage = () => {
  async function createPost(formData: FormData) {
    "use server";
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    await storePost({
      imageUrl: "",
      title,
      content,
      userId: 1,
    });

    redirect("/feed");
  }
  return (
    <div className="max-w-xl mx-auto">
      <h1>Create Post Data</h1>
      <form action={createPost}>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" className="text-black" />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            className="text-white"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Content</label>
          <textarea
            id="content"
            name="content"
            rows={5}
            className="text-black"
          />
        </div>
        <div>
          <FormSubmit />
        </div>
      </form>
    </div>
  );
};

export default NewPostPage;
