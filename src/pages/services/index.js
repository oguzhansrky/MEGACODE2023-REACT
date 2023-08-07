import { Content } from "@/components/Content";
import Services from "@/components/home/Services";
import PageHead from "@/layout/head/Head";
import { servicesService } from "@/services";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import React from "react";

function hizmetlerimiz({ services }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <PageHead pathname={asPath}></PageHead>
      <Head>
        <script type="application/ld+json">{JSON.stringify(services)}</script>
      </Head>
      <Content
        title={t("projects_services.title")}
        desc={t("projects_services.title_des")}
      >
        <div className="container mt-6">
          <div className="row">
            <div className="col-lg-6">
              <div className="img mb-4 mb-lg-0 wow fadeIn">
                <Image
                  src="/assets/img/about/3d_vector2.svg"
                  width={492}
                  height={395}
                  alt="Servisler"
                ></Image>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <h2 className="">{t("projects_services.h2_des")}</h2>
                <p className="mt-3 fs-5">{t("projects_services.h2_des_p")}.</p>
              </div>
            </div>
          </div>
        </div>
        <Services data={services}></Services>
      </Content>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const services = await servicesService.getServices();
    return { props: { services: services?.payload?.services } };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
}

export default hizmetlerimiz;
