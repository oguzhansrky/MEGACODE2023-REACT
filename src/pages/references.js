import { Content } from "@/components/Content";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const referanslar = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Content title={t("references.title")} desc={t("references.desc")}>
        <div className="container ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>{t("references.text1")}</h2>
              </div>
            </div>
            <div className="text-center mt-3">
              <img src="/assets/img/isortaklari.png" alt=""></img>
            </div>
          </div>
          <div className="controller mt-6 text-center">
            <h2 className="fw-leight">{t("references.h2_title")}</h2>
          </div>
          <div className="d-flex justify-content-center">
            <img
              className="my-5"
              style={{ width: "50%", height: "50%" }}
              src="/assets/img/about/3d_vector2.svg"
              alt=""
            />
          </div>
          <div className=" row">
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/Dijipolwebsitesi.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">{t("references.digipol_web")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.digipol_web_design")} &amp;</a>
                      <a> {t("references.digipol_web_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/dto.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">
                        {t("references.deniz_tic_mobile_app")}
                      </p>
                    </h5>
                    <div className="links">
                      <a>{t("references.deniz_tic_mobile_app_design")} &amp;</a>
                      <a> {t("references.deniz_tic_mobile_app_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/Kargotekweb.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">{t("references.kargotek_web")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.kargotek_web_design")} &amp;</a>
                      <a> {t("references.kargotek_web_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/Maxibillion.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">{t("references.maxibillion_web")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.maxibillion_web_design")} &amp;</a>
                      <a> {t("references.maxibillion_web_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/Collective.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">{t("references.collective_web")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.collective_web_design")} &amp;</a>
                      <a> {t("references.collective_web_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/sea365.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">{t("references.sea365_web")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.sea365_web_design")} &amp;</a>
                      <a> {t("references.sea365_web_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/Postkolik.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">{t("references.postkolik_web")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.postkolik_web_design")} &amp;</a>
                      <a> {t("references.postkolik_web_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/Flomak.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">{t("references.flomak_web")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.flomak_web_design")} &amp;</a>
                      <a> {t("references.flomak_web_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/Demirclub.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">{t("references.demirclub_web")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.demirclub_web_design")} &amp;</a>
                      <a> {t("references.demirclub_web_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/Porsche.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">{t("references.porsche")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.porsche_design")} &amp;</a>
                      <a> {t("references.porsche_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/seat.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6">{t("references.seat")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.seat_design")}&amp;</a>
                      <a> {t("references.seat_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <img src="/assets/img/denizodasi.png" alt="" />
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold mt-10 title">
                      <p className="fs-6 ">{t("references.deniz")}</p>
                    </h5>
                    <div className="links">
                      <a>{t("references.deniz_design")}&amp;</a>
                      <a> {t("references.deniz_dev")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default referanslar;
