import React from 'react'

const TopNavbar = () => {
    return (
        <div className="top-navbar style-1">
            <div className="container">
                <div className="content">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="top-links">
                                <div className="text text-white">
                                    <i className="fas fa-bullhorn" />
                                    <strong>Now Hiring:</strong>
                                    <span>Are you a driven and motivated <a href="#" className="p-0"><u>1st Line IT Support
                                        Engineer?</u></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="r-side">
                                <div className="socail-icons">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className="me-1" src="assets/img/lang.png" alt="" /> English
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">French</a></li>
                                        <li><a className="dropdown-item" href="#">Arabic</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar;
