import { Content } from "@/components/Content";
import React from "react";

const referanslar = () => {
  return (
    <>
      <Content
        title={"Referanslar"}
        desc={"İş ortaklarımızın memnuniyeti en iyi referansımızdır"}
      >
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>İş Ortaklarımız</h2>
              </div>
            </div>
            <div className="text-center mt-3">
              <img src="assets/img/isortaklari.png" alt=""></img>
            </div>
          </div>
        </section>
        <section className="mt-4">
          <div className="controller">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="fw-leight">Projelerimizden Örnekler</h2>
                <img src="assets/img/home_hizmetler.png" alt=""></img>
              </div>
            </div>
          </div>
        </section>
      </Content>
    </>
  );
};

export default referanslar;
