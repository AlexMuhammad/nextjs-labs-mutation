import { formatDate } from "@/lib/format";
import Image from "next/image";
import React from "react";
import LikeButton from "./like-button";

function Post({ post }: any) {
  return (
    <article>
      <div className="relative h-52 w-52">
        <Image src={post.image} alt={post.title} fill />
      </div>
      <div>
        <h2>{post.title}</h2>
        <p>
          Shared by {post.userFirstName} on{" "}
          <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
        </p>
      </div>
      <div>
        <LikeButton />
      </div>
      <div>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
