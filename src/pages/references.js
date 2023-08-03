import { Content } from "@/components/Content";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import PageHead from "@/layout/head/Head";
import Image from "next/image";
import Head from "next/head";

const referanslar = () => {
  const references = {
    "@context": "https://yayinoncesi.megacode.com.tr/",
    "@type": "References",
    "    name": "Referanslar",
    "    description": "İş Ortaklarımız ",
  };
  const { t } = useTranslation("common");
  const router = useRouter();
  const { asPath } = router;
  console.log(asPath, router);
  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(references)}</script>
      </Head>
      <PageHead pathname={asPath}></PageHead>
      <Content title={t("references.title")} desc={t("references.desc")}>
        <div className="container ">
          <div className="col-md-12 text-center my-3">
            <h2>{t("references.text1")}</h2>
          </div>
          <div className="container mb-6">
            <div className="row"></div>
            <div className="row mt-3 text-center ">
              <div className="col-6 col-sm-3 mt-3">
                <img src="/assets/img/svg/dijipol.svg" alt="Dijipol"></img>
              </div>
              <div className="col-6 col-sm-3 mt-3">
                <img src="/assets/img/svg/flomak.svg" alt="Flomak Group"></img>
              </div>
              <div className="col-6 col-sm-3 mt-3">
                <img src="/assets/img/svg/kargotek.svg" alt="Kargotek"></img>
              </div>
              <div className="col-6 col-sm-3 mt-3">
                <img src="/assets/img/svg/maxibillion.svg" alt="Maxibillion"></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img src="/assets/img/svg/ozser.svg" alt="ÖzserNeo"></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img src="/assets/img/svg/porsche.svg" alt="Porsche"></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img src="/assets/img/svg/seat.svg" alt="Seat"></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img src="/assets/img/svg/tebom.svg" alt="Tebom.net" ></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img src="/assets/img/svg/karturk.svg" alt="Kartürk Sigorta"></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img src="/assets/img/svg/collective-indigo.svg" alt="Indigo"></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img src="/assets/img/svg/dogus.svg" alt="Doğuş Otomotiv"></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img src="/assets/img/svg/deniz-tic.svg" alt="Deniz Ticaret Odası"></img>
              </div>
            </div>
          </div>
          <div className="controller mt-6 text-center my-5">
            <h2 className="fw-leight">{t("references.h2_title")}</h2>
          </div>

          <div className=" row">
            <div className="col-md-4 col-12 gx-5">
              <div className=" border-end brd-gray">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <Image
                      src="/assets/img/Dijipolwebsitesi.png"
                      width={317}
                      height={260}
                      alt="Dijipol Web Sitesi"
                    ></Image>
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
                    <Image
                      src="/assets/img/dto.png"
                      width={317}
                      height={230}
                      alt="Deniz Ticaret Odası Mobile"
                    ></Image>
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
                    <Image
                      src="/assets/img/Kargotekweb.png"
                      width={317}
                      height={260}
                      alt="KargoTek Web Sitesi"
                    ></Image>
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
                    <Image
                      src="/assets/img/Maxibillion.png"
                      width={317}
                      height={260}
                      alt="Maxibillion Web Sitesi"
                    ></Image>
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
                    <Image
                      src="/assets/img/Collective.png"
                      width={317}
                      height={260}
                      alt="Collective Web Sitesi"
                    ></Image>
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
                    <Image
                      src="/assets/img/sea365.png"
                      width={317}
                      height={260}
                      alt="Sea365 Web Sitesi"
                    ></Image>
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
                    <Image
                      src="/assets/img/Postkolik.png"
                      width={317}
                      height={260}
                      alt="Postkolik Web Sitesi"
                    ></Image>
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
                    <Image
                      src="/assets/img/Flomak.png"
                      width={317}
                      height={260}
                      alt="Flomak Web Sitesi"
                    ></Image>
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
                    <Image
                      src="/assets/img/Demirclub.png"
                      width={317}
                      height={260}
                      alt="DemirClub Web Sitesi"
                    ></Image>
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
                    <Image
                      src="/assets/img/Porsche.png"
                      width={317}
                      height={260}
                      alt="Porsche Web Sitesi"
                    ></Image>
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
                    <Image
                      src="/assets/img/seat.png"
                      width={317}
                      height={260}
                      alt="Seat Web Sitesi"
                    ></Image>
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
                    <Image
                      src="/assets/img/denizodasi.png"
                      width={317}
                      height={260}
                      alt="Deniz Odası Web Sitesi"
                    ></Image>
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
