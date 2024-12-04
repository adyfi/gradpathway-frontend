import React from 'react';
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
        <div className="inner-page-wrapper">
            <div className="inner-text-image-banner">
                <div className="image-wrapper">
                    <img src="/img/books-with.webp" alt="" />
                </div>
                <div className="text-banner-content">
                    <h2>Our Blogs</h2>
                    <p>Stay updated with expert insights, industry news, and creative innovations</p>
                </div>
            </div>

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
                    <div className="blog-list-wrapper">
                        <div className="container">
                            <div className="row">
                                {posts.map(post => (
                                    <div className="col-md-4">
                                        <div className="blog-box">
                                            <div className="image-wrapper">
                                                <img src="/img/manager-women-working.webp" alt="" className="img-fluid" />
                                            </div>
                                            <div className="text-wrapper">
                                                <h3>{post.title}</h3>
                                                <div className="timeing">
                                                    <span>{formatIsoDateCustom(post.created_at)}</span>
                                                    {/* <span>10min ago</span> */}
                                                </div>
                                                <p>
                                                    {post.subtitle ? post.subtitle : "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <section className="opportunities-wrapper">
                <div className="opportunities-content">
                    <h2>Unlock new career opportunities
                        with us</h2>
                    <a href="#" className="btn btn-secondary">Get In Touch</a>
                </div>
            </section>


        </div>
    </div>
};

export default Blogs;
