import { Content } from "@/components/Content";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export const acentamessenger = () => {
  return (
    <>
      <main className="single-project pt-50 style-5">
        {/* ====== start about ====== */}
        <section className="about-app style-5">
          <div className="container">
            <div className="content text-center">
              <div className="about-cards border-bottom brd-gray">
                <Content title="Acente365" title_2="Messenger"></Content>
              </div>
              <div className="img-content border-bottom brd-gray overflow-hidden">
                <div className="row justify-content-center">
                  <div className="row container">
                    <div className="col-12 col-sm-6 img text-center">
                      <Image
                        src="/assets/img/whatsapp/phone-bg.png"
                        width={700}
                        height={600}
                        alt="MegaCode Phone"
                      ></Image>
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
                    <div className="col-12 col-sm-6 info d-flex justify-content-center flex-column">
                      <h5 className="lh-4">
                        Acente365 Messenger, kurumların çoklu platformlarda
                        çalışmalarını kolaylaştırmak için kullanılır. Ayrıca,
                        kullanıcı aktivitelerini takip etmek, hızlı cevap vermek
                        ve kaynakların optimize edilmesi gibi birçok özellik
                        içerir.
                      </h5>
                      <a
                        href="https://messenger.acente365.com"
                        target="_blank"
                        className="color-blue4 mt-60"
                      >
                        Acente365 Messenger
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
                    alt="Login Sayfası"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/assets/img/whatsapp/Anasayfa.png" alt="Anasayfa" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/UrunSayısı.png"
                    alt="Ürün Sayısı Sayfası"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/EticaretVeriler.png"
                    alt="E-Ticaret Verileri Sayfası"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/MesajlasmaRaporu.png"
                    alt="Mesajlasma Raporu Sayfası"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/OturumYonlendirme.png"
                    alt="Oturum Yönlendirme Sayfası"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img
                    src="/assets/img/whatsapp/Girisim (2).png"
                    alt="Girişim Sayfası"
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
