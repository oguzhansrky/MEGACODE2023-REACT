import PageHead from "@/layout/head/Head";
import React from "react";

export const Content = (props) => {
  return (
    <>
      <PageHead title={props.title + (props.title_2 ?? "")} />
      <div className="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-head text-center mb-60 style-5">
              <h2 class="mb-20">
                {props.title} {props.title_2 && <span>{props.title_2}</span>}
              </h2>
              {props.desc && <p>{props.desc}</p>}
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
};
