import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
  return (
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
                src="/assets/img/screenshots/1.png"
                alt="Sea365.net Mobil Uygulaması"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/assets/img/screenshots/5.png" alt="Dijipol" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="img">
              <img src="/assets/img/screenshots/3.png" alt="Kargo-Tek" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="img">
              <img
                src="/assets/img/screenshots/4.png"
                alt="Deniz Ticaret Odası"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="img">
              <img src="/assets/img/screenshots/2.png" alt="Maxibillion" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/assets/img/screenshots/6.png" alt="Postkolik" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/assets/img/screenshots/7.png" alt="Flomak" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img
                src="/assets/img/screenshots/8.png"
                alt="Medibaby Mobil Uygulaması"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/assets/img/screenshots/9.png" alt="Porsche" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/assets/img/screenshots/10.png" alt="Sigortam Getir" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/assets/img/screenshots/image.png" alt="Megacode" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/assets/img/screenshots/image10.png" alt="Megacode" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/assets/img/screenshots/seat.png" alt="Seat" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <img src="/assets/img/screenshots/hand.png" alt="" className="mob-hand" />
    </div>
  );
};

export default Projects;
