import { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../api';

const useFetchBlogPosts = (token) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchBlogPosts(token);
        setPosts(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      getBlogPosts();
    }
  }, [token]);

  return { posts, loading, error };
};

export default useFetchBlogPosts;