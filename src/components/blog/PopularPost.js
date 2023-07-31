import React from "react";
import _ from "lodash";
import moment from "moment";
import { formatCount } from "@/utils";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export const PopularPost = ({ data }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <section className="popular-posts pt-50 pb-100 border-bottom brd-gray">
        <div className="container">
          <h5 className="post-sc-title text-center text-uppercase mb-70">
            {t("popularpost.blog_popularpost")}
          </h5>
          <div className="row gx-5">
            {data &&
              data.map((item, index) => {
                const isLastItem = data.length - 1 === index;
                return (
                  <div
                    key={uuid()}
                    className={`col-lg-4 ${
                      !isLastItem && "border-end brd-gray"
                    }`}
                  >
                    <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                      <div className="img radius-7 overflow-hidden img-cover">
                        <img
                          src={item.thumbnail}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body px-0">
                        <small className="d-block date mt-10 fs-10px fw-bold">
                          <a className="text-uppercase border-end brd-gray pe-3 me-3 color-blue5">
                            {item.category?.name}
                          </a>
                          <i className="bi bi-clock me-1" />
                          <a className="op-8">
                            {moment(item.created_at).fromNow()}
                          </a>
                        </small>
                        <h5 className="fw-bold mt-10 title">
                          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                        </h5>
                        <p className="small mt-2 op-8 fs-10px">
                          {_.truncate(item.content, {
                            length: 115,
                            omission: "...",
                          })}
                        </p>
                        <div className="d-flex small mt-20 align-items-center justify-content-between op-9"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};
export default PopularPost;
