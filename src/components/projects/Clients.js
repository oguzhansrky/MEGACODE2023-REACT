import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Image from "next/image";

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
          slidesPerView={2}
          loop={true}
          speed={6000}
          breakpoints={{
            844: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 7,
            },
          }}
        >
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/svg/Bupa-Acibadem-Sigorta_46505.svg"
                width={100}
                height={50}
                alt="Acıbadem Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/2.png"
                width={100}
                height={50}
                alt="Ak Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/3.png"
                width={100}
                height={50}
                alt="Allianz Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/4.png"
                width={100}
                height={50}
                alt="Ana Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/5.png"
                width={100}
                height={50}
                alt="Anadolu Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/6.png"
                width={100}
                height={50}
                alt="Ankara Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/7.png"
                width={100}
                height={50}
                alt="Arex Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/8.png"
                width={100}
                height={50}
                alt="Atlas Mutuel Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/9.png"
                width={100}
                height={50}
                alt="Aveon Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/10.png"
                width={100}
                height={50}
                alt="Axa Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/11.png"
                width={100}
                height={50}
                alt="Bereket Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/12.png"
                width={100}
                height={50}
                alt="Doğa Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/13.png"
                width={100}
                height={50}
                alt="Eureko Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/14.png"
                width={100}
                height={50}
                alt="Gig Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/31.png"
                width={100}
                height={50}
                alt="Tmt Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/32.png"
                width={100}
                height={50}
                alt="Unico Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/33.png"
                width={100}
                height={50}
                alt="Zurich Sigorta"
              ></Image>
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
          slidesPerView={2}
          loop={true}
          speed={6000}
          dir="rtl"
          breakpoints={{
            844: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 7,
            },
          }}
        >
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/15.png"
                width={100}
                height={50}
                alt="Gri Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              {" "}
              <Image
                src="/assets/img/logos/16.png"
                width={100}
                height={50}
                alt="Groupama Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/17.png"
                width={100}
                height={50}
                alt="Gig Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/18.png"
                width={100}
                height={50}
                alt="Türkiye Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/19.png"
                width={100}
                height={50}
                alt="HDI Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/20.png"
                width={100}
                height={50}
                alt="Hep İyi Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/21.png"
                width={100}
                height={50}
                alt="Katılım Emeklilik Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/22.png"
                width={100}
                height={50}
                alt="Koru Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/23.png"
                width={100}
                height={50}
                alt="Mapfre Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/24.png"
                width={100}
                height={50}
                alt="Neova Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/25.png"
                width={100}
                height={50}
                alt="Türkiye Nippon Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/26.png"
                width={100}
                height={50}
                alt="Orient Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/27.png"
                width={100}
                height={50}
                alt="Quick Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/28.png"
                width={100}
                height={50}
                alt="Ray Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/29.png"
                width={100}
                height={50}
                alt="Şeker Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/30.png"
                width={100}
                height={50}
                alt="Sompo Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="img">
              <Image
                src="/assets/img/logos/34.png"
                width={100}
                height={50}
                alt="Ray Sigorta"
              ></Image>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
