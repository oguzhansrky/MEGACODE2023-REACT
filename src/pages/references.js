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
                <img
                  src="/assets/img/svg/maxibillion.svg"
                  alt="Maxibillion"
                ></img>
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
                <img src="/assets/img/svg/tebom.svg" alt="Tebom.net"></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img
                  src="/assets/img/svg/karturk.svg"
                  alt="Kartürk Sigorta"
                ></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img
                  src="/assets/img/svg/collective-indigo.svg"
                  alt="Indigo"
                ></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img src="/assets/img/svg/dogus.svg" alt="Doğuş Otomotiv"></img>
              </div>
              <div className="col-6 col-sm-3 mt-4">
                <img
                  src="/assets/img/svg/deniz-tic.svg"
                  alt="Deniz Ticaret Odası"
                ></img>
              </div>
            </div>
          </div>
          <div className="controller mt-6 text-center my-5">
            <h2 className="fw-leight">{t("references.h2_title")}</h2>
          </div>

          <div className=" row">
            <div className="col-md-4 col-12 gx-5">
              <div className=" ">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <Image
                      src="/assets/img/referances/dijipol-tr.png"
                      width={317}
                      height={260}
                      alt="Dijipol Web Sitesi"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className="">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <Image
                      src="/assets/img/referances/dto-tr.png"
                      width={317}
                      height={230}
                      alt="Deniz Ticaret Odası Mobile"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className="">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <Image
                      src="/assets/img/referances/kargotek-tr.png"
                      width={317}
                      height={260}
                      alt="KargoTek Web Sitesi"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 gx-5">
              <div className="">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <Image
                      src="/assets/img/referances/collective-tr.png"
                      width={317}
                      height={260}
                      alt="Collective Web Sitesi"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className="">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <Image
                      src="/assets/img/referances/sea365-tr.png"
                      width={317}
                      height={260}
                      alt="Sea365 Web Sitesi"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className="">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <Image
                      src="/assets/img/referances/postkolik-tr.png"
                      width={317}
                      height={260}
                      alt="Postkolik Web Sitesi"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className="">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <Image
                      src="/assets/img/referances/flomak-tr.png"
                      width={317}
                      height={260}
                      alt="Flomak Web Sitesi"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 gx-5">
              <div className="">
                <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                  <div className="img radius-7 overflow-hidden img-cover">
                    <Image
                      src="/assets/img/referances/maxibillion-tr.png"
                      width={317}
                      height={260}
                      alt="Maxibillion Web Sitesi"
                    ></Image>
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
