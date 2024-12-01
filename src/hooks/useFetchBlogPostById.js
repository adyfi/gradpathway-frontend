import { useState, useEffect } from 'react';
import { fetchBlogPostById } from '../api';

const useFetchBlogPostById = (token, blogId) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchBlogPostById(token, blogId);
        setPost(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token && blogId) {
      getBlogPost();
    }
  }, [token, blogId]);

  return { post, loading, error };
};

export default useFetchBlogPostById;