import Link from "next/link";
import React from "react";

const PricingTable = () => {
  return (
    <section className="pricing section-padding border-bottom border-1 brd-gray style-5">
      <div className="container">
        <div className="section-head text-center mb-60 style-5">
          <h2 className="mb-20">
            Size Özel <span> Paketlerimiz </span>
          </h2>
          <p>
            Ürünlerimiz hakkında detaylı bilgi almak için iletişim formumuzu
            doldurabilirsiniz. En kısa sürede uzman ekiplerimiz size dönüş
            yapacaktır.
          </p>
        </div>
        <div className="table-responsive">
          <div className="content">
            <div className="price-head">
              <div className="price-headTitle">
                <img src="/assets/img/icons/price_s5.png" alt="" />
              </div>
              <div className="price-headItem px-2">
                <h6>Bronz Paket</h6>
                <small>
                  Müşteri kayıtlarınızı, teklif ve poliçelerinizi,
                  hasarlarınızı, tahsilat alış verişinizi yönetmeniz için
                  tasarlanan bulut tabanlı CRM sistemidir.
                </small>
              </div>
              <div className="price-headItem bg-gray5 px-2">
                <h6>Silver Paket</h6>
                <small>
                  Sistemden online karşılaştırmalı Kasko, Trafik, Dask,
                  Tamamlayıcı Sağlık teklifleri alın.
                </small>
                <small>
                  Tekliflerinizi poliçeleştirin ve tahsilatını yapın. Tamamı tek
                  sistem üzerinde ve CRM modülü ile tam entegredir.
                </small>
                <div className="label">best choice</div>
              </div>
              <div className="price-headItem px-2">
                <h6>Gold Paket</h6>
                <small>
                  Sisteminizin gücünü açığa çıkartın. Web ve sosyal medyadan
                  müşteri edinin, müşterilerinize web üzerinden online teklif ve
                  poliçe yapma imkanı verin.
                </small>
              </div>
            </div>
            <div className="price-body">
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Müşteri Yönetimi</div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Çapraz Satışlar</div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Online Teklif</div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Online Poliçe</div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Online Zeyil</div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Online Otomatik Yenileme</div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Sorgulama Servis Yönetimi</div>
                <div className="price-item">
                  {" "}
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  {" "}
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Offline Pro Ekranlar</div>
                <div className="price-item">
                  {" "}
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Firmaya Özel Raporlama</div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Firmaya Özel Raporlama</div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">İnsan Kaynakları Yönetimi</div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Pazarlama Yönetimi</div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Ön Muhasebe</div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Call Center Yönetimi</div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5"></div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  Online Teklif ve Poliçe Entegrasyonu
                </div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5"></div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Mobil Uygulama</div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5"></div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">Web Servis Hizmeti</div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5"></div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
            </div>
            <div className="price-foot">
              <div className="price-footTitle"></div>
              <div className="price-footItem">
                <Link
                  href="/iletisim"
                  className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold"
                >
                  <span> Teklif Alın </span>
                </Link>
              </div>
              <div className="price-footItem bg-gray5">
                <Link
                  href="/iletisim"
                  className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold"
                >
                  <span> Teklif Alın </span>
                </Link>
              </div>
              <div className="price-footItem">
                <Link
                  href="/iletisim"
                  className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold"
                >
                  <span> Teklif Alın </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
