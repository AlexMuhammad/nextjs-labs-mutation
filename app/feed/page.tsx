import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

const FeedPage = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1>All Posts</h1>
      <Posts posts={posts} />
    </div>
  );
};

export default FeedPage;
