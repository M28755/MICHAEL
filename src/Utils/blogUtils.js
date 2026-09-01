
// Formats a date string into a human-readable date.
export const formatDate = (dateString) => {
  const date = new Date(dateString); // Convert the incoming date string into a JavaScript Date object.

  if (Number.isNaN(date.getTime())) {
    return 'Invalid date';
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

export const filterAndSearchPost = (posts,category,searchTerm) =>{

  console.log('filterAndSearchPosts:', {
    posts,
    category,
    searchTerm,
    searchTermType: typeof searchTerm,
  });

    const query = searchTerm.toLowerCase().trim();
 //console.log(query)
    return posts.filter((post) =>{
             const matchCategory = category === "All Topics" || post.category === category;
                   
          
             return matchCategory && matchSearchQuery(post,query)
    })
}
const matchSearchQuery = (post, query) =>{
    if (!query) return true;
  
    //Protect Against Missing Data
  const title = post.title?.toLowerCase() || '';
  const excerpt = post.excerpt?.toLowerCase() || '';
  const tags = post.tags || [];

  return (
    title.includes(query) ||
    excerpt.includes(query) ||
    tags.some((tag) =>
      tag.toLowerCase().includes(query)
    )
  );
}