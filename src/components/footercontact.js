import React from "react";
import useTranslation from "next-translate/useTranslation";

export const footercontact = () => {
  const { t } = useTranslation("common");
  return (
    <section className="partner_logo_area_two ">
      <div
        className="px-5 py-4 text-light"
        style={{
          background: "linear-gradient(to right, #0c3df4 0%, #02b5ff 100%)",
        }}
      >
        <div className="subscribe_form_info row">
          <div className="col-lg-7">
            <h4 className="f_p f_size_30 l_height50 f_400 w_color mb-0 ">
            {t("footer_contact.footer_contact_des")}
            </h4>
            <p className="w_color">
            {t("footer_contact.footer_contact_des2")}
            </p>
          </div>
          <div className="col-lg-3 text-end">
            <a href="page-services-5.html" className="btn btn-dark">
              <span> {t("footer_contact.footer_contact")}</span>
            </a>
          </div>
          <div className="col-lg-2">
            <div className="Ellipse-6-copy"></div>
            <div className="Ellipse-6-copy-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
