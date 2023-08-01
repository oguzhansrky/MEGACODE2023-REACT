import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const PricingTable = () => {
  const { t } = useTranslation("common");
  return (
    <section className="pricing section-padding border-bottom border-1 brd-gray style-5">
      <div className="container">
        <div className="section-head text-center mb-60 style-5">
          <h2 className="mb-20">
            {t("acente365.pricing_table_title")}{" "}
            <span> {t("acente365.pricing_table_title2")} </span>
          </h2>
          <p>{t("acente365.pricing_table_text")}</p>
        </div>
        <div className="table-responsive">
          <div className="content">
            <div className="price-head">
              <div className="price-headTitle">
                <Image
                  src="/assets/img/icons/price_s5.png"
                  width={224}
                  height={176}
                  alt="Price"
                ></Image>
              </div>
              <div className="price-headItem px-2">
                <h6>{t("acente365.pricing_table_bronze")}</h6>
                <small>{t("acente365.pricing_table_bronze_text")}</small>
              </div>
              <div className="price-headItem bg-gray5 px-2">
                <h6>{t('acente365.pricing_table_silver')}</h6>
                <small>
                {t('acente365.pricing_table_silver_text')}
                </small>
                <small>
                {t('acente365.pricing_table_silver_text2')}
                </small>
                <div className="label">{t('acente365.pricing_table_choice')}</div>

                <h6>{t("acente365.pricing_table_silver")}</h6>
                <small>{t("acente365.pricing_table_silver_text1")}</small>
                <small>{t("acente365.pricing_table_silver_text2")}</small>
                <div className="label">
                  {t("acente365.pricing_table_choice")}
                </div>

              </div>
              <div className="price-headItem px-2">
                <h6>{t("acente365.pricing_table_gold")}</h6>
                <small>{t("acente365.pricing_table_gold_text")}.</small>
              </div>
            </div>
            <div className="price-body">
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.customer_managment")}
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.cross_selling")}
                </div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.online_offer")}
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.online_policy")}
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.online_zeyil")}
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.online_auto_refresh")}
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.inquiry_service_management")}
                </div>
                <div className="price-item">
                  {" "}
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  {" "}
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.offline_pro_screen")}
                </div>
                <div className="price-item">
                  {" "}
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.company_rep")}
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.company_rep")}
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.human_res")}
                </div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.marketing_manag")}
                </div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.bookkeeping")}
                </div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5">
                  <i className="bi bi-check2" />
                </div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.call_center")}
                </div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5"></div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.offer_policy")}
                </div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5"></div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.mobil_app")}
                </div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5"></div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
              <div className="price-bodyItems">
                <div className="price-bodyTitle">
                  {t("acente365.web_service")}
                </div>
                <div className="price-item"></div>
                <div className="price-item bg-gray5"></div>
                <div className="price-item">
                  <i className="bi bi-check2" />
                </div>
              </div>
            </div>
            <div className="price-foot">
              <div className="price-footTitle"></div>
              <div className="price-footItem">
                <Link
                  href="/iletisim"
                  className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold"
                >
                  <span> {t("acente365.take_offer")}</span>
                </Link>
              </div>
              <div className="price-footItem bg-gray5">
                <Link
                  href="/iletisim"
                  className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold"
                >
                  <span> {t("acente365.take_offer")}</span>
                </Link>
              </div>
              <div className="price-footItem">
                <Link
                  href="/iletisim"
                  className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold"
                >
                  <span> {t("acente365.take_offer")}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
