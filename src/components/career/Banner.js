import React from 'react'
import useTranslation from "next-translate/useTranslation";

const Banner = () => {
    const { t } = useTranslation("common");
    return (
        <section className="choose-us section-padding pt-0 style-1">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-5">
                        <div className="info">
                            <div className="section-head mb-60">
                                <h6 className="color-main text-uppercase wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>{t("career_banner.join")}</h6>
                                <h3 className="wow fadeInUp fs-4" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>{t("career_banner.text1")}<span className="fw-normal mt-4 fs-5">{t("career_banner.text2")}</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/assets/img/choose_us/choose_lines.svg" alt="" className="choose-us-img" />
            <img src="/assets/img/choose_us/choose_brands.png" alt="" className="choose-us-brands" />
            <img src="/assets/img/choose_us/choose_bubbles.png" alt="" className="choose-us-bubbles" />
        </section>
    )
}

export default Banner