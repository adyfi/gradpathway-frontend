import React from 'react';
import { Link } from 'react-router-dom';
import useFetchBlogPosts from '../../hooks/useFetchBlogPosts';

function formatIsoDateCustom(isoDate) {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

const Blogs = () => {
    const { posts, loading, error } = useFetchBlogPosts();

    return <div>
        <div className="inner-page-wrapper" style={{ marginTop: "20vh" }}>
            <h1 className='text-center fw-bolder display-4'>Our <span className='text-primary'>Blogs</span></h1>
            <p className='col-md-6 offset-md-3 text-center'>
                Explore insightful articles, tips, and resources designed to guide you on your career and education journey. Stay informed, inspired, and ahead in the competitive global landscape.
            </p>
            <div className="blog-details-wrapper pt-5">
                <div className="container">
                    {/* <div className="map-search-box">
                        <div className="input-group">
                            <input className="form-control border-end-0 border rounded-pill" type="search" value="search" id="example-search-input" />
                            <span className="input-group-append">
                                <button className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </div> */}
                </div>
                {/* <div className="main-blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="right-image">
                                    <img src="/img/manager-women-working.webp" alt="" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="left-text">
                                    <h2>How to make resume very strong?</h2>
                                    <div className="time">
                                        <span>1 Nov 2024</span>
                                        <span>!0min ago</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {loading && <p>Loading blogs...</p>}
                {error && <p>Error: {error}</p>}

                {!loading && !error && posts && (
                    <div className="blog-list-wrapper mb-5">
                        <div className="container">
                            <div className="row">
                                {posts && posts.length > 0 && posts?.map(post => (
                                    <div className="col-md-4 p-3" key={post.slug}>
                                        <Link to={`/blogs/${post.id}`}>
                                            <div className="blog-box">
                                                <div className="image-wrapper">
                                                    <img src="/img/manager-women-working.webp" alt="" className="img-fluid rounded" />
                                                </div>
                                                <div className="text-wrapper pt-3">
                                                    <h5 className='text-primary fw-bold'>{post.title}</h5>
                                                    <small className='text-dark'>
                                                        {post.overview ? post.overview : ""}
                                                    </small>

                                                    <div className="timeing mt-3 d-flex justify-content-end">
                                                        <small>{formatIsoDateCustom(post.created_at)}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    </div>
};

export default Blogs;
