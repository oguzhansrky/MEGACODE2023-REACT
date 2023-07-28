import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio section-padding bg-gray style-1">
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <div className="section-head mb-60">
              <h6 className="color-main text-uppercase wow fadeInUp">
                Portfolio
              </h6>
              <h2 className="wow fadeInUp">
                Latest Projects <span className="fw-normal">From Our Team</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="content wow fadeIn slow">
          <div className="portfolio-slider">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="portfolio-card">
                    <div className="img">
                      <img src="/assets/img/projects/prog/1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h5>
                        <a href="page-single-project-5.html">
                          {" "}
                          Infrastructure Upgrade{" "}
                        </a>
                      </h5>
                      <small className="d-block color-main text-uppercase">
                        <a href="#">IT Consultation</a>
                      </small>
                      <div className="text">
                        Trust our top minds to eliminate workflow pain points,
                        implement new tech &amp; app.
                      </div>
                      <div className="tags">
                        <a href="#">Consultation</a>
                        <a href="#">Management</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="portfolio-card">
                    <div className="img">
                      <img src="/assets/img/projects/prog/2.png" alt="" />
                    </div>
                    <div className="info">
                      <h5>
                        <a href="page-single-project-5.html">
                          {" "}
                          Criftocy Landing Page{" "}
                        </a>
                      </h5>
                      <small className="d-block color-main text-uppercase">
                        <a href="#">Website Development,</a>{" "}
                        <a href="#">UI/UX Design</a>
                      </small>
                      <div className="text">
                        Trust our top minds to eliminate workflow pain points,
                        implement new tech &amp; app.
                      </div>
                      <div className="tags">
                        <a href="#">WordPress</a>
                        <a href="#">PHP</a>
                        <a href="#">HTML/CSS</a>
                        <a href="#">Figma</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="portfolio-card">
                    <div className="img">
                      <img src="/assets/img/projects/prog/3.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h5>
                        <a href="page-single-project-5.html">
                          {" "}
                          AR/VR War 1986 Game{" "}
                        </a>
                      </h5>
                      <small className="d-block color-main text-uppercase">
                        <a href="#">Game Developemnt</a>
                      </small>
                      <div className="text">
                        Trust our top minds to eliminate workflow pain points,
                        implement new tech &amp; app.
                      </div>
                      <div className="tags">
                        <a href="#">VR/AR</a>
                        <a href="#">iOS &amp; Android</a>
                        <a href="#">Unity 2D/3D</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="portfolio-card">
                    <div className="img">
                      <img src="/assets/img/projects/prog/2.png" alt="" />
                    </div>
                    <div className="info">
                      <h5>
                        <a href="page-single-project-5.html">
                          {" "}
                          Criftocy Landing Page{" "}
                        </a>
                      </h5>
                      <small className="d-block color-main text-uppercase">
                        <a href="#">Website Development,</a>{" "}
                        <a href="#">UI/UX Design</a>
                      </small>
                      <div className="text">
                        Trust our top minds to eliminate workflow pain points,
                        implement new tech &amp; app.
                      </div>
                      <div className="tags">
                        <a href="#">WordPress</a>
                        <a href="#">PHP</a>
                        <a href="#">HTML/CSS</a>
                        <a href="#">Figma</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ====== slider pagination ====== */}
            <div className="swiper-pagination" />
            {/* ====== slider navigation ====== */}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </div>
      <img
        src="/assets/img/projects/prog/shap_r.png"
        alt=""
        className="shap_r"
      />
      <img
        src="/assets/img/projects/prog/shap_l.png"
        alt=""
        className="shap_l"
      />
    </section>
  );
};

export default Portfolio;
