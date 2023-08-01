import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const Services = () => {
  const { t } = useTranslation("common");
  return (
    <section className="services section-padding style-1">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-head mb-60">
              <h2 className="wow fadeInUp">{t("services.services_h1")}</h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
                <h5>
                  <a href="page-services-5.html">
                    {t("services.digital_solutions")}{" "}
                  </a>
                </h5>
                <br></br>
                <div className="icon">
                  <Image
                    src="/assets/img/icons/inovatif cozumler-8.png"
                    width={60}
                    height={60}
                    alt="İnovatif Çözümler"
                  ></Image>
                </div>
                <div className="info">
                  <div className="text">{t("services.services_text")}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h5>
                  <a href="page-services-5.html"> {t("services.siber_sec")} </a>
                </h5>
                <div className="icon">
                  <Image
                    src="/assets/img/icons/inovatif cozumler-4.png"
                    width={60}
                    height={60}
                    alt="İnovatif Çözümler"
                  ></Image>
                </div>
                <div className="info">
                  <div className="text">{t("services.siber_sec_text")}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h5>
                  <a href="page-services-5.html">
                    {" "}
                    {t("services.mobil_dev_head")}{" "}
                  </a>
                </h5>
                <div className="icon">
                  <Image
                    src="/assets/img/icons/inovatif cozumler-5.png"
                    width={60}
                    height={60}
                    alt="İnovatif Çözümler"
                  ></Image>
                </div>
                <div className="info">
                  <div className="text">{t("services.mobil_dev_text")}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="service-box mb-4 mb-md-0 wow fadeInUp"
                data-wow-delay={0}
              >
                <h5>
                  <a href="page-services-5.html">{t("services.app_dev")} </a>
                </h5>
                <div className="icon">
                  <Image
                    src="/assets/img/icons/inovatif cozumler-9.png"
                    width={60}
                    height={60}
                    alt="İnovatif Çözümler"
                  ></Image>
                </div>
                <div className="info">
                  <div className="text">{t("services.app_dev_text")}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h5>
                  <a href="page-services-5.html">
                    {" "}
                    {t("services.main_system_text")}{" "}
                  </a>
                </h5>
                <div className="icon">
                  <Image
                    src="/assets/img/icons/inovatif cozumler-7.png"
                    width={60}
                    height={60}
                    alt="İnovatif Çözümler"
                  ></Image>
                </div>
                <div className="info">
                  <div className="text">{t("services.main_system")}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="service-box mb-4 mb-md-0 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h5>
                  <a href="page-services-5.html">
                    {t("services.social_media")}
                  </a>
                </h5>
                <br></br>
                <div className="icon">
                  <Image
                    src="/assets/img/icons/inovatif cozumler-6.png"
                    width={60}
                    height={60}
                    alt="İnovatif Çözümler"
                  ></Image>
                </div>
                <div className="info">
                  <div className="text">{t("services.social_media_text")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/img/services/ser_shap_l.png"
        width={348}
        height={1103}
        alt="Price"
        className="ser_shap_l"
      ></Image>
      <Image
        src="/assets/img/services/ser_shap_r.png"
        width={217}
        height={826}
        alt="Price"
        className="ser_shap_r"
      ></Image>
    </section>
  );
};

export default Services;
