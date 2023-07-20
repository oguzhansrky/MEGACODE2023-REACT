import React from "react";

const Services = () => {
  return (
    <section className="services section-padding style-1">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-head mb-60">
              <h2 className="wow fadeInUp">Hizmetlerimiz</h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
                <h5>
                  <a href="page-services-5.html">İnovatif Dijital Çözümler </a>
                </h5><br></br>
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
            <div className="col-lg-4">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h5>
                  <a href="page-services-5.html">
                    {" "}
                    Siber Güvenlik ve Bilgi Güvenliği{" "}
                  </a>
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
            <div className="col-lg-4">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h5>
                  <a href="page-services-5.html">
                    {" "}
                    Native Mobil Uygulama ve Geliştirme{" "}
                  </a>
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
            <div className="col-lg-4">
              <div
                className="service-box mb-4 mb-md-0 wow fadeInUp"
                data-wow-delay={0}
              >
                <h5>
                  <a href="page-services-5.html">
                    İhtiyaca Yönelik Yazılım Geliştirme{" "}
                  </a>
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
            <div className="col-lg-4">
              <div
                className="service-box mb-4 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h5>
                  <a href="page-services-5.html">
                    {" "}
                    Ana Sistemler ve Donanım Altyapı Desteği{" "}
                  </a>
                </h5>
                <div className="icon">
                  <img src="assets/img/icons/keep3.png" alt="" />
                </div>
                <div className="info">
                  <div className="text">
                    Farklı tedarikçi yazılımlar ile şirketler arasında köprü
                    olur ve teknoloji ile alakalı tüm süreçlerini yöneterek
                    zamandan tasarruf ettiririz.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="service-box mb-4 mb-md-0 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h5>
                  <a href="page-services-5.html">Sosyal Medya Yönetimi</a>
                </h5><br></br>
                <div className="icon">
                  <img src="assets/img/icons/keep2.png" alt="" />
                </div>
                <div className="info">
                  <div className="text">
                    Marka kişiliğini oluşturur, hedef kitle ve rakip
                    analizlerini gerçekleştirerek şirketler için en doğru sosyal
                    medya stratejisini belirleriz.
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
