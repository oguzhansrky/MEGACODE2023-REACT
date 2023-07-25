import React from "react";
import useTranslation from 'next-translate/useTranslation';
const About = () => {
  const { t } = useTranslation("common");
  return (
    <section className="about style-1">
      <div className="container">
        <div className="content">
          <div className="about-logos d-flex align-items-center justify-content-between border-bottom border-1 brd-light pb-20">
            <a href="#" className="logo wow fadeInUp" data-wow-delay={0}>
              <img src="assets/img/about/about_logos/1.png" alt="" />
            </a>
            <a href="#" className="logo wow fadeInUp" data-wow-delay="0.2s">
              <img src="assets/img/about/about_logos/2.png" alt="" />
            </a>
            <a href="#" className="logo wow fadeInUp" data-wow-delay="0.4s">
              <img src="assets/img/about/about_logos/3.png" alt="" />
            </a>
            <a href="#" className="logo wow fadeInUp" data-wow-delay="0.6s">
              <img src="assets/img/about/about_logos/4.png" alt="" />
            </a>
            <a href="#" className="logo wow fadeInUp" data-wow-delay="0.8s">
              <img src="assets/img/about/about_logos/5.png" alt="" />
            </a>
          </div>
          <div className="about-info">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="title">
                  <h3 className=" wow fadeInUp slow">
                  {t('about1.h3')}
                  </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info">
                  <h6 className=" wow fadeInUp slow">
                  {t('about1.h6')}.
                  </h6>
                  <p className=" wow fadeInUp slow">
                  {t('about1.h6_p')}.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-numbers">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="num-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="num">
                    <span className="counter">2</span>
                  </div>
                  <div className="inf">{t('about1.country')}</div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="num-item wow fadeInUp" data-wow-delay="0">
                  <div className="num">
                    <span className="counter">8</span>
                    <span>
                      <i className="fas fa-plus"></i>
                    </span>
                  </div>
                  <div className="inf">{t('about1.exp')}</div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="num-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="num">
                    <span className="counter">320</span>
                  </div>
                  <div className="inf">{t('about1.complate_task')}</div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="num-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="num">
                    <span className="counter">3</span>
                    <span>B</span>
                  </div>
                  <div className="inf">{t('about1.happy_cust')}</div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/img/about/num_shap.png"
            alt=""
            className="about_shap"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
