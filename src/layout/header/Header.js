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
            height={60}
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
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/projects/acenta365-messenger"
                    >
                      Acenta365 Messenger
                    </Link>
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
            </ul>
          </div>
        </div>
        <div className="nav-side d-none d-xl-block ">
          <div className="hotline pe-2">
            <div className="icon me-3">
              <a href="tel:0850 346 22 01">
                <i className="bi bi-telephone" />
              </a>
            </div>
            <div className="cont">
              <h6>0850 346 22 01</h6>
            </div>
          </div>
        </div>
        <div className="qoute-nav ps-2 d-none d-xl-block">
          <a
            className="btn sm-butn butn-gard border-0 text-white px-3 py-2"
            href="/contact"
          >
            <span>{t("header.communication")}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
