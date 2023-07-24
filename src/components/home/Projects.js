import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
  return (
    <div className="screenshots style-4">
      <div className="screenshots-slider style-4">
        <Swiper autoplay={true} loop={true} spaceBetween={30} slidesPerView={5}>
          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/2.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/3.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/4.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/6.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/7.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/8.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/9.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/10.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/image.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="assets/img/screenshots/image10.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <img src="assets/img/screenshots/hand.png" alt="" className="mob-hand" />
    </div>
  );
};

export default Projects;
