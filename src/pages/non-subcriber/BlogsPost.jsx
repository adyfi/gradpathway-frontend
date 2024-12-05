import React, { useEffect, useState } from 'react';
import { fetchBlogPostById } from '../../api/api';
import { useParams } from 'react-router-dom';

function formatIsoDateCustom(isoDate) {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

const BlogPost = () => {
    const { slug } = useParams();
    const [blogPost, setBlogPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const data = await fetchBlogPostById(slug);
                setBlogPost(data);
            } catch (err) {
                setError('Failed to load the blog post.');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPost();
    }, [slug]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!blogPost) {
        return <p>No blog post found.</p>;
    }

    return <div className='container'>
        <div className="d-flex justify-content-center">
            <div className="inner-page-wrapper bg-white p-4 shadow-sm border mb-5 rounded" style={{ maxWidth: "750px", marginTop: "20vh" }}>
                <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
            </div>
        </div>
    </div>
};

export default BlogPost;
