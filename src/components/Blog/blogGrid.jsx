
import { BlogCard } from "./blogCard";

export const BlogGrid = ({ posts }) => {
  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};