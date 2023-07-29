import React from "react";
import useTranslation from "next-translate/useTranslation";

const Portfolio = () => {
  const { t } = useTranslation("common");
  return (
    <section className="portfolio section-padding bg-gray style-1">
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <div className="section-head mb-60">
              <h6 className="color-main text-uppercase wow fadeInUp">
              {t("portfolio.port")}
              </h6>
              <h2 className="wow fadeInUp">
              {t("portfolio.latest_prject")}<span className="fw-normal">{t("portfolio.from_our_team")}</span>
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
                          {t("portfolio.infrastructure")}{" "}
                        </a>
                      </h5>
                      <small className="d-block color-main text-uppercase">
                        <a href="#">{t("portfolio.It")}</a>
                      </small>
                      <div className="text">
                      {t("portfolio.text1")}&amp; {t("portfolio.text1.1")}
                      </div>
                      <div className="tags">
                        <a href="#">{t("portfolio.tags1")}</a>
                        <a href="#">{t("portfolio.tags2")}</a>
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
                          {t("portfolio.landing_page")}{" "}
                        </a>
                      </h5>
                      <small className="d-block color-main text-uppercase">
                        <a href="#">{t("portfolio.web_dev")}</a>{" "}
                        <a href="#">{t("portfolio.ui/ux")}</a>
                      </small>
                      <div className="text">
                      {t("portfolio.text2")} &amp; {t("portfolio.text2.1")}
                      </div>
                      <div className="tags">
                        <a href="#">{t("portfolio.tags3")}</a>
                        <a href="#">{t("portfolio.tags4")}</a>
                        <a href="#">{t("portfolio.tags5")}</a>
                        <a href="#">{t("portfolio.tags6")}</a>
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
                          {t("portfolio.ar/vr")}{" "}
                        </a>
                      </h5>
                      <small className="d-block color-main text-uppercase">
                        <a href="#">{t("portfolio.game_dev")}</a>
                      </small>
                      <div className="text">
                      {t("portfolio.text3")}&amp;{t("portfolio.text3.1")}
                      </div>
                      <div className="tags">
                        <a href="#">{t("portfolio.tags7")}</a>
                        <a href="#">{t("portfolio.tags8")}&amp; {t("portfolio.tags8.1")}</a>
                        <a href="#">{t("portfolio.tags9")}</a>
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
                          {t("portfolio.landing_page")}{" "}
                        </a>
                      </h5>
                      <small className="d-block color-main text-uppercase">
                        <a href="#">{t("portfolio.web_dev")}</a>{" "}
                        <a href="#">{t("portfolio.ui/ux")}</a>
                      </small>
                      <div className="text">
                      {t("portfolio.text3")}&amp;{t("portfolio.text3.1")}
                      </div>
                      <div className="tags">
                        <a href="#">{t("portfolio.tags3")}</a>
                        <a href="#">{t("portfolio.tags4")}</a>
                        <a href="#">{t("portfolio.tags5")}</a>
                        <a href="#">{t("portfolio.tags6")}</a>
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
