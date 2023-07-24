import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const ProjectSlider = ({ slides }) => {
  return (
    <main className="blog-page style-5">
      <section className="blog-slider pt-50 pb-50 style-1">
        <div className="container">
          <div className="blog-details-slider">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation
              modules={[Autoplay, Navigation, EffectFade]}
              slidesPerView={1}
              loop={true}
              effect="fade"
              speed={1000}
            >
              {slides.map((item) => (
                <SwiperSlide>
                  <div className="content-card">
                    <div className="img overlay">
                      <img src={item} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectSlider;