import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <nav className="navbar navbar-expand-lg navbar-light style-1">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img
            style={{ width: "200px" }}
            src="/assets/img/megacode-logo.png"
            alt=""
          />
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
                  {t('header.services')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/faq">
             {t('header.sss')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/references">
                  {t('header.referance')}
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
                  {t('header.projects')}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li>
                    <Link className="dropdown-item" href="/projects/acente365">
                    {t('header.acenta365',)}
                    </Link>
                  </li>
                  <li>
<<<<<<< HEAD
                    <Link className="dropdown-item" href="/projects/digital-signage">
                    {t('header.digital_signage')}
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-services-5.html">
                    {t('header.services')}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-shop-5.html">
                    {t('header.shop')}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="page-single-project-5.html"
                    >
                      {t('header.single_project')}
=======
                    <Link
                      className="dropdown-item"
                      href="/projects/digital-signage"
                    >
                      Digital Signage
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/projects/sea365">
                      Sea365
>>>>>>> c78afbefad9af9e983bf94220b4a4576e5d0aee6
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/career">
                {t('header.career')}
                </Link>
              </li>
              <li className="nav-item">
<<<<<<< HEAD
                <a className="nav-link" href="page-blog-5.html">
                {t('header.blog')}
                </a>
=======
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/BlogContent">
                  Blog İçeriği
                </Link>
>>>>>>> c78afbefad9af9e983bf94220b4a4576e5d0aee6
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                {t('header.communication')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
