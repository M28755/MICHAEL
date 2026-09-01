
import { useBlog } from "../../Hooks/useBlog";
import { BlogHeader } from "../../components/Blog/blogHeader";
import { BlogSearch } from "../../components/Blog/blogSearch";
import { CategoryList } from "../../components/Blog/catergoryList";
import { NewsletterCard } from "../../components/Blog/newslatterCard";
import { BlogGrid } from "../../components/Blog/blogGrid";
import { EmptyBlogState } from "../../components/Blog/emptyBlogState";
import { Pagination } from "../../components/Blog/pagenation";

export const Blog = () => {
  const {
    searchTerm,
    onSearchChange,
    selectedCategory,
    currentPage,
    setCurrentPage,
    totalPages,
    categoriesWithCounts,
    currentPosts,
    totalResults,
    resetFilters,
    onCategoryChange
  } = useBlog();

  return (
    <div className="blog-page">
      <div className="blog-container">
        <BlogHeader />
        
        <div className="blog-layout">
          {/* Left Sidebar */}
          <aside className="blog-sidebar">
            <BlogSearch searchTerm={searchTerm} setSearchTerm={onSearchChange} />
            <CategoryList
              categoriesWithCounts={categoriesWithCounts}
              selectedCategory={selectedCategory}
              onSelectCategory={onCategoryChange}
            />
            <NewsletterCard />
          </aside>

          {/* Right Main Content */}
          <main className="blog-main">
            {totalResults > 0 ? (
              <>
                <BlogGrid posts={currentPosts} />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <EmptyBlogState onReset={resetFilters} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};