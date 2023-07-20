import { Content } from "@/components/Content";
import Clients from "@/components/projects/Clients";
import PricingTable from "@/components/projects/PricingTable";
import { Tabs } from "antd";
import React from "react";

const Acente365 = () => {
  const items = [
    {
      key: 1,
      label: "Acente365 Nedir?",
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb-20">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  Acente365 Nedir?
                </h5>
                <p className="f_400 f_size_15">
                  Acente365, acente ve brokerlerin tüm operasyonlarını tek
                  sistem üzerinden yönetebilmenizi sağlayan inovatif bir çözüm
                  ortağıdır. Sistem sayesinde müşteri takibinizi, teklifleri,
                  poliçeleri, yenilemeleri, çapraz satış fırsatlarını ve
                  tahsilat takibi gibi birçok alanda kolayca hizmet alırsınız.
                </p>
                <p className="f_400 f_size_15">
                  Bulut tabanlı sistem, güçlü alt yapısı ile size avantaj
                  yaratır. Uluslararası güvenlik standartlarına ve tüm yasal
                  mevzuatlara uygun şekilde hazırlanan yazılımı sayesinde
                  işinizi kolaylaştırır.
                </p>
                <p className="f_400 f_size_15">
                  Acente365 alt yapısında 12 branşta 25 farklı sigorta
                  şirketinden tekliflerinizi alabilir, karşılaştırabilir ve
                  poliçeleştirebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      label: "Aracı Kurumlar için Faydaları",
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb_70">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  Aracı Kurumlar için Faydaları
                </h5>
                <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                  Tüm Sigorta Şirketinin Her Türlü Sigortacılık Faaliyeti Tek
                  Bir Platformda
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  Aracı kurumların çalıştığı tüm sigorta şirketlerinin;
                  tekliften poliçeleştirmeye, mutabakatlar, yenilemeler,
                  raporlamalar gibi her türlü üretim faaliyetlerini
                  karşılaştırmalı olarak tek bir ekrandan görüntüleyebilirsiniz.
                </p>
                <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                  Yüksek Hız ve Alternatif Teklifler İle Müşteri Memnuniyeti
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  Her sigorta şirketinin teklif ekranında ayrı ayrı beklemek ve
                  tekrarlanan form doldurma işlemleri artık geride kaldı.
                  Insurgateway ile çalıştığınız tüm sigorta şirketlerinin tüm
                  ürün tekliflerini tek bir ekrandan form doldurarak
                  karşılaştırmalı olarak görüntüleyebilir, poliçeleştirebilir ve
                  zamandan tasarruf edebilirsiniz.
                </p>
                <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                  Mevzuata Tam Uyum
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  Mevzuata uyumlu olarak hazırlanmış olan açık sigortacılık
                  platformu insurgateway, mevzuat değişiklikleri olduğunda, tüm
                  şirketler için bu değişiklikleri merkezi olarak uyguluyor ve
                  riskleri ortadan kaldırıyor.
                </p>
                <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                  Şirketinizin Entelektüel Sermayesine Katkı
                </h5>
                <p className="f_400 f_size_15">
                  Acente365, teknolojik olarak bir verinin nasıl olması
                  gerektiği, bir çalışmanın nasıl yapılabileceği ve doğru iş
                  ihtiyaçları nasıl belirleyebileceğiniz gibi birçok konuda size
                  teknik danışmanlık yapar. Bu sayede sigorta sektöründe web
                  servis düzeyinde ihtiyacınız olan her türlü sektörel ve teknik
                  bilgiye ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 3,
      label: "Sigorta Şirketleri için Faydaları",
      children: (
        <div
          className="tab-pane fade active show"
          id="ma"
          role="tabpanel"
          aria-labelledby="ma-tab"
        >
          <div className="row flex-row-reverse">
            <div className="col-lg-12">
              <div className="details_content">
                <div className="sec_title mb_70">
                  <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                    Sigorta Şirketleri için Faydaları
                  </h5>
                  <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                    Aracı Kurumlara Tek Bir Platformdan Web Servis Bağlantısı
                  </h5>
                  <p className="f_400 f_size_15 mb-20">
                    Sigorta şirketinizin tüm ürün ve hizmetlerinin web
                    servislerini Acente365’e entegre edip, aracı kurumlara
                    entegrasyonunu biz sağlarız. Bu şekilde her bir aracı kurum
                    için ayrı ayrı entegrasyon desteği vermek zorunda
                    kalmazsınız.
                  </p>
                  <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                    Kaliteli ve Sürekli Hizmet
                  </h5>
                  <p className="f_400 f_size_15 mb-20">
                    Ürün ve hizmetlerinizin entegrasyon süreci ile ilgili tüm
                    teknik destek iş gücünü Insurgateway ekibi sizin yerinize
                    üstlenir ve bu süreçte kaliteli ve sürekli bakım desteğini
                    garanti eder.
                  </p>
                  <h5 className="f_p f_size_15 f_500 t_color3 mb-20">
                    Alternatif Kanallara Kolay Entegrasyon
                  </h5>
                  <p className="f_400 f_size_15">
                    Acente365’e tanımlanmış herhangi bir ürünü; web sitesi,
                    mobil, chatbot ve akıllı robot gibi birçok dijital kanala
                    daha farklı kanala kolayca entegre edebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 4,
      label: "Acente365 Özellikleri",
      children: (
        <div className="row ">
          <div className="col-lg-4 d-flex align-items-center">
            <div className="seo_features_content">
              <h6 className="Acente365">Acente365</h6>
              <h3 className="Sigorta-Platformu-Title">
                Sigorta Aracı Kurumlarına Özel Açık Sigortacılık Platformu
              </h3>
              <p className="t_color">
                Müşteri yönetim sistemi ile tek bir platformdan tüm sigortacılık
                işlemlerinizi takip edin ve müşterilerinizin sigortacılıkla
                ilgili tüm ihtiyaçlarını yönetin!{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="seo_features_img seo_features_img_two">
              <div className="round_circle"></div>
              <div className="round_circle two"></div>
              <img
                src="https://megacode.com.tr/img/mega/agence365_banner.png"
                alt=""
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 5,
      label: "Acente365 Size Ne Sağlar?",
      children: (
        <div className="row ">
          <div className="col-lg-12 d-flex align-items-center">
            <div className="seo_features_content">
              <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                Acente365 Size Ne Sağlar?
              </h5>
              <p>
                1. Farklı sigorta şirketlerinden 2 dakikada teklif
                alabilirsiniz.
              </p>
              <p>
                2. Teklifleri tek bir ekran üzerinde karşılaştırabilir ve ürün
                detaylarını aynı anda görebilirsiniz.
              </p>
              <p>
                3. En doğru ve en güncel teklifleri müşteriye sunabilirsiniz.
              </p>
              <p>
                4. Müşteri ilişkilerini yönetebilir ve taleplerine hızlı cevap
                verebilirsiniz.
              </p>
              <p>
                5. Poliçe yenilemelerini ekran üzerinden takip edebilir ve
                anında tekliflerinizi sunabilirsiniz.
              </p>
              <p> 6. Gelir ve alacaklarınızı takip edebilirsiniz.</p>
              <p>
                7. Çapraz satış fırsatlarını kaybetmez ve uyarı ekranlarıyla
                takiplerinizi yapabilirsiniz.
              </p>
              <p>
                8. Tahsilatları, hasar ve prim oranlarını ekran üzerinden takip
                edebilirsiniz.
              </p>
              <p>
                9. Poliçe ve makbuzlarını istediği zaman hızlıca her yerden
                indirebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Content
        title={"Acente"}
        title_2={"365"}
        desc={"Tüm operasyonlarını tek sistem üzerinden yönetebilirsiniz!"}
      >
        <Tabs defaultActiveKey="1" tabPosition={"left"} items={items} />
        <Clients />
        <div className="row">
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">3.000+ Kullanıcı </a>
              </h5>
              <br></br>
              <div className="icon">
                <img src="/assets/img/icons/keep7.png" alt="" />
              </div>
              <div className="info">
                <div className="text">
                  Türkiye genelinde bulunan yüzlerce kullanıcımızla sigorta
                  sektörüne yönelik çözümler üretmeye devam ediyoruz.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">Her Noktadan Erişim </a>
              </h5>
              <br></br>
              <div className="icon">
                <img src="/assets/img/icons/keep7.png" alt="" />
              </div>
              <div className="info">
                <div className="text">
                  Müşteri,Tali,Üretim, Yenileme Listesi vb. önemli bilgilerinize
                  bilgisayar, tablet,mobil gibi farklı cihazlardan
                  erişebilirsiniz.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3 text-center">
            <div className="service-box mb-4 wow fadeInUp" data-wow-delay={0}>
              <h5>
                <a href="page-services-5.html">Kolay Öğrenme </a>
              </h5>
              <br></br>
              <div className="icon">
                <img src="/assets/img/icons/keep7.png" alt="" />
              </div>
              <div className="info">
                <div className="text">
                  Acente365’in kolay kullanımı sayesinde programı kolayca
                  öğrenebilir hızlıca işlemlerinize başlayabilirsiniz.
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
        <div className="row align-items-center my-5">
          <div className="col-sm-6">
            <img src="/assets/img/header/3d_vector_head8.svg" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="p_service_item pl_50 pr_20 mt_70">
              <h3 className="f_p f_size_28 l_height50 f_500 t_color2 mb-4">
                Acente365 Bulut Tabanlı Bir Sistemdir
              </h3>
              <p className="mb-3 fs-6">
                Acente 365 bilgi işlem yatırımınızı sizin yerinize yapar.
                Sunucu, güvenlik, lisans, antivirüs gibi tüm hizmetler servis
                edilir.
              </p>
              <p className="mb-3 fs-6">
                Acente 365 güvenlidir. Size özel veriler, veri merkezimizde
                güvenle saklanır ve her gün yedeklenir.
              </p>
              <p className="mb-3 fs-6">
                Acente 365 günceldir. Geliştirilen her özellik, düzeltme tüm
                kullanıcılar için devamlı güncellenir.
              </p>
            </div>
          </div>
        </div>
        <h3 className="f_p f_size_28 l_height50 f_500 t_color2 my-5">
          Acente365 Fonksiyonları
        </h3>
        <img src="https://megacode.com.tr/img/mega/function.png"></img>

        <PricingTable />
      </Content>
    </>
  );
};

export default Acente365;
