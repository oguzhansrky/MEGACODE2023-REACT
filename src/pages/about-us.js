import { Content } from "@/components/Content";
import { Tabs } from "antd";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import PageHead from "@/layout/head/Head";
import Image from "next/image";
import Head from "next/head";

const Hakkimizda = () => {
  const about = {
    "@context": "https://yayinoncesi.megacode.com.tr/",
    "@type": "About",
    "    name": "Hakkımızda",
    "    description":
      "Mega Code Software tecrübeli ve uzman ekibi sayesinde işletmelere sadece yazılım çözümleri değil, dijital çözümler de sunmaktadır. ",
  };

  const { t } = useTranslation("common");
  const items = [
    {
      key: 1,
      label: t("about.label_about_us"),
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb-20">
                <p className="f_400 f_size_15">{t("about.about_us_text")}</p>
              </div>
              <div className="job_deatails_content">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  {t("about.our_principles")}
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  {t("about.our_principles_text1")}
                </p>
                <ul className="list-unstyled mb-20">
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    {t("about.our_principles_text2")}
                  </li>
                </ul>
              </div>
              <div className="job_deatails_content">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  {t("about.label_sustainable_projects;")}
                </h5>
                <ul className="list-unstyled mb-20">
                  <li>
                    <i className="ti-arrow-right"></i>{" "}
                    {t("about.sustainable_projects_text1")}{" "}
                  </li>
                </ul>
              </div>
              <div className="job_deatails_content">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  {t("about.label_ınnovation")}
                </h5>
                <ul className="list-unstyled mb-20">
                  <li>
                    <i className="ti-arrow-right"></i>
                    {t("about.ınnovation")}
                  </li>
                </ul>
              </div>
              <div className="job_deatails_content">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  {t("about.label_technology;")}
                </h5>
                <ul className="list-unstyled mb-20">
                  <li>{t("about.technology;")} </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      label: t("about.label_ınformation_security_policy"),
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb-20">
                <h5 className="f_p f_size_22 f_500 t_color3 mb_20">
                  {t("about.ınformation_security_policy")}
                </h5>
                <Image
                  src="https://megacode.com.tr/img/mega/bilgi.png"
                  width={569}
                  height={804}
                  alt="Kalite Ve Bilgi Güvenliği Politikası "
                ></Image>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 3,
      label: t("about.label_quality_and_environmental_policy"),
      children: (
        <div className="row ">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb_70">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  {t("about.quality_and_environmental_policy_text")}
                </h5>
                <Image
                  src="https://megacode.com.tr/img/mega/kalitevecevre.png"
                  width={661}
                  height={787}
                  alt="Kalite Ve Bilgi Güvenliği Politikası "
                ></Image>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 4,
      label: t("about.label_kvkk"),
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="reading">
                <h5>{t("about.kvkk_legal_warning")}</h5>
                <p className="yasalp_two">{t("about.kvkk_text")}</p>
                <p className="yasalp_three">{t("about.kvkk_text1")}</p>
                <p className="yasalp_three">{t("about.kvkk_text2")}</p>
                <ol>
                  <li>{t("about.kvkk_text3")}</li>
                  <li>{t("about.kvkk_text4")}</li>
                  <li>{t("about.kvkk_text5")}</li>
                  <li>{t("about.kvkk_text6")}</li>
                  <li>{t("about.kvkk_text7")}</li>
                  <li>{t("about.kvkk_text8")}</li>
                  <li>{t("about.kvkk_text9")}</li>
                  <li>{t("about.kvkk_text10")}</li>
                  <li>{t("about.kvkk_text11")}</li>
                </ol>
                <p>{t("about.kvkk_text12")}</p>
                <p>{t("about.kvkk_text13")}.</p>
                <p>{t("about.kvkk_text14")}</p>
                <ol>
                  <li>{t("about.kvkk_text15")}</li>
                  <li>{t("about.kvkk_text16")}</li>
                  <li>{t("about.kvkk_text17")}</li>
                  <li>{t("about.kvkk_text18")}</li>
                </ol>
                <h6>{t("about.kvkk_h6")}</h6>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 5,
      label: t("about.label_quality_certificates"),
      children: (
        <div className="row ">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  {t("about.quality_certificates")}
                </h5>
                <p>
                  {t("about.quality_certificates_text1")} <br />
                </p>
                <p>{t("about.quality_certificates_text2")}</p>
                <div className="row mt-20">
                  <div className="col-lg-4">
                    <Image
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-10002-SO2.jpg"
                      width={281}
                      height={389}
                      alt="MegaCode Sertifika"
                    ></Image>
                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-10002-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 10002
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <Image
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-13298-SO2.jpg"
                      width={281}
                      height={389}
                      alt="MegaCode Sertifika"
                    ></Image>

                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-13298-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 13298
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <Image
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-14001-SO2.jpg"
                      width={281}
                      height={389}
                      alt="MegaCode Sertifika"
                    ></Image>

                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-14001-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 14001
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <Image
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-22301-SO2.jpg"
                      width={281}
                      height={389}
                      alt="MegaCode Sertifika"
                    ></Image>

                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-22301-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 22301
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <Image
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-27001-SO2.jpg"
                      width={281}
                      height={389}
                      alt="MegaCode Sertifika"
                    ></Image>

                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-27001-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 27001
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <Image
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-9001-SO2.jpg"
                      width={281}
                      height={389}
                      alt="MegaCode Sertifika"
                    ></Image>

                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn btn-hover-danger"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-9001-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 9001
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <Head>
        {" "}
        <script type="application/ld+json">{JSON.stringify(about)}</script>
      </Head>
      <PageHead pathname={asPath} />
      <Content title={t("about.title_about_us")} desc={t("about.title_desc")}>
        <Tabs defaultActiveKey="1" tabPosition={"left"} items={items} />
      </Content>
    </>
  );
};

export default Hakkimizda;
