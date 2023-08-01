import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

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
                <Image
                  src="/assets/img/header/head-2.png"
                  width={444}
                  height={445}
                  alt="Anasayfa Resim"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/img/header/head_shape_r.png"
        width={591}
        height={395}
        alt="Animasyon"
        className="head-shape-r wow"
      ></Image>
      <Image
        src="/assets/img/header/head_shape_l.png"
        width={199}
        height={257}
        alt="Animasyon"
        className="head-shape-l wow"
      ></Image>
    </header>
  );
};

export default HomeHeader;
