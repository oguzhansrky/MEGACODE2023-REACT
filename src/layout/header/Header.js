import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light style-1">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="assets/img/logo_cd.png" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Homes
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <li><a className="dropdown-item" href="index.html"> Landing Preview</a></li>
                                <li><a className="dropdown-item" href="home-it-solutions2.html"> Creative It Solutions</a></li>
                                <li><a className="dropdown-item" href="home-data-analysis.html"> Data Analysis </a></li>
                                <li><a className="dropdown-item" href="home-app-landing.html"> App Landing </a></li>
                                <li><a className="dropdown-item" href="home-saas-technology.html"> Saas Technology </a></li>
                                <li><a className="dropdown-item" href="home-marketing-startup.html"> Marketing Startup </a></li>
                                <li><a className="dropdown-item" href="home-it-solutions.html"> It Solution </a></li>
                                <li><a className="dropdown-item" href="home-software-company.html"> Software Company </a></li>
                                <li><a className="dropdown-item" href="home-digital-agency.html"> Digital Agency </a></li>
                                <li><a className="dropdown-item" href="home-shop-modern.html"> Modern Shop </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                pages
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <li><a className="dropdown-item" href="page-about-5.html">about</a></li>
                                <li><a className="dropdown-item" href="page-product-5.html">product</a></li>
                                <li><a className="dropdown-item" href="page-services-5.html">services</a></li>
                                <li><a className="dropdown-item" href="page-shop-5.html">shop</a></li>
                                <li><a className="dropdown-item" href="page-single-project-5.html">single project</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="page-portfolio-5.html">
                                portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="page-blog-5.html">
                                blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="page-contact-5.html">
                                contact
                            </a>
                        </li>
                    </ul>
                    <div className="nav-side">
                        <div className="hotline pe-4">
                            <div className="icon me-3">
                                <i className="bi bi-telephone" />
                            </div>
                            <div className="cont">
                                <small className="text-muted m-0">hotline 24/7</small>
                                <h6>(+23) 5535 68 68</h6>
                            </div>
                        </div>
                        <div className="qoute-nav ps-4">
                            <a href="#" className="search-icon me-3">
                                <i className="bi bi-search" />
                            </a>
                            <a href="#" className="cart-icon me-3">
                                <i className="bi bi-cart" />
                                <span className="cart-num">
                                    2
                                </span>
                            </a>
                            <a href="page-contact-5.html" className="btn sm-butn butn-gard border-0 text-white">
                                <span>Free Quote</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
