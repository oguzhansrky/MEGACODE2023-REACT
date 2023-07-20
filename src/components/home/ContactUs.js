import React from "react";

const ContactUs = () => {
  return (
    <section className="contact section-padding bg-gradient style-1">
      <div className="container">
        <div className="section-head mb-60 text-center">
          <h5 className="text-white text-uppercase wow fadeInUp"> İLETİŞİM</h5>
          {/*           <h2 className="wow fadeInUp text-white">
            İş ortaklarımızın memnuniyeti en iyi referansımızdır
          </h2> */}
        </div>
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="contact_info text-white">
                <h4 className="wow fadeInUp">0850 346 22 01</h4>
                <ul>
                  <li className="wow fadeInUp">
                    <strong>Address : </strong> Turgut Özal Mahallesi 68. Sokak
                    - Otoport No: 46/222 Esenyurt - Istanbul
                  </li>
                  <li className="wow fadeInUp">
                    <strong>Email : </strong> info@megacode.com.tr
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <form
                className="contact_form"
                action="https://iteck-html.themescamp.com/contact.php"
                method="post"
              >
                <div className="row gx-3">
                  <div className="col-lg-12">
                    <div className="form-group mb-3 wow fadeInUp">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-3 wow fadeInUp">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder=" E-Posta"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-3 wow fadeInUp">
                      <input
                        type="text"
                        name="tel"
                        className="form-control"
                        placeholder="Telefon"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-3 wow fadeInUp">
                      <input
                        type="text"
                        name="firm"
                        className="form-control"
                        placeholder="Firma İsmi "
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group mb-4 wow fadeInUp">
                      <label
                        className="text-light small"
                        htmlFor="flexCheckDefault"
                      ></label>
                      <textarea className="w-100" placeholder="Mesajınız..." />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check mb-4 wow fadeInUp">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-light small"
                        htmlFor="flexCheckDefault"
                      >
                        Mega Code Yazılım ve Ticaret A.Ş.'nin{" "}
                        <a href="#" className="text-decoration-underline">
                          Kişisel Verilerin İşlenmesine İlişkin Aydınlatma
                          Metnini
                        </a>
                        'ni okudum, onaylıyorum
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="submit"
                      className="btn btn-dark wow fadeInUp text-light fs-14px"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/img/contact_globe.svg"
        alt=""
        className="contact_globe"
      />
    </section>
  );
};

export default ContactUs;
