import React from "react";
import useTranslation from "next-translate/useTranslation";

const HomeHeader = () => {
  const { t } = useTranslation("common");
  return (
    <header className="section-padding style-1">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <div className="info">
                <div className="section-head mb-60">
                  <h6 className="color-main text-uppercase">
                    {t("homeheader.baslık1")}
                  </h6>
                  <h2>
                    {t("homeheader.technology")} &amp; {t("homeheader.it")}{" "}
                    <span className="fw-normal">
                      {t("homeheader.Solution")}
                    </span>
                  </h2>
                </div>
                <div className="text">{t("homeheader.text1")}</div>
                <div className="bttns mt-5">
                  <a href="page-services-5.html" className="btn btn-dark">
                    <span>{t("homeheader.service")}</span>
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
