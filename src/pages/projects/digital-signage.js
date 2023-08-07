import { Content } from "@/components/Content";
import ProjectSlider from "@/components/projects/ProjectSlider";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import PageHead from "@/layout/head/Head";
import Image from "next/image";
import Head from "next/head";

const DigitalSignage = () => {
  const digitalsignage = {
    "@context": "https://yayinoncesi.megacode.com.tr/",
    "@type": "digitalsignage",
    "    name": "Dijita Tabela",
    "    description": "Maliyetlerinizi Düşürür,imzanızı güçlendirir.",
  };
  const { t } = useTranslation("common");
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(digitalsignage)}
        </script>
      </Head>
      <PageHead pathname={asPath}></PageHead>
      <Content title="Digital" title_2=" Signage" desc={t("digital_sign.desc")}>
        <p>{t("digital_sign.text1")}</p>
        <h3 className="my-5 text-center">
          {t("digital_sign.digital_sign_title1")}
        </h3>
        <section className="services section-padding style-1 p-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
                <div className="d-flex justify-content-between align-items-center gap-4">
                  <div>
                    <Image
                      src="https://megacode.com.tr/img/mega/icons1.png"
                      width={170}
                      height={115}
                      alt="Kahve"
                    ></Image>
                  </div>
                  <div>
                    <h6 className="fw-bold">
                      {t("digital_sign.digital_sign_title1_text1")}
                    </h6>
                    <div className="info">
                      <div className="text">
                        {t("digital_sign.digital_sign_title1_text2")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="d-flex justify-content-between align-items-center gap-4">
                  <div>
                    <Image
                      src="https://megacode.com.tr/img/mega/icons2.png"
                      width={170}
                      height={115}
                      alt="Dart"
                    ></Image>
                  </div>
                  <div>
                    <h6 className="fw-bold">
                      {t("digital_sign.digital_sign_title2")}
                    </h6>

                    <div className="info">
                      <div className="text">
                        {t("digital_sign.digital_sign_title2_text1")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="d-flex justify-content-between align-items-center gap-4">
                  <div>
                    <Image
                      src="https://megacode.com.tr/img/mega/icons3.png"
                      width={170}
                      height={115}
                      alt="Apple"
                    ></Image>
                  </div>
                  <div>
                    <h6 className="fw-bold">
                      {t("digital_sign.digital_sign_title3")}
                    </h6>

                    <div className="info">
                      <div className="text">
                        {t("digital_sign.digital_sign_title3_text1")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="d-flex justify-content-between align-items-center gap-4">
                  <div>
                    <Image
                      src="https://megacode.com.tr/img/mega/icons4.png"
                      width={170}
                      height={115}
                      alt="Cüzdan"
                    ></Image>
                  </div>
                  <div>
                    <h6 className="fw-bold">
                      {t("digital_sign.digital_sign_title4")}
                    </h6>

                    <div className="info">
                      <div className="text">
                        {t("digital_sign.digital_sign_title4_text1")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="d-flex justify-content-between align-items-center gap-4">
                  <div>
                    <Image
                      src="https://megacode.com.tr/img/mega/icons5.png"
                      width={180}
                      height={90}
                      alt="Karlılık"
                    ></Image>
                  </div>
                  <div>
                    <h6 className="fw-bold">
                      {t("digital_sign.digital_sign_title5")}
                    </h6>

                    <div className="info">
                      <div className="text">
                        {t("digital_sign.digital_sign_title5_text1")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="d-flex justify-content-between align-items-center gap-4">
                  <div>
                    <Image
                      src="https://megacode.com.tr/img/mega/icons6.png"
                      width={180}
                      height={90}
                      alt="Sınırsız İçerik"
                    ></Image>
                  </div>
                  <div>
                    <h6 className="fw-bold">
                      {t("digital_sign.digital_sign_title6")}
                    </h6>

                    <div className="info">
                      <div className="text">
                        {t("digital_sign.digital_sign_title6_text1")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProjectSlider
          slides={[
            "https://megacode.com.tr/img/mega/dijital_slider_1.png",
            "https://megacode.com.tr/img/mega/dijital_slider_2.png",
          ]}
        />
      </Content>
    </>
  );
};

export default DigitalSignage;
