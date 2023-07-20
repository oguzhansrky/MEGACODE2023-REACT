import React from "react";

const HomeHeader = () => {
  return (
    <header className="section-padding style-1">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <div className="info">
                <div className="section-head mb-60">
                  <h6 className="color-main text-uppercase">
                    MegaCode Yazılım
                  </h6>
                  <h2>
                    Teknoloji &amp; IT{" "}
                    <span className="fw-normal">Çözümleri</span>
                  </h2>
                </div>
                <div className="text">
                  Geniş Hizmet Yelpazesi Sunuyor ve Tam Müşteri Memnuniyeti
                  Sağlıyoruz
                </div>
                <div className="bttns mt-5">
                  <a href="page-services-5.html" className="btn btn-dark">
                    <span>Hizmetlerimiz</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="img">
                <img src="assets/img/header/head-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/img/header/head_shape_r.png"
        alt=""
        className="head-shape-r wow"
      />
      <img
        src="assets/img/header/head_shape_l.png"
        alt=""
        className="head-shape-l wow"
      />
    </header>
  );
};

export default HomeHeader;
