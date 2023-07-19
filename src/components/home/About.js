import React from 'react'

const About = () => {
    return (
        <section className="about style-1">
            <div className="container">
                <div className="content">
                    <div className="about-logos d-flex align-items-center justify-content-between border-bottom border-1 brd-light pb-20">
                        <a href="#" className="logo wow fadeInUp" data-wow-delay={0}>
                            <img src="assets/img/about/about_logos/1.png" alt="" />
                        </a>
                        <a href="#" className="logo wow fadeInUp" data-wow-delay="0.2s">
                            <img src="assets/img/about/about_logos/2.png" alt="" />
                        </a>
                        <a href="#" className="logo wow fadeInUp" data-wow-delay="0.4s">
                            <img src="assets/img/about/about_logos/3.png" alt="" />
                        </a>
                        <a href="#" className="logo wow fadeInUp" data-wow-delay="0.6s">
                            <img src="assets/img/about/about_logos/4.png" alt="" />
                        </a>
                        <a href="#" className="logo wow fadeInUp" data-wow-delay="0.8s">
                            <img src="assets/img/about/about_logos/5.png" alt="" />
                        </a>
                    </div>
                    <div className="about-info">
                        <div className="row justify-content-between">
                            <div className="col-lg-5">
                                <div className="title">
                                    <h3 className=" wow fadeInUp slow">“Technology is best when it brings people  together.”</h3>
                                    <small className=" wow fadeInUp slow fw-bold">Patricia Cross</small>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="info">
                                    <h6 className=" wow fadeInUp slow">We can help to maintain and modernize your IT infrastructure  &amp; solve various infrastructure-specific issues a business may face.</h6>
                                    <p className=" wow fadeInUp slow">Iteck Co is the partner of choice for many of the world’s leading  enterprises, SMEs and technology challengers. We help businesses  elevate their value through custom software development, product  design, QA and consultancy services.</p>
                                    <a href="page-about-5.html" className="btn btn-outline-light mt-5 sm-butn wow fadeInUp slow">
                                        <span>more about us</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-numbers">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="num-item wow fadeInUp" data-wow-delay={0}>
                                    <div className="num">
                                        <span className="counter">
                                            20
                                        </span>
                                        <span>
                                            <i className="fas fa-plus" />
                                        </span>
                                    </div>
                                    <div className="inf">
                                        Years of Experience
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="num-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="num">
                                        <span className="counter">
                                            15
                                        </span>
                                        <span>
                                            K
                                        </span>
                                    </div>
                                    <div className="inf">
                                        Projects completed
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="num-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="num">
                                        <span className="counter">
                                            240
                                        </span>
                                    </div>
                                    <div className="inf">
                                        Awards achievied
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="num-item wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="num">
                                        <span className="counter">
                                            180
                                        </span>
                                    </div>
                                    <div className="inf">
                                        Satisfied clients on 24 countries
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="assets/img/about/num_shap.png" alt="" className="about_shap" />
                </div>
            </div>
        </section>
    )
}

export default About;
