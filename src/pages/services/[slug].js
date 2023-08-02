import { servicesService } from "@/services";
import { Image } from "antd";
import classnames from "classnames";
import NextImage from "next/image";
import React from "react";
import { v4 as uuid } from "uuid";
export const ServicesDetails = ({ data }) => {
  let columnClass;

  if (data?.images.length === 1) {
    columnClass = "col-lg-12";
  } else if (data?.images.length === 2) {
    columnClass = "col-lg-6";
  } else if (data?.images.length === 3) {
    columnClass = "col-lg-4";
  } else {
    columnClass = "col-lg-3";
  }
console.log(data)
  return (
    <>
      <main className="single-project style-5">
        <div className="container">
          <div className="about style-1">
            <div
              className="content mw-1101"
              style={{
                padding: "65px 50px",
                background: "var(--color-main-grad)",
                borderRadius: "10px",
                margin: "90px 0",
              }}
            >
              <div className="row">

                <div className="col-lg-12">
                  <div className="img mb-4 mb-rg-4">
                    {data?.thumbnail && (
                      <NextImage
                        src={data?.thumbnail}
                        width={75}
                        height={75}
                        alt="Servisler"
                        className=""
                      ></NextImage>
                    )}
                  </div>
                <div className="col-lg-12">
                  <div>
                    <h2 className="mt-5 text-light">{data?.title}</h2>
                    <p className="mt-4 fs-5 text-light">{data?.description}</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
          <div className="imgs mt-60 mb-20 pl-4">
            <div className="row">
              {data?.images?.map((item) => (
                <div
                  key={uuid()}
                  className={classnames(
                    "d-flex justify-content-center mb-4 " + columnClass
                  )}
                >
                  <Image src={item} alt={item.split("/").pop()} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { slug } = ctx.query;
  try {
    const res = await servicesService.getService(slug);
    res.payload.service.images = JSON.parse(res.payload.service.images)
    return { props: { data: res.payload.service } };
  } catch (err) {
    return { props: {} };
  }
}

export default ServicesDetails;
