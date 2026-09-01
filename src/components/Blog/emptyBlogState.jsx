
export const EmptyBlogState = ({ onReset }) => {
  return (
    <div className="empty-state">
      <h3 className="empty-title">No articles found</h3>
      <p className="empty-text">
        Try adjusting your search criteria or resetting filters to see more results.
      </p>
      <button onClick={onReset} className="reset-btn">
        Clear Filters
      </button>
    </div>
  );
};