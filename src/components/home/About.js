import React from "react";

const About = () => {
  return (
    <section className="about style-1">
      <div className="container">
        <div className="content">
          <div className="about-logos d-flex align-items-center justify-content-between border-bottom border-1 brd-light pb-20">
            <a href="#" className="logo wow fadeInUp" data-wow-delay={0}>
              <img src="assets/img/about/about_logos/1.png" alt="" />
            </a>
            <a href="#" className="logo wow fadeInUp" data-wow-delay="0.2s">
              <img src="assets/img/about/about_logos/2.png" alt="" />
            </a>
            <a href="#" className="logo wow fadeInUp" data-wow-delay="0.4s">
              <img src="assets/img/about/about_logos/3.png" alt="" />
            </a>
            <a href="#" className="logo wow fadeInUp" data-wow-delay="0.6s">
              <img src="assets/img/about/about_logos/4.png" alt="" />
            </a>
            <a href="#" className="logo wow fadeInUp" data-wow-delay="0.8s">
              <img src="assets/img/about/about_logos/5.png" alt="" />
            </a>
          </div>
          <div className="about-info">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="title">
                  <h3 className=" wow fadeInUp slow">
                    “Sizin memnuniyetiniz bizim referansımız…”
                  </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info">
                  <h6 className=" wow fadeInUp slow">
                    Mega Code Yazılım 2012 yılında İstanbul’da kurulmuş yazılım
                    şirketidir. Tecrübeli ve uzman kadrosu sayesinde şirketlere
                    sadece yazılım değil dijital çözümlerde üretir.
                  </h6>
                  <p className=" wow fadeInUp slow">
                    Teknolojinin sunduğu hizmetler ile yenilikler sayesinde tüm
                    sektörlere ve her büyüklükte firmalara çözüm ortaklığı
                    yapar. Mega Code sadece Türkiye’de değil başta Amerika ve
                    İngiltere olmak üzere tüm dünyaya yazılım ihracatı yapar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-numbers">
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="num-item wow fadeInUp" data-wow-delay="0.6s">
                  <div class="num">
                    <span class="counter">2</span>
                  </div>
                  <div class="inf">Ülke</div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="num-item wow fadeInUp" data-wow-delay="0">
                  <div class="num">
                    <span class="counter">8</span>
                    <span>
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                  <div class="inf">Yıllık Deneyim</div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="num-item wow fadeInUp" data-wow-delay="0.2s">
                  <div class="num">
                    <span class="counter">320</span>
                  </div>
                  <div class="inf">Tamamlanan proje</div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="num-item wow fadeInUp" data-wow-delay="0.4s">
                  <div class="num">
                    <span class="counter">3</span>
                    <span>B</span>
                  </div>
                  <div class="inf">Mutlu kullanıcı</div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/img/about/num_shap.png"
            alt=""
            className="about_shap"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
