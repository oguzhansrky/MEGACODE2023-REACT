import React from "react";
import useTranslation from "next-translate/useTranslation";

const ChooseUs = () => {
  const { t } = useTranslation("common");
  return (
    <section className="choose-us section-padding pt-0 style-1">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-60">
                <h6 className="color-main text-uppercase wow fadeInUp">
                {t("choose_us.choose")}
                </h6>
                <h2 className="wow fadeInUp">
                {t("choose_us.boost")}{" "}
                  <span className="fw-normal">{t("choose_us.text1")}</span>
                </h2>
              </div>
              <div className="text">
              {t("choose_us.text2")}
              </div>
              <ul>
                <li className="wow fadeInUp">
                  <span className="icon">
                    <i className="bi bi-check2" />
                  </span>
                  <h6>{t("choose_us.text3")} &amp; {t("choose_us.text3.1")}</h6>
                </li>
                <li className="wow fadeInUp">
                  <span className="icon">
                    <i className="bi bi-check2" />
                  </span>
                  <h6>{t("choose_us.text4")}</h6>
                </li>
                <li className="wow fadeInUp">
                  <span className="icon">
                    <i className="bi bi-check2" />
                  </span>
                  <h6>{t("choose_us.text5")}&amp;{t("choose_us.text5.1")}</h6>
                </li>
                <li className="wow fadeInUp">
                  <span className="icon">
                    <i className="bi bi-check2" />
                  </span>
                  <h6>{t("choose_us.text6")}</h6>
                </li>
              </ul>
              <a
                href="page-about-5.html"
                className="btn butn-gard border-0 text-white wow fadeInUp"
              >
                <span>{t("choose_us.text7")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/choose_us/choose_lines.svg"
        alt=""
        className="choose-us-img"
      />
      <img
        src="/assets/img/choose_us/choose_brands.png"
        alt=""
        className="choose-us-brands"
      />
      <img
        src="/assets/img/choose_us/choose_bubbles.png"
        alt=""
        className="choose-us-bubbles"
      />
    </section>
  );
};

export default ChooseUs;
