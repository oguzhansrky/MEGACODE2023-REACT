import React from "react";

const Services = () => {
  return (
    <section className="services section-padding style-1">
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <div className="section-head mb-60">
              <h2 className="wow fadeInUp">Hizmetlerimiz</h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
                <h5>
                  <a href="page-services-5.html">İnovatif Dijital Çözümler </a>
                  <span className="num">01</span>
                </h5>
                <div className="icon">
                  <img src="assets/img/icons/keep7.png" alt="" />
                </div>
                <div className="info">
                  <div className="text">
                    Hayatın her alanında birçok kolaylık sağlayan dijital
                    çözümler sayesinde sizin için sürdürülebilir, maliyet
                    avantajı sağlayan çözümler üretiriz
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h5>
                  <a href="page-services-5.html">
                    {" "}
                    Siber Güvenlik ve Bilgi Güvenliği{" "}
                  </a>
                  <span className="num">02</span>
                </h5>
                <div className="icon">
                  <img src="assets/img/icons/keep1.png" alt="" />
                </div>
                <div className="info">
                  <div className="text">
                    Kurumların güvenlik ihtiyaçlarını tespit edip olası
                    saldırılara karşı güvenlik testi yapıyor ve doğru yatırımlar
                    yapmasını sağlarız.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h5>
                  <a href="page-services-5.html">
                    {" "}
                    Native Mobil Uygulama ve Geliştirme{" "}
                  </a>
                  <span className="num">03</span>
                </h5>
                <div className="icon">
                  <img src="assets/img/icons/mobile2.png" alt="" />
                </div>
                <div className="info">
                  <div className="text">
                    Gün geçtikçe değişen ve gelişen mobil uygulama dünyasında
                    teknolojiye uygun mobil yazılım geliştiririz.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-box mb-4 mb-md-0 wow fadeInUp"
                data-wow-delay={0}
              >
                <h5>
                  <a href="page-services-5.html">
                    İhtiyaca Yönelik Yazılım Geliştirme{" "}
                  </a>
                  <span className="num">04</span>
                </h5>
                <div className="icon">
                  <img src="assets/img/icons/product-banner-point.png" alt="" />
                </div>
                <div className="info">
                  <div className="text">
                    Süreçlerin pratik, çok daha kolay ve uygun maliyetlerle
                    sürdürülebilmesi için modüler yazılım çözümleri sağlarız.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/img/services/ser_shap_l.png"
        alt=""
        className="ser_shap_l"
      />
      <img
        src="assets/img/services/ser_shap_r.png"
        alt=""
        className="ser_shap_r"
      />
    </section>
  );
};

export default Services;
