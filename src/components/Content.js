import PageHead from "@/layout/head/Head";
import React from "react";

export const Content = (props) => {
  return (
    <>
      <PageHead title={props.title + (props.title_2 ?? "")} />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-head text-center mb-60 style-5">
              <h2 className="mb-20">
                {`${props.title}`}
                <span>{props.title_2 ?? ""}</span>
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
