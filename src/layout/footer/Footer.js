import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

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
                    <Image
                      src="/assets/img/logos/logo-footer.png"
                      width={136}
                      height={16}
                      alt="MegaCode"
                    ></Image>
                  </Link>
                  <div className="text mb-4">{t("footer.footer_text")}</div>
                  <ul className="mb-4">
                    <li className="d-flex">
                      <i className="bi bi-house me-3" />
                      <span>{t("footer.footer_adress")}</span>
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
                    <h6 className="link_title">{t("footer_link.links")}</h6>
                    <ul>
                      <li>
                        <a href="#">{t("footer_link.homepage")}</a>
                      </li>
                      <li>
                        <a href="#">{t("footer_link.about_us")}</a>
                      </li>
                      <li>
                        <a href="#">{t("footer_link.services")}</a>
                      </li>
                      <li>
                        <a href="#">{t("footer_link.faq")}</a>
                      </li>
                      <li>
                        <a href="#">{t("footer_link.ref")}</a>
                      </li>
                      <li>
                        <a href="#">{t("footer_link.project")}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4">
                <div className="cont">
                  <ul className="mt-3">
                    <li>
                      <a href="#">{t("footer_link.acenta365")}</a>
                    </li>
                    <li className="mt-2">
                      <a href="#">{t("footer_link.digital_sign")}</a>
                    </li>
                    <li className="mt-2">
                      <a href="#">{t("footer_link.sea365")}</a>
                    </li>
                    <li className="mt-2">
                      <a href="#">{t("footer_link.career")}</a>
                    </li>
                    <li className="mt-2">
                      <a href="#">{t("footer_link.blog")}</a>
                    </li>
                    <li className="mt-2">
                      <a href="#">{t("footer_link.contact")}</a>
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
                    Megacode{" "}
                  </a>{" "}
                  {t("footer.footer_privite")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/img/footer/foot_l.png"
          width={310}
          height={348}
          alt="Footer"
          className="foot_l"
        ></Image>
        <Image
          src="/assets/img/footer/foot_r.png"
          width={306}
          height={192}
          alt="Footer"
          className="foot_r"
        ></Image>
      </footer>
    </>
  );
};

export default Footer;
