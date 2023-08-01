import { Content } from "@/components/Content";
import Clients from "@/components/projects/Clients";
import PricingTable from "@/components/projects/PricingTable";
import { Tabs } from "antd";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";
import PageHead from "@/layout/head/Head";

const Acente365 = () => {
  const { t } = useTranslation("common");
  const items = [
    {
      key: 1,
      label: t("acente365.label1"),
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb-20">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  {t("acente365.label1_question")}
                </h5>
                <p className="f_400 f_size_15">
                  {t("acente365.label1_question_answer1")}
                </p>
                <p className="f_400 f_size_15">
                  {t("acente365.label1_question_answer2")}
                </p>
                <p className="f_400 f_size_15">
                  {t("acente365.label1_question_answer3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      label: t("acente365.label2"),
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb_70">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  {t("acente365.label2_question")}
                </h5>
                <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                  {t("acente365.label2_question_answer1")}
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  {t("acente365.label2_question_answer2")}
                </p>
                <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                  {t("acente365.label2_question_answer3")}
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  {t("acente365.label2_question_answer4")}
                </p>
                <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                  {t("acente365.label2_question_answer5")}
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  {t("acente365.label2_question_answer6")}
                </p>
                <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                  {t("acente365.label2_question_answer7")}
                </h5>
                <p className="f_400 f_size_15">
                  {t("acente365.label2_question_answer8")}
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 3,
      label: t("acente365.label3"),
      children: (
        <div
          className="tab-pane fade active show"
          id="ma"
          role="tabpanel"
          aria-labelledby="ma-tab"
        >
          <div className="row flex-row-reverse">
            <div className="col-lg-12">
              <div className="details_content">
                <div className="sec_title mb_70">
                  <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                    {t("acente365.label3_question")}
                  </h5>
                  <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                    {t("acente365.label3_question_answer1")}
                  </h5>
                  <p className="f_400 f_size_15 mb-20">
                    {t("acente365.label3_question_answer2")}
                  </p>
                  <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                    {t("acente365.label3_question_answer3")}
                  </h5>
                  <p className="f_400 f_size_15 mb-20">
                    {t("acente365.label3_question_answer4")}
                  </p>
                  <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                    {t("acente365.label3_question_answer5")}
                  </h5>
                  <p className="f_400 f_size_15">
                    {t("acente365.label3_question_answer6")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 4,
      label: t("acente365.label4"),
      children: (
        <div className="row ">
          <div className="col-lg-4 d-flex align-items-center">
            <div className="seo_features_content">
              <h6 className="Acente365">Acente365</h6>
              <h3 className="Sigorta-Platformu-Title">
                {t("acente365.label4_question")}
              </h3>
              <p className="t_color">
                {t("acente365.label4_question_answer1")}{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="seo_features_img seo_features_img_two">
              <div className="round_circle"></div>
              <div className="round_circle two"></div>
              <Image
                src="https://megacode.com.tr/img/mega/agence365_banner.png"
                width={488}
                height={389}
                alt="Acenta365"
              ></Image>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 5,
      label: t("acente365.label5"),
      children: (
        <div className="row ">
          <div className="col-lg-12 d-flex align-items-center">
            <div className="seo_features_content">
              <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                {t("acente365.label5_question")}
              </h5>
              <p>{t("acente365.label5_question_answer1")}</p>
              <p>{t("acente365.label5_question_answer2")}</p>
              <p>{t("acente365.label5_question_answer3")}</p>
              <p>{t("acente365.label5_question_answer4")}</p>
              <p>{t("acente365.label5_question_answer5")}</p>
              <p> {t("acente365.label5_question_answer6")}</p>
              <p>{t("acente365.label5_question_answer7")}</p>
              <p>{t("acente365.label5_question_answer8")}</p>
              <p>{t("acente365.label5_question_answer9")}</p>
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
      <PageHead pathname={asPath}></PageHead>
      <Content
        title={"Acente"}
        title_2={"365"}
        desc={t("acente365.label_desc")}
      >
        <Tabs defaultActiveKey="1" tabPosition={"left"} items={items} />
        <Clients />
        <div className="row mt-5">
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">3.000+ {t("acente365.user")} </a>
              </h5>
              <br></br>
              <div className="icon">
                <Image
                  src="/assets/img/icons/inovatif cozumler-11.png"
                  width={75}
                  height={75}
                  alt="İnovatif Çözümler"
                ></Image>
              </div>
              <div className="info">
                <div className="text">{t("acente365.text1")}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">{t("acente365.text2")}</a>
              </h5>
              <br></br>
              <div className="icon">
                <Image
                  src="/assets/img/icons/inovatif cozumler-9.png"
                  width={75}
                  height={75}
                  alt="İnovatif Çözümler"
                ></Image>
              </div>
              <div className="info">
                <div className="text">{t("acente365.text3")}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">{t("acente365.text5")} </a>
              </h5>
              <br></br>
              <div className="icon">
                <Image
                  src="/assets/img/icons/inovatif cozumler-3.png"
                  width={75}
                  height={75}
                  alt="İnovatif Çözümler"
                ></Image>
              </div>
              <div className="info">
                <div className="text">{t("acente365.text4")}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 service-box p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">{t("acente365.support")} </a>
              </h5>
              <br></br>
              <div className="icon">
                <Image
                  src="/assets/img/icons/inovatif cozumler-2.png"
                  width={75}
                  height={75}
                  alt="İnovatif Çözümler"
                ></Image>
              </div>
              <div className="info">
                <div className="text">{t("acente365.support_text")}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div className="col-sm-6">
            <Image
              src="/assets/img/header/3d_vector_head8.svg"
              width={555}
              height={475}
              alt="3D Vektör"
            ></Image>
          </div>
          <div className="col-lg-6">
            <div className="p_service_item pl_50 pr_20 mt_70">
              <h3 className="f_p f_size_28 l_height50 f_500 t_color2 mb-4">
                {t("acente365.cloud")}
              </h3>
              <p className="mb-3 fs-6">{t("acente365.acente_text1")}</p>
              <p className="mb-3 fs-6">{t("acente365.acente_text2")}</p>
              <p className="mb-3 fs-6">{t("acente365.acente_text3")}</p>
            </div>
          </div>
        </div>
        <h3 className="f_p f_size_28 l_height50 f_500 t_color2 my-5">
          {t("acente365.acente_fonc")}
        </h3>
        <Image
          src="https://megacode.com.tr/img/mega/function.png"
          width={1044}
          height={248}
          alt="3D Vektör"
        ></Image>

        <PricingTable />
      </Content>
    </>
  );
};

export default Acente365;
