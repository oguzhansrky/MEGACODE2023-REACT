import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

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
<<<<<<< HEAD
                    <Image 
                    src="/assets/img/screenshots/1.png"
                    width={400}
                    height={300}
                    alt="Sea365.net Mobil Uygulaması"
                    >
                    </Image>
=======
              <img
                src="/assets/img/screenshots/1.png"
                alt="Sea365.net Mobil Uygulaması"
              />
>>>>>>> 80313ad3291f07c4b665d660e909f60c96cf73fe
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
            <Image 
                    src="/assets/img/screenshots/5.png"
                    width={400}
                    height={300}
                    alt="Dijipol"
                    >
                    </Image>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="img">
            <Image 
                    src="/assets/img/screenshots/3.png"
                    width={400}
                    height={300}
                    alt="Kargo-Tek"
                    >
                    </Image>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="img">
<<<<<<< HEAD
            <Image 
                    src="/assets/img/screenshots/4.png"
                    width={400}
                    height={300}
                    alt="Deniz Ticaret Mobil Uygulaması"
                    >
                    </Image>
=======
              <img
                src="/assets/img/screenshots/4.png"
                alt="Deniz Ticaret Odası"
              />
>>>>>>> 80313ad3291f07c4b665d660e909f60c96cf73fe
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="img">
            <Image 
                    src="/assets/img/screenshots/2.png"
                    width={400}
                    height={300}
                    alt="Maxibillion"
                    >
                    </Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
            <Image 
                    src="/assets/img/screenshots/6.png"
                    width={400}
                    height={300}
                    alt="Postkolik"
                    >
                    </Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
            <Image 
                    src="/assets/img/screenshots/7.png"
                    width={400}
                    height={300}
                    alt="Flomak"
                    >
                    </Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
<<<<<<< HEAD
            <Image 
                    src="/assets/img/screenshots/8.png"
                    width={400}
                    height={300}
                    alt="Medibaby Mobil Uygulaması"
                    >
                    </Image>
=======
              <img
                src="/assets/img/screenshots/8.png"
                alt="Medibaby Mobil Uygulaması"
              />
>>>>>>> 80313ad3291f07c4b665d660e909f60c96cf73fe
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
            <Image 
                    src="/assets/img/screenshots/9.png"
                    width={400}
                    height={300}
                    alt="Porsche"
                    >
                    </Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
            <Image 
                    src="/assets/img/screenshots/10.png"
                    width={400}
                    height={300}
                    alt="Sigortam Getir"
                    >
                    </Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <Image 
              src="/assets/img/screenshots/image.png"
              width={400}
              height={300}
              alt="Megacode"
              >
              </Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
            <Image 
                    src="/assets/img/screenshots/image10.png"
                    width={400}
                    height={300}
                    alt="Megacode"
                    >
                    </Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
            <Image 
                    src="/assets/img/screenshots/seat.png"
                    width={400}
                    height={300}
                    alt="Seat"
                    >
                    </Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <img src="/assets/img/screenshots/hand.png" alt="" className="mob-hand" />
    </div>
  );
};

export default Projects;
