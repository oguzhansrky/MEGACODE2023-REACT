import { Content } from "@/components/Content";
import { Radio, Space, Tabs } from "antd";
import React from "react";

const Hakkimizda = () => {
  const items = [
    {
      key: 1,
      label: "Hakkımızda",
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb-20">
                <p className="f_400 f_size_15">
                  Mega Code Yazılım 2012 yılında İstanbul’da kurulmuş yazılım
                  şirketidir. Tecrübeli ve uzman kadrosu sayesinde şirketlere
                  sadece yazılım değil dijital çözümlerde üretir. Teknolojinin
                  sunduğu hizmetler ile yenilikler sayesinde tüm sektörlere ve
                  her büyüklükte firmalara çözüm ortaklığı yapar. Mega Code
                  sadece Türkiye’de değil başta Amerika ve İngiltere olmak üzere
                  tüm dünyaya yazılım ihracatı yapar.
                </p>
              </div>
              <div className="job_deatails_content">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  İLKELERİMİZ:
                </h5>
                <p className="f_400 f_size_15 mb-20">
                  Önceliğimiz Müşterilerimiz.
                </p>
                <ul className="list-unstyled mb-20">
                  <li>
                    <i className="bi bi-chevron-right"></i> En iyi hizmet
                    ilkesiyle müşterilerimizi karşılar tüm soru ve sorunlarına
                    cevap veririz.
                  </li>
                </ul>
              </div>
              <div className="job_deatails_content">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  Sürdürülebilir Projeler;
                </h5>
                <ul className="list-unstyled mb-20">
                  <li>
                    <i className="ti-arrow-right"></i> Sunduğumuz tüm projelerin
                    sürdürülebilir ve geliştirilebilir olmasına özen gösteririz.{" "}
                  </li>
                </ul>
              </div>
              <div className="job_deatails_content">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  İnovasyon;
                </h5>
                <ul className="list-unstyled mb-20">
                  <li>
                    <i className="ti-arrow-right"></i>İhtiyaçlara uygun yeni
                    fikirler uygular, dinamik ürünler üretir veya var olan
                    hizmetleri geliştiririz.
                  </li>
                </ul>
              </div>
              <div className="job_deatails_content">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  Teknoloji;
                </h5>
                <ul className="list-unstyled mb-20">
                  <li>
                    <i className="ti-arrow-right"></i> Teknolojiyi size en iyi
                    ve doğru hizmeti sunabilmek için kullanırız.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      label: "Bilgi Güvenliği Politikası",
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb-20">
                <h5 className="f_p f_size_22 f_500 t_color3 mb_20">
                  Bilgi Güvenliği Politikası
                </h5>
                <img
                  className="politikaimg"
                  src="https://megacode.com.tr/img/mega/bilgi.png"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 3,
      label: "Kalite ve Çevre Politikası",
      children: (
        <div className="row ">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title mb_70">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  Kalite ve Çevre Politikası
                </h5>
                <img
                  className="politikaimg"
                  src="https://megacode.com.tr/img/mega/kalitevecevre.png"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 4,
      label: "KVKK ve Gizlilik",
      children: (
        <div className="row flex-row-reverse">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="reading">
                <h5>YASAL UYARI</h5>
                <p className="yasalp_two">
                  Kişisel verileriniz, sayılanlar ile sınırlı olmamak üzere;
                  genel müdürlük, bölge müdürlükleri, tedarikçilerimiz, iş
                  ortaklarımız, yetkili/resmi kurum kuruluşlar, özel ve resmi
                  tüm sağlık kişi, kurum, kuruluşları, diğer sigorta şirketleri
                  ve diğer ilgili üçüncü kişi/kurumlardan internet şubesi, çağrı
                  merkezi, kapalı devre kamera sistemi ve diğer tüm fiziki,
                  yazılı, sözlü ve elektronik ortamlar/kanallar vasıtasıyla
                  bizzat tarafınızca ve/veya bilginiz dahilinde
                  gönderilen/sağlanan/doldurulmuş formlar, belgeler,
                  sözlü/yazılı beyanlar, poliçeler, muvafakatnameler, özgeçmiş,
                  kimlik belgeniz, elektronik posta, ses/görüntü kayıtlarından
                  elde edilmekte olup, KVKK m. 4/2 hükmünde öngörülen ilkelere
                  uygun olarak KVKK m.5/2 ve 6/3 hükümlerinde öngörülen
                  durumların haricinde açık rızanıza istinaden işlenebilmekte ve
                  aktarılabilmektedir.
                </p>
                <p className="yasalp_three">
                  KVKK’nın 11. maddesinde Sayılan Hakları
                </p>
                <p className="yasalp_three">
                  Şirketimize başvurarak, kişisel verilerinizin;
                </p>
                <ol>
                  <li>İşlenip işlenmediğini öğrenme,</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>
                    İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını
                    öğrenme,
                  </li>
                  <li>
                    Yurt içinde/yurt dışında aktarıldığı 3 kişileri bilme,
                  </li>
                  <li>Eksik/yanlış işlenmişse düzeltilmesini isteme,</li>
                  <li>
                    KVKK’nın md. 7’deki şartlar çerçevesinde silinmesini / yok
                    edilmesini / anonimleştirilmesini isteme,
                  </li>
                  <li>
                    Düzeltme, silme/yok etme işlemlerinin verilerin aktarıldığı
                    3 kişilere bildirilmesini isteme,
                  </li>
                  <li>
                    Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle
                    aleyhinize bir sonucun ortaya çıkmasına itiraz etme,
                  </li>
                  <li>
                    Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız
                    hâlinde zararın giderilmesini talep etme haklarına sahip
                    olduğunuzu bildirir, sizlere sunduğumuz tüm ürün ve
                    hizmetlerimizde kişisel veri güvenliğinin ön planda olduğu
                    bilinciyle faaliyetlerimize devam ettiğimizi bilgilerinize
                    sunarız.
                  </li>
                </ol>
                <p>Kişisel Veri Sahibi Başvuru Usulü</p>
                <p>
                  Yukarıda belirtilen haklarınıza ilişkin taleplerinizi iletmek
                  için bu aydınlatma metninin en alt kısmında yer alan linkte
                  bulunan Başvuru Formu’nu kullanabilirsiniz.
                </p>
                <p>Taleplerinize ilişkin başvurularınızı;</p>
                <ol>
                  <li>Elden</li>
                  <li>İadeli taahhütlü mektupla</li>
                  <li>
                    Noter aracılığıyla Turgut Özal mah. 68.Sk Otoport Avm Kat/8
                    No/247 Esenyurt / İstanbul adresine ıslak imzalı kopyası ile
                    veya
                  </li>
                  <li>
                    Kişisel Verileri Koruma Kurulu tarafından öngörülen başkaca
                    bir yöntem ile, iletebilirsiniz.
                  </li>
                </ol>
                <h6>
                  Talebiniz mümkün olan en kısa sürede ve her halükarda KVKK’da
                  belirtilen süre içerisinde değerlendirilerek
                  sonuçlandırılacaktır. Sizin adınıza 3. kişilerin başvuru
                  talebinde bulunabilmesi için başvuruda bulunacak kişi adına
                  noter kanalıyla düzenlenmiş özel vekaletname bulunmalıdır.
                  Başvurunuzun incelenmesi ve sonuçlandırılmasına ilişkin
                  işlemin bir maliyet gerektirmesi halinde Şirketimizce Kurul
                  tarafından belirlenen tarifedeki ücret alınabilir.
                </h6>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 5,
      label: "Kalite Belgelerimiz",
      children: (
        <div className="row ">
          <div className="col-lg-12">
            <div className="details_content">
              <div className="sec_title">
                <h5 className="f_p f_size_22 f_500 t_color3 mb-20">
                  Kalite Belgelerimiz
                </h5>
                <p>
                  Bağımsız denetim kurumları tarafından verilen ulusal ve
                  uluslararası kalite belgeleri sayesinde Mega Code Yazılım
                  A.Ş.’nin Türkiye Bilişim Sektöründe ki farkını ortaya
                  koymaktadır. Daha sürdürülebilir, etkin bir şekilde rekabet
                  etmemize olanak sağlamıştır. <br />
                </p>
                <p>
                  Kalite belgelerimiz, müşteri beklentilerini en uygun, doğru
                  şekilde karşılayacağımızın ve memnuniyeti en önde
                  tutacağımızın bir göstergesidir. Entegre Yönetim Sistemine
                  uyum sürecimizi başlatırken Mega Code Yazılım A.Ş.’nin de
                  kurumsal yapısı buna göre hazırlanmıştır.
                </p>
                <div className="row mt-20">
                  <div className="col-lg-4">
                    <img
                      className="link-image-list-item-border"
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-10002-SO2.jpg"
                    />
                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-10002-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 10002
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <img
                      className="link-image-list-item-border"
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-13298-SO2.jpg"
                    />
                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-13298-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 13298
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <img
                      className="link-image-list-item-border"
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-14001-SO2.jpg"
                    />
                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-14001-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 14001
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      className="link-image-list-item-border"
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-22301-SO2.jpg"
                    />
                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-22301-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 22301
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <img
                      className="link-image-list-item-border"
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-27001-SO2.jpg"
                    />
                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-27001-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 27001
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <img
                      className="link-image-list-item-border"
                      src="https://megacode.com.tr/img/certs/MEGACODE-ISO-9001-SO2.jpg"
                    />
                    <a
                      rel="noopener noreferrer"
                      className="subpage__content-link-image-list-item-link btn btn-hover-danger"
                      href="https://megacode.com.tr/uploads/MEGACODE-ISO-9001-SO2.pdf"
                    >
                      MEGACODE YAZILIM ISO 9001
                    </a>
                  </div>
                </div>
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
        title={"Hakkımızda"}
        desc={
          "Zaman ve maliyet yönetiminiz için size dijital çözümler üretiyoruz."
        }
      >
        <Tabs defaultActiveKey="1" tabPosition={"left"} items={items} />
      </Content>
    </>
  );
};

export default Hakkimizda;
