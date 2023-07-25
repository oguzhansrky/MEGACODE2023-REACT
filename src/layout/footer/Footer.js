import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <footer className="style-1">
        <div className="container">
          <div className="content">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="foot_info">
                  <Link href="/" className="logo mb-3">
                    <img src="/assets/img/logos/logo-footer.png" alt="" />
                  </Link>
                  <div className="text mb-4">{t("footer.footer_text")}</div>
                  <ul className="mb-4">
                    <li className="d-flex">
                      <i className="bi bi-house me-3" />
                      <span>
                        Turgut Özal Neighborhood, 68th Street - Otoport No:
                        46/222 Esenyurt - Istanbul.
                      </span>
                    </li>
                    <li className="d-flex">
                      <i className="bi bi-envelope me-3" />
                      <a href="https://mail.google.com/mail/u/0/?hl=tr#inbox?compose=new">
                        <span>info@megacode.com.tr</span>
                      </a>
                    </li>
                    <li className="d-flex">
                      <i className="bi bi-phone me-3" />
                      <a href="tel:0850 346 22 01">
                        <span>0850 346 22 01</span>
                      </a>
                    </li>
                  </ul>
                  <div className="social_icons">
                    <a href="https://twitter.com/megacodeyazilim">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.facebook.com/Megacode-106846034289825">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.linkedin.com/company/megacode/?originalSubdomain=tr">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://www.instagram.com/megacodetech/">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="links">
                  <div className="cont">
                    <h6 className="link_title">Links</h6>
                    <ul>
                      <li>
                        <a href="#">IT Consultations </a>
                      </li>
                      <li>
                        <a href="#">Data Security </a>
                      </li>
                      <li>
                        <a href="#">Website Development </a>
                      </li>
                      <li>
                        <a href="#">UI/UX Design </a>
                      </li>
                      <li>
                        <a href="#">Cloud Services </a>
                      </li>
                      <li>
                        <a href="#">Game Development </a>
                      </li>
                      <li>
                        <a href="#">CRM &amp; Software </a>
                      </li>
                      <li>
                        <a href="#">About Iteck </a>
                      </li>
                      <li>
                        <a href="#">Investors </a>
                      </li>
                      <li>
                        <a href="#">Blog </a>
                      </li>
                      <li>
                        <a href="#">Career </a>
                      </li>
                      <li>
                        <a href="#">Contact </a>
                      </li>
                      <li>
                        <a href="#">Affiliate Program </a>
                      </li>
                      <li>
                        <a href="#">How It Works </a>
                      </li>
                      <li>
                        <a href="#">Pricing Plan </a>
                      </li>
                      <li>
                        <a href="#">Covid-19 Update </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cont">
                  
                  <ul>
                    <li>
                      <a href="#">Kurumsal</a>
                    </li>
                    <li>
                      <a href="#">Hizmetlerimiz</a>
                    </li>
                    <li>
                      <a href="#">Referanslar</a>
                    </li>
                    <li>
                      <a href="#">İletişim</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="foot">
                <p>
                  © 2023{" "}
                  <a href="/" className="text-white text-decoration-underline">
                    Megacode
                  </a>
                  {t("footer.footer_privite")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/footer/foot_l.png" alt="" className="foot_l" />
        <img src="assets/img/footer/foot_r.png" alt="" className="foot_r" />
      </footer>
    </>
  );
};

export default Footer;
