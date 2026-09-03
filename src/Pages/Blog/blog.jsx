
import { useBlog } from "../../Hooks/useBlog";
import { BlogHeader } from "../../components/Blog/blogHeader";
import { BlogSearch } from "../../components/Blog/blogSearch";
import { CategoryList } from "../../components/Blog/catergoryList";
import { NewsletterCard } from "../../components/Blog/newslatterCard";
import { BlogGrid } from "../../components/Blog/blogGrid";
import { EmptyBlogState } from "../../components/Blog/emptyBlogState";
import { Pagination } from "../../components/Blog/pagenation";
import { motion } from "motion/react";

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
    <motion.div
          initial={{ opacity: 0, x: -100 }} // Slide in from the right
      animate={{ opacity: 1, x: 0 }}   // Center
      exit={{ opacity: 0, x: 100 }}   // Slide out to the left
      transition={{ duration: 1.2 }}
         
         >
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
    </motion.div>
  );
};