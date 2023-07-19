import React from 'react'

const Blog = () => {
    return (
        <section className="blog section-padding bg-gray style-1">
            <div className="container">
                <div className="row">
                    <div className="col offset-lg-1">
                        <div className="section-head mb-60">
                            <h6 className="color-main text-uppercase wow fadeInUp">our press</h6>
                            <h2 className="wow fadeInUp">
                                Latest Posts <span className="fw-normal">From Our Press</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="blog_slider">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="blog_box">
                                        <div className="tags">
                                            <a href="#">news</a>
                                        </div>
                                        <div className="img">
                                            <img src="assets/img/blog/1.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <h6><a href="page-single-post-5.html">Crypto Trends 2023</a></h6>
                                            <div className="auther">
                                                <span>
                                                    <img className="auther-img" src="assets/img/testimonials/user1.jpg" alt="" />
                                                    <small><a href="#">By Admin</a></small>
                                                </span>
                                                <span>
                                                    <i className="bi bi-calendar2" />
                                                    <small><a href="#">May 15, 2022</a></small>
                                                </span>
                                            </div>
                                            <div className="text">
                                                If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected [...]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="blog_box">
                                        <div className="tags">
                                            <a href="#">technology</a>
                                        </div>
                                        <div className="img">
                                            <img src="assets/img/blog/2.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <h6><a href="page-single-post-5.html">How To Become Web Developer</a></h6>
                                            <div className="auther">
                                                <span>
                                                    <img className="auther-img" src="assets/img/testimonials/user2.jpg" alt="" />
                                                    <small><a href="#">By Moussa</a></small>
                                                </span>
                                                <span>
                                                    <i className="bi bi-calendar2" />
                                                    <small><a href="#">May 15, 2022</a></small>
                                                </span>
                                            </div>
                                            <div className="text">
                                                If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected [...]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="blog_box">
                                        <div className="tags">
                                            <a href="#">tips &amp; tricks</a>
                                        </div>
                                        <div className="img">
                                            <img src="assets/img/blog/3.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <h6><a href="page-single-post-5.html">Wireframe For UI/UX?</a></h6>
                                            <div className="auther">
                                                <span>
                                                    <img className="auther-img" src="assets/img/testimonials/user3.jpg" alt="" />
                                                    <small><a href="#">By Admin</a></small>
                                                </span>
                                                <span>
                                                    <i className="bi bi-calendar2" />
                                                    <small><a href="#">May 15, 2022</a></small>
                                                </span>
                                            </div>
                                            <div className="text">
                                                If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected [...]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="blog_box">
                                        <div className="tags">
                                            <a href="#">news</a>
                                        </div>
                                        <div className="img">
                                            <img src="assets/img/blog/4.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <h6><a href="page-single-post-5.html">VR Game, Opportunity &amp; Challenge</a></h6>
                                            <div className="auther">
                                                <span>
                                                    <img className="auther-img" src="assets/img/testimonials/user1.jpg" alt="" />
                                                    <small><a href="#">By David</a></small>
                                                </span>
                                                <span>
                                                    <i className="bi bi-calendar2" />
                                                    <small><a href="#">May 15, 2022</a></small>
                                                </span>
                                            </div>
                                            <div className="text">
                                                If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected [...]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="blog_box">
                                        <div className="tags">
                                            <a href="#">technology</a>
                                        </div>
                                        <div className="img">
                                            <img src="assets/img/blog/2.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <h6><a href="page-single-post-5.html">How To Become Web Developer</a></h6>
                                            <div className="auther">
                                                <span>
                                                    <img className="auther-img" src="assets/img/testimonials/user2.jpg" alt="" />
                                                    <small><a href="#">By Moussa</a></small>
                                                </span>
                                                <span>
                                                    <i className="bi bi-calendar2" />
                                                    <small><a href="#">May 15, 2022</a></small>
                                                </span>
                                            </div>
                                            <div className="text">
                                                If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected [...]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ====== slider navigation ====== */}
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;
