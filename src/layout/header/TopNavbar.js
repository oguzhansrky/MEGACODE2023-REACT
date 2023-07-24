import { useRouter } from "next/router";
import React from "react";
import useTranslation from 'next-translate/useTranslation';

const TopNavbar = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className="top-navbar style-1">
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="top-links">
                <div className="text text-white my-2">
                  <span>
                  {t('topnavbar.text',)}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="r-side">
                <div className="socail-icons">
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
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={(e) => { e.preventDefault(); router.push(router.pathname, router.asPath, { locale: "en" }) }}
                  >
                    <img className="me-1" src="/assets/img/lang.png" alt="" />{" "}
                    English
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a onClick={(e) => { e.preventDefault(); router.push(router.pathname, router.asPath, { locale: "tr" }) }} className="dropdown-item" href="#">
                        Türkçe
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
