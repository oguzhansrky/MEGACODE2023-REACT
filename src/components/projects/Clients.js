import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const Clients = () => {
  return (
    <section className="clients style-5 my-5">
      {/*     <div className="section-head text-center mb-40 style-5">
        <h2 className="mb-20">
          Trusted By Thoudsands <span> Business </span>{" "}
        </h2>
        <p>More than 15,000 companies trust and choose Iteck</p>
      </div> */}
      <div className="content">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={6}
          loop={true}
          speed={6000}
        >
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/1.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/2.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/3.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/4.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/5.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/6.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/7.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/8.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/9.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/10.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/11.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/12.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/13.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/14.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/31.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/32.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/33.png" alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 0,
          }}
          modules={[Autoplay]}
          slidesPerView={6}
          loop={true}
          speed={6000}
          dir="rtl"
        >
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/15.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/16.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/17.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/18.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/19.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/20.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/21.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/22.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/23.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/24.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/25.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/26.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/27.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/28.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/29.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/30.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <img src="/assets/img/logos/34.png" alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
