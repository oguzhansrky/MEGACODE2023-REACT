import { Content } from "@/components/Content";
import PageHead from "@/layout/head/Head";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import React from "react";

export const Iletisim = () => {
  const contact = {
    "@context": "https://yayinoncesi.megacode.com.tr/",
    "@type": "contact",
    "    name": "İletişim",
    "    description": "İletişim Bilgilerimiz",
  };
  const { t } = useTranslation("common");
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <Head>
        {" "}
        <script type="application/ld+json">{JSON.stringify(contact)}</script>
      </Head>
      <PageHead pathname={asPath}></PageHead>
      <Content
        title={t("contact.title")}
        title_2={t("contact.title_2")}
        desc={t("contact.desc")}
      ></Content>

      <main className="contact-page style-5 ">
        <section className="contact section-padding   pt-0 style-6">
          <div className="container ">
            <div className="text-center mb-100">
              <h2 className="text-uppercase fs-4 lh-1 mb-20 mt-0 color-blue5  ">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }} className>
                    0850 346 22 01
                  </font>
                </font>
              </h2>
              <h4 className="fw-normal mb-20 fs-6  ">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    info@megacode.com.tr
                  </font>
                </font>
              </h4>
              <h2 className="fw-normal mb-10 fs-4 color-000">{t("contact.main")}</h2>
              <h4 className="fw-normal mb-20 fs-6 color-000 ">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    {t("contact.adress")}
                  </font>
                </font>
              </h4>
              <h2 className="fw-normal mb-10 fs-4 color-000">{t("contact.teknopark")}</h2>
              <h4 className="fw-normal mb-20 fs-6 color-000 ">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                  {t("contact.adress2")}
                  </font>
                </font>
              </h4>
            </div>
            <div className="content mb-0 ">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <form action="contact.php" className="form" method="post">
                    <p className="text-center text-danger fs-12px mb-30">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {t("contact.inherit")}
                        </font>
                      </font>
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder={t("contact.place_holder_name")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder={t("contact.place_holder_email")}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder={t("contact.place_holder_telephone")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input
                            type="text"
                            name="website"
                            className="form-control"
                            placeholder={t("contact.place_holder_company_name")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-20">
                          <select name="option" className="form-select">
                            <option value="how can we help" selected>
                              {t("contact.how_help")}
                            </option>
                            <option value="option 1">
                              {t("contact.option1")}
                            </option>
                            <option value="option 2">
                              {t("contact.option2")}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            rows={10}
                            name="message"
                            className="form-control"
                            placeholder={t("contact.place_holder_how_help")}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <div className="form-check d-inline-flex mt-30 mb-30">
                          <input
                            className="form-check-input me-2 mt-0"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label small"
                            htmlFor="flexCheckDefault"
                          >
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                {t("contact.accepted_send")}
                              </font>
                            </font>
                            <a href="#" className="text-decoration-underline">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  {t("contact.terms")}
                                </font>
                              </font>
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 text-center ">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <input
                              type="submit"
                              defaultValue={t("contact.send_req")}
                              className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                            />
                          </font>
                        </font>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <Image
                src="/assets/img/icons/contact_a.png"
                width={203}
                height={269}
                alt="Contact"
                className="contact_a"
              ></Image>
              <Image
                src="/assets/img/icons/contact_message.png"
                width={313}
                height={313}
                alt="Mail"
                className="contact_message"
              ></Image>
            </div>
          </div>
        </section>
        {/* ====== end contact page ====== */}
        {/* ====== start contact page ====== */}
        <div className="map px-3 py-3 mb-10 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.037092874568!2d28.68679851142923!3d41.00256131965773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa10c7a45a479%3A0xaf202a44c452e06a!2sMegacode%20Yaz%C4%B1l%C4%B1m%20ve%20Ticaret%20Anonim%20%C5%9Eirketi!5e0!3m2!1str!2str!4v1690270909044!5m2!1str!2str"
            width={600}
            height={500}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
    </>
  );
};
export default Iletisim;
