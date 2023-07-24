import { Content } from "@/components/Content";

import { Tabs } from "antd";
import React from "react";

const Sea365 = () => {
  const items = [
    {
      key: 1,
      label: "Sea Nedir?",
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb-20">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  Sea365 Nedir?
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  Sea365, denizcilik sektörü için hayatlarını kolaylaştırmak ve
                  her şeyin sistematik şekilde yürümesi için tasarlanan bulut
                  tabanlı bir sistemdir. Satıcıları ve alıcıları ortak bir
                  noktada buluşturmakta ve birbirleriyle kolayca iletişime
                  geçmelerini sağlamaktadır.
                </p>

                <p className="f_400 f_size_15 ">
                  Sistem sayesinde, gerekli olan malzemeleri online olarak satın
                  alabilir, bilgi paylaşımında bulunabilir ve karşılaştırmalar
                  yapabilirsiniz. Ayrıca sistem size gemilerinizi istediğiniz
                  gibi yönetebilme ve işleri takip edebilme özelliği de
                  sunmaktadır. Tamamen ihtiyaçlar düşünülerek kurulan Sea365,
                  denizcilik sektörünün uluslararası standartlara uygun şekilde
                  çalışmasını amaçlamaktadır.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      label: "Sea365 Özellikleri",
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb_70">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  Sea365 Özellikleri
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  1. Kurumunuz için en faydalı olacak yazılımları tek bir sistem
                  üzerinde toplamaktadır.
                </p>
                <p className="f_400 f_size_15 mb-20">
                  2. Günceldir, sürekli yenilerin ve teknolojiyi takip eder.
                </p>
                <p className="f_400 f_size_15 mb-20">
                  3. Hızlı ve güvenilir bir şekilde yönetim imkanı sunar.
                </p>
                <p className="f_400 f_size_15 mb-20">
                  4. Operasyon, muhasebe gibi yönetim sistemlerini hızlandırır
                  ve maliyeti düşürür.
                </p>
                <p className="f_400 f_size_15 mb-20">
                  5. Denizcilik sektöründe ihtiyacınız olan ve olacak şeyleri
                  takip eder.
                </p>
                <p className="f_400 f_size_15 mb-20">
                  6. Uzman kadrosu sayesinde yaşanılabilecek sorunlarda hızlı ve
                  kalıcı çözümler üretir.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Content
        title={"Sea"}
        title_2={"365"}
        desc={"Tüm operasyonlarını tek sistem üzerinden yönetebilirsiniz!"}
      >
        <Tabs defaultActiveKey="1" tabPosition={"left"} items={items} />
        <div className="row mt-5">
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">Kullanımı Kolay</a>
              </h5>
              <br></br>
              <div className="icon">
                <img src="/assets/img/icons/icon1.png" alt="" />
              </div>
              <div className="info">
                <div className="text">
                  Sea365 tanıdık bir windows benzeri arayüzü ile kullanımı
                  kolay.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">Güvenlik</a>
              </h5>
              <br></br>
              <div className="icon">
                <img src="/assets/img/icons/keep7.png" alt="" />
              </div>
              <div className="info">
                <div className="text">
                  Tüm veriler 256 bit şifreleme protokolü ile korunmaktadır.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">Bulut Tabanlı </a>
              </h5>
              <br></br>
              <div className="icon">
                <img src="/assets/img/icons/keep7.png" alt="" />
              </div>
              <div className="info">
                <div className="text">
                  Yönetilecek fiziksel bir sunucu veya yazılım yoktur ve
                  Sea365'e herhangi bir cihazdan erişebilirsiniz.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 service-box p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">Uzman Ekip Desteği </a>
              </h5>
              <br></br>
              <div className="icon">
                <img src="/assets/img/icons/keep7.png" alt="" />
              </div>
              <div className="info">
                <div className="text">
                  Uzman kadromuz sayesinde yaşayabileceğiniz her problemde
                  yanınızda olur ve çözümler üretiriz.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center my-5 ">
          <div className="col-sm-6">
            <img src="/assets/img/seapc.png" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="p_service_item pl_50 pr_20 mt_70">
              <h3 className="f_p f_size_28 l_height50 f_500 t_color2 mb-4">
                Sea365
              </h3>

              <h4>
                Tedarikçileri ve denizcilerin hayatını kolaylaştırmak için
                tasarlanmıştır.
              </h4>

              <p className="mb-3 fs-6">
                Sea365 bulut tabanlı bir yazılımdır. Denizcilik sektöründe
                faaliyet gösteren alıcılara ve satıcılara kolay erişim sağlamayı
                amaçlamaktadır.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <h3 className="text-center">Sea365 Ürünleri</h3>
          <div className="row mt-2 ">
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4">
              <div className="mt-5">
                <img src="/assets/img/layer1.png" alt="" />
                <p className="mt-3">
                  Geminin ihtiyacı olabilecek kumanya, sarf ve teknik malzeme
                  taleplerinin yüklenebildiği ve satın alma işlemlerinin
                  gerçekleştirilebildiği yazılımdır. Bu sistem sayesinde fiyat
                  karşılaştırma, satın alma ve teslimat gibi süreçler takip
                  edilir.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4">
              <div className="mt-5">
                <img src="/assets/img/layer2.png" alt="" />
                <p className="mt-3">
                  Firmaların ve armatörlerin kendi gemilerini yönetebilecekleri
                  bir programdır. Uluslararası sertifikalara sahip Türk yazılımı
                  olan SeaHUB, gemi planlamalarını yapar, envanterleri ve
                  stokları takip eder, yönetimsel ve muhasebesel işler için
                  kullanılabilir ve gemi ile alakalı kayıt ve belgelere ulaşım
                  kolaylığı sağlar..
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4 ">
              <div className="mt-5">
                <img src="/assets/img/layer3.png" alt="" />
                <p className="mt-3">
                  {" "}
                  Bütün gemilere mesaj yollama işlemlerini yapan ve gemilerin
                  kaptanlarıyla iletişime geçmeyi sağlayan otomasyon pazarlama
                  robotudur. Belirlenmiş limanlara gelen gemileri bulur. Ayrıca
                  mail, telex atma ve geminin rotası, tipi ağırlığı gibi
                  özellikleri göstermektedir.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4">
              <div className="mt-5">
                <img src="/assets/img/layer4.png" alt="" />
                <p className="mt-3">
                  Gemilerin yanında taşımak zorunda olduğu yayınlar ve
                  dokümantasyonlar sistemin içerisinde toplanmaktadır. Bu sayede
                  eksiksiz bir şekilde gemi yolculuğunu yapabilir. Ayrıca sistem
                  sayesinde envanterleri satın almak zorunda kalınmıyor ve
                  kiralama işlemi yapılmış oluyor.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4">
              <div className="mt-5">
                <img src="/assets/img/layer5.png" alt="" />
                <p className="mt-3">
                  Deniz ve gemicilik sektöründe iş arayanları ve iş verenleri
                  buluşturan bir platformdur. SeaCREW sayesinde aranılan işe ve
                  elemana kolayca ulaşılabilir.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-4">
              <div className="mt-5">
                <img src="/assets/img/layer6.png" alt="" />
                <p className="mt-3">
                  Gemi yedek parçalarının satışının gerçekleştirilebildiği bir
                  yazılımdır. Sistem sayesinde gemi parçalarının satışı
                  gerçekleştirilir ve ihtiyaç duyulan parçalara ulaşılabilir.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Sea365;
