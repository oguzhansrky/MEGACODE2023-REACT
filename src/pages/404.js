import { Content } from "@/components/Content";
import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const Error404 = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Content hideTitle title={"404"}>
        <section className="erorr-page style-5">
          <div className="container ">
            <div className="content">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="info">
                    <h2 className="mb-30"> {t("404.h1")} </h2>
                    <p className="color-777"> {t("404.h2")} </p>
                    <Link
                      href="/"
                      className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-40"
                    >
                      <span>
                        {" "}
                        <i className="fas fa-long-arrow-left me-2" />{" "}
                        {t("404.back_to_home")}
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8 text-lg-end">
                  <div className="img">
                    <Image
                      src="/assets/img/404_1.png"
                      width={666}
                      height={538}
                      alt="404"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Content>
    </>
  );
};

export default Error404;
