import { Content } from "@/components/Content";
import useTranslation from "next-translate/useTranslation";

import { Tabs } from "antd";
import React from "react";

const Sea365 = () => {
  const { t } = useTranslation("common");
  const items = [
    {
      key: 1,
      label: t("sea365.label1"),
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb-20">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  {t("sea365.label1_text")}
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  {t("sea365.label1_description1")}
                </p>

                <p className="f_400 f_size_15 ">
                  {t("sea365.label1_description2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      label: t("sea365.label2"),
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb_70">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  {t("sea365.label2_text")}
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  {t("sea365.label2_description1")}
                </p>
                <p className="f_400 f_size_15 mb-20">
                  {t("sea365.label2_description2")}
                </p>
                <p className="f_400 f_size_15 mb-20">
                  {t("sea365.label2_description3")}
                </p>
                <p className="f_400 f_size_15 mb-20">
                  {t("sea365.label2_description4")}
                </p>
                <p className="f_400 f_size_15 mb-20">
                  {t("sea365.label2_description5")}.
                </p>
                <p className="f_400 f_size_15 mb-20">
                  {t("sea365.label2_description6")}
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Content title={"Sea"} title_2={"365"} desc={t("sea365.label3")}>
        <Tabs defaultActiveKey="1" tabPosition={"left"} items={items} />
        <div className="row mt-5">
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">
                  {t("sea365.label3_description1")}
                </a>
              </h5>
              <br></br>
              <div className="icon">
              <img src="/assets/img/icons/inovatif cozumler.png" alt="" />
              </div>
              <div className="info">
                <div className="text">{t("sea365.label3_description2")}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">
                  {t("sea365.label3_description3")}
                </a>
              </h5>
              <br></br>
              <div className="icon">
              <img src="/assets/img/icons/inovatif cozumler-1.png" alt="" />
              </div>
              <div className="info">
                <div className="text">{t("sea365.label3_description4")}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">
                  {t("sea365.label3_description5")}{" "}
                </a>
              </h5>
              <br></br>
              <div className="icon">
              <img src="/assets/img/icons/inovatif cozumler-10.png" alt="" />
              </div>
              <div className="info">
                <div className="text">{t("sea365.label3_description6")}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 service-box p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">
                  {t("sea365.label3_description7")}{" "}
                </a>
              </h5>
              <br></br>
              <div className="icon">
              <img src="/assets/img/icons/inovatif cozumler-2.png" alt="" />
              </div>
              <div className="info">
                <div className="text">{t("sea365.label3_description8")}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center my-5 ">
          <div className="col-sm-6">
            <img src="/assets/img/seapc.png" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="p_service_item pl_50 pr_20 mt_70">
              <h3 className="f_p f_size_28 l_height50 f_500 t_color2 mb-4">
                Sea365
              </h3>

              <h4>{t("sea365.h4")}</h4>

              <p className="mb-3 fs-6">{t("sea365.h4_p")}</p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <h3 className="text-center">{t("sea365.h3")}</h3>
          <div className="row mt-2 ">
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4">
              <div className="mt-5">
                <img src="/assets/img/layer1.png" alt="" />
                <p className="mt-3">{t("sea365.h3_p")} </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4">
              <div className="mt-5">
                <img src="/assets/img/layer2.png" alt="" />
                <p className="mt-3">{t("sea365.h3_p2")}.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4 ">
              <div className="mt-5">
                <img src="/assets/img/layer3.png" alt="" />
                <p className="mt-3"> {t("sea365.h3_p3")} </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4">
              <div className="mt-5">
                <img src="/assets/img/layer4.png" alt="" />
                <p className="mt-3">{t("sea365.h3_p4")} </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4">
              <div className="mt-5">
                <img src="/assets/img/layer5.png" alt="" />
                <p className="mt-3">{t("sea365.h3_p5")} </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4">
              <div className="mt-5">
                <img src="/assets/img/layer6.png" alt="" />
                <p className="mt-3">{t("sea365.h3_p6")} </p>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Sea365;
