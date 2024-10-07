import { createPost } from "@/actions/posts";
import FormSubmit from "@/components/form-submit";
import PostForm from "@/components/post-form";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";
import React from "react";

const NewPostPage = () => {
  return <PostForm action={createPost} />;
};

export default NewPostPage;
