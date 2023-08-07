import { useRouter } from "next/router";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { v4 as uuid } from "uuid";
import Image from "next/image";

const TopNavbar = () => {
  const router = useRouter();

  const languages = [
    {
      name: "Turkish",
      value: "tr",
      icon: "/assets/img/turkish.png.png",
    },
    {
      name: "English",
      value: "en",
      icon: "/assets/img/lang.png",
    },
    {
      name: "Germany",
      value: "de",
      icon: "/assets/img/german_flag.png",
    },
  ];

  const { t } = useTranslation("common");

  return (
    <div className="top-navbar style-1">
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="top-links">
                <div className="text text-white my-2">
                  <span>{t("topnavbar.text")}</span>
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
                  >
                    <Image
                      src={
                        languages?.find((item) => item.value === router?.locale)
                          ?.icon
                      }
                      width={14}
                      height={14}
                      alt="Türk Bayrağı"
                      className="me-1"
                    ></Image>

                    {
                      languages?.find((item) => item.value === router?.locale)
                        ?.name
                    }
                  </a>
                  <ul
                    className="dropdown-menu p-2"
                    aria-labelledby="dropdownMenuLink"
                  >
                    {languages
                      .filter((item) => item.value !== router?.locale)
                      .map((item) => (
                        <li key={uuid()}>
                          <a
                            style={{ fontSize: "11px" }}
                            className=""
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            aria-expanded="false"
                            onClick={(e) => {
                              e.preventDefault(false);
                              router.push(
                                router.pathname,
                                router.asPath,

                                {
                                  locale: item.value,
                                }
                              );
                            }}
                          >
                            <Image
                              src={item.icon}
                              width={14}
                              height={14}
                              alt="Türk Bayrağı"
                              className="me-1"
                            ></Image>

                            {item.name}
                          </a>
                        </li>
                      ))}
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
