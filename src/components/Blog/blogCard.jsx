import { BlogMeta } from "./blogMate";

export const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      <div className="card-image-wrapper">
        <img src={post.image} alt="" className="card-image" loading="lazy" />
        <div className="card-tags">
          {post.tags.map((tag, idx) => (
            <span key={idx} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="card-content">
        <BlogMeta publishedAt={post.publishedAt} readTime={post.readTime} />
        <h2 className="card-title">{post.title}</h2>
        <p className="card-excerpt">{post.excerpt}</p>
        <a href={`${post.slug}`} className="card-link" target="_blank">
          Read More →
        </a>
      </div>
    </article>
  );
};