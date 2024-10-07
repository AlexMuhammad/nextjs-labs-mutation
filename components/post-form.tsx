"use client";

import { useActionState } from "react";
import FormSubmit from "./form-submit";
import { useFormState } from "react-dom";

interface PostFormProps {
  action: any;
}

const PostForm = ({ action }: PostFormProps) => {
  const [state, formAction] = useFormState(action, { errors: [] });

  return (
    <div className="max-w-xl mx-auto">
      <h1>Create Post Data</h1>
      <form action={formAction}>
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
        <div>
          {state.errors && (
            <ul>
              {state.errors.map((error) => (
                <li className="text-red-600" key={error}>
                  {error}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
};

export default PostForm;
