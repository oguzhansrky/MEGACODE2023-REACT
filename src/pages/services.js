import { Content } from "@/components/Content";
import Services from "@/components/home/Services";

import React from "react";

function hizmetlerimiz() {
  return (
    <>
      <Content
        title={"Hizmetlerimiz"}
        desc={"İşinizi Kolaylaştıran, İnovatif Çözümler…"}
      >
        <div className="container mt-6">
          <div className="row">
            <div className="col-lg-6">
              <div className="img mb-4 mb-lg-0 wow fadeIn">
                <img src="/assets/img/about/3d_vector2.svg" alt=""></img>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <h2 className="">
                  Geniş Hizmet Yelpazesi Sunuyor ve Tam Müşteri Memnuniyeti
                  Sağlıyoruz
                </h2>
                <p className="mt-3 fs-5">
                  MegaCode Yazılım ile teknolojinin hızlı gelişiminin takibine
                  ve kalitenin önceliğine inanan Türkiye’nin ilk ve tek sigorta
                  temalı dijital ajansı olarak hizmet veriyoruz ve dijital
                  dünyanın tüm yenilikçi çözümlerini işinizi büyütmek için
                  kullanıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Services></Services>
      </Content>
    </>
  );
}

export default hizmetlerimiz;
