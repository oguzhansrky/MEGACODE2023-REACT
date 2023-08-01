import { Image } from "antd";
import classnames from "classnames";
import NextImage from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";
export const ServicesDetails = () => {
  const [data, setData] = useState();
  const router = useRouter();
  const { query } = router;
  const loadData = async () => {
    try {
      const res = {
        title: "Innovative Digital Solutions",
        description: `Digital, which provides many conveniences in all areas of
                life. sustainable, cost-effective solutions for you We
                produce solutions that provide advantage`,
        thumbnail: "/assets/img/about/3d_vector2.svg",
        content: "<p>HTML verisi 1</p>",
        images:
          '["/assets/img/single_project/ch_1.png", "/assets/img/single_project/ch_1.png", "/assets/img/single_project/ch_1.png", "/assets/img/single_project/ch_1.png", "/assets/img/single_project/ch_1.png"]',
      };
      res.images = JSON.parse(res.images);
      setData(res);
    } catch (err) {
      console.error(err);
    }
  };
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
  useEffect(() => {
    loadData();
  }, []);
  console.log(data);

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
                <div className="col-lg-6">
                  <div>
                    <h2 className="mt-5">{data?.title}</h2>
                    <p className="mt-4 fs-5">{data?.description}</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="img mb-4 mb-rg-4">
                    {data?.thumbnail && (
                      <NextImage
                        src={data?.thumbnail}
                        width={600}
                        height={200}
                        alt="Servisler"
                        className=""
                      ></NextImage>
                    )}
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

export default ServicesDetails;
