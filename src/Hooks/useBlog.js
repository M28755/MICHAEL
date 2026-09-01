import { useMemo, useState } from "react";
import { blogPosts } from "../Data/blogPosts";
import { filterAndSearchPost } from "../Utils/blogUtils";



const POSTS_PER_PAGE = 4;
const DEFAULT_CATEGORY = 'All Topics';

export const useBlog = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] =
        useState(DEFAULT_CATEGORY);
    const [currentPage, setCurrentPage] = useState(1);

    // const query = searchTerm;

    const filteredPosts = useMemo(() => {

        console.log('useBlog values:', {
            blogPosts,
            selectedCategory,
            searchTerm,
        });

        return filterAndSearchPost(blogPosts, selectedCategory, searchTerm)
    }, [selectedCategory, searchTerm])

    const totalResults = filteredPosts.length;

    const totalPages = Math.max(
        1,
        Math.ceil(totalResults / POSTS_PER_PAGE)
    );
    const safeCurrentPage = Math.min(
        currentPage,
        totalPages
    );
    const currentPosts = useMemo(() => {
        const startIndex =
            (safeCurrentPage - 1) * POSTS_PER_PAGE;

        return filteredPosts.slice(
            startIndex,
            startIndex + POSTS_PER_PAGE
        );
    }, [filteredPosts, safeCurrentPage]);

    const categoriesWithCounts = useMemo(() => {
        return blogPosts.reduce(
            (counts, post) => {
                counts[post.category] =
                    (counts[post.category] || 0) + 1;

                return counts;
            },
            { [DEFAULT_CATEGORY]: blogPosts.length }
        );
    }, []);

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedCategory(DEFAULT_CATEGORY);
        setCurrentPage(1);
    };

    return {
        searchTerm,
        selectedCategory,
        currentPage: safeCurrentPage,

        categoriesWithCounts,

        currentPosts,
        totalResults,
        totalPages,

        onSearchChange: handleSearchChange,
        onCategoryChange: handleCategoryChange,
        setCurrentPage,

        resetFilters,
    };




}