import React from 'react'

const HomeHeader = () => {
    return (
        <header className="section-padding style-1">
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="info">
                                <div className="section-head mb-60">
                                    <h6 className="color-main text-uppercase">Iteck agency</h6>
                                    <h2>
                                        Technology &amp; IT <span className="fw-normal">Solutions</span>
                                    </h2>
                                </div>
                                <div className="text">
                                    We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.
                                </div>
                                <div className="bttns mt-5">
                                    <a href="page-services-5.html" className="btn btn-dark">
                                        <span>our services</span>
                                    </a>
                                    <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity className="vid-btn">
                                        <i className="bi bi-play wow heartBeat infinite slow" />
                                        <span>
                                            Iteck’s <br /> Showreels
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="img">
                                <img src="assets/img/header/head.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/img/header/head_shape_r.png" alt="" className="head-shape-r wow" />
            <img src="assets/img/header/head_shape_l.png" alt="" className="head-shape-l wow" />
        </header>
    )
}

export default HomeHeader;