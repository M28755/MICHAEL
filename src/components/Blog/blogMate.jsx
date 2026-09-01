
import { formatDate } from '../../Utils/blogUtils';

export const BlogMeta = ({ publishedAt, readTime }) => {
  return (
    <div className="blog-meta">
      <span className="meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
      </span>
      <span className="meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        {readTime} min read
      </span>
    </div>
  );
};