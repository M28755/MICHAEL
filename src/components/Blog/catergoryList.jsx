

export const CategoryList = ({ categoriesWithCounts, selectedCategory, onSelectCategory }) => {
  
  return (
    <div className="category-widget">
      <h2 className="widget-title">Categories</h2>
      <ul className="category-list">
        {Object.entries(categoriesWithCounts).map(([category, count]) => {
          const isActive = selectedCategory === category;
          return (
            <li key={category}>
              <button
                className={`category-item ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(category)}
              >
                <span className="category-name">{category}</span>
                <span className="category-count">{count}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};