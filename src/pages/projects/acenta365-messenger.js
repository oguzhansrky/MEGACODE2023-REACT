import { Content } from "@/components/Content";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useTranslation from "next-translate/useTranslation";

export const acentamessenger = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <main className="single-project pt-50 style-5">
        {/* ====== start about ====== */}
        <section className="about-app style-5">
          <div className="container">
            <div className="content text-center">
              <div className="about-cards border-bottom brd-gray">
                <Content title="Acenta365" title_2="Messenger"></Content>
              </div>
              <div className="img-content pt-70 pb-70 border-bottom brd-gray overflow-hidden">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="img text-center">
                      <img
                        src="assets/img/single_project/2mobs.png"
                        alt=""
                        className="main-img"
                      />
                      <img
                        src="assets/img/single_project/bubbls.png"
                        alt=""
                        className="bubbls"
                      />
                      <img
                        src="assets/img/single_project/circle.png"
                        alt=""
                        className="circle"
                      />
                    </div>
                    <div className="info mt-30">
                      <h5 className="lh-4">
                      {t("acente365_messenger.text1")}
                      </h5>
                      <a
                        href="https://messenger.acente365.com/auth"
                        target="_blank"
                        className="color-blue4 mt-60"
                      >
                        https://messenger.acente365.com/auth
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== end about ====== */}
        {/* ====== start challenge ====== */}

        {/* ====== end challenge ====== */}
        {/* ====== start screenshots  ====== */}
        <div className="screenshots style-4">
          <div className="screenshots-slider style-4">
            <Swiper
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              loop
            >
              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/Login.png"
                    alt={t("acente365_messenger.login")}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/assets/img/whatsapp/Anasayfa.png" alt={t("acente365_messenger.homepage")} />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/UrunSayısı.png"
                    alt={t("acente365_messenger.product_name")}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/EticaretVeriler.png"
                    alt= {t("acente365_messenger.e-ticaret")}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/MesajlasmaRaporu.png"
                    alt={t("acente365_messenger.messenger_rap")}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/OturumYonlendirme.png"
                    alt={t("acente365_messenger.session_redirection")}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/Girisim (2).png"
                    alt={t("acente365_messenger.initiative_page")}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <img
            src="/assets/img/screenshots/hand.png"
            alt=""
            className="mob-hand"
          />
        </div>
      </main>
    </>
  );
};
export default acentamessenger;
