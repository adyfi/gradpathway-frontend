import React from 'react';
import { fetchBlogPostById } from '../../api/api';

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
        <div className="inner-page-wrapper bg-white p-4" style={{ marginTop: "20vh" }}>
        </div>
    </div>
};

export default BlogPost;
