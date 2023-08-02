import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";

const Services = ({ data }) => {
  const { t } = useTranslation("common");
  return (
    <section className="services section-padding style-1">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-head mb-60">
              <h2 className="wow fadeInUp">{t("services.services_h1")}</h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            {data?.map((item, index) => {
              if (index > 5) return;
              return (
                <div className="col-lg-4">
                  <div
                    className="service-box mb-4 wow fadeInUp"
                    data-wow-delay={0}
                  >
                    <h5>
                      <Link href={`/services/${item.slug}`}>{item.title}</Link>
                    </h5>
                    <br></br>
                    <div className="icon">
                      <Image
                        src={item.thumbnail}
                        width={60}
                        height={60}
                        alt="İnovatif Çözümler"
                      ></Image>
                    </div>
                    <div className="info">
                      <div className="text">{item.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Image
        src="/assets/img/services/ser_shap_l.png"
        width={348}
        height={1103}
        alt="Price"
        className="ser_shap_l"
      ></Image>
      <Image
        src="/assets/img/services/ser_shap_r.png"
        width={217}
        height={826}
        alt="Price"
        className="ser_shap_r"
      ></Image>
    </section>
  );
};

export default Services;
