import { Content } from "@/components/Content";
import Services from "@/components/home/Services";
import useTranslation from 'next-translate/useTranslation';

import React from "react";

function hizmetlerimiz() {
  const { t } = useTranslation("common");
  return (
    <>
      <Content
        title= {t('projects_services.title')}
        desc={t('projects_services.title_des')}
      >
        <div className="container mt-6">
          <div className="row">
            <div className="col-lg-6">
              <div className="img mb-4 mb-lg-0 wow fadeIn">
                <img src="/assets/img/about/3d_vector2.svg" alt=""></img>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <h2 className="">
                {t('projects_services.h2_des')}
                </h2>
                <p className="mt-3 fs-5">
                {t('projects_services.h2_des_p')}.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Services></Services>
      </Content>
    </>
  );
}

export default hizmetlerimiz;
