import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <nav className="navbar navbar-expand-lg navbar-light style-1">
      <div className="container">
        <Link className="navbar-brand " href="/">
          <Image
            src="/assets/img/megacode-logo.png"
            width={200}
            height={70}
            alt="MegaCode"
          ></Image>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="nav-side">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  {t("main_menu.homepage")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about-us">
                  {t("main_menu.about")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">
                  {t("header.services")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/faq">
                  {t("header.sss")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/references">
                  {t("header.referance")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("header.projects")}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li>
                    <Link className="dropdown-item" href="/projects/acente365">
                      {t("header.acenta365")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/projects/digital-signage"
                    >
                      {t("header.digital_signage")}
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/projects/sea365">
                      Sea365
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/career">
                  {t("header.career")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blog">
                  {t("header.blog")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  {t("header.communication")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex m-2 gap-4">
          <div className="d-flex col-6 align-items-center">
            <i class="fa fa-phone mt-2 color-blue5 me-4"></i>
            <span className="mt-1 ">
              <div className="fs-6 fw-light">24/7</div>
              <div className="color-blue5">0850 346 22 01</div>
            </span>
          </div>
          <div class=" d-flex m-4 col-6 align-items-center">
            <a href="/contact">
              <button type="button" class="btn btn-outline-primary fs-6">
                <span className="">İş</span>
                <span class="ms-1">Başvurusu</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
