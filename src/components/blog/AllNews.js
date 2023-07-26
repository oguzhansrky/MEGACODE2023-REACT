import React, { useEffect, useState } from "react";
import moment from "moment";
import _ from "lodash";
import { formatCount } from "@/utils";
import { PaginationComponent } from "../Pagination";

export const AllNews = ({ blogs, categories }) => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState("1");
  useEffect(() => {
    setData(blogs?.payload.blogs);
    setCurrentPage(blogs?.meta.current_page ?? "1");
  }, []);
  const paginate = () => {
    console.log("paginate");
  };
  return (
    <>
      <section className="all-news section-padding blog bg-transparent style-3">
        <div className="container">
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-8">
              {data &&
                data.map((item) => (
                  <div className="card border-0 bg-transparent rounded-0 border-bottom brd-gray pb-30 mb-30">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="img img-cover">
                          <img
                            src={item.thumbnail}
                            className="radius-7"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="card-body p-0">
                          <small className="d-block date text">
                            <a
                              href="#"
                              className="text-uppercase border-end brd-gray pe-3 me-3 color-blue5 fw-bold"
                            >
                              {item.category.name}
                            </a>
                            <i className="bi bi-clock me-1" />
                            <a href="#" className="op-8">
                              {moment(item.created_at).fromNow()}
                            </a>
                          </small>
                          <a
                            href="page-single-post-5.html"
                            className="card-title mb-10"
                          >
                            How To Become A Python Develop Expert
                          </a>
                          <p className="fs-13px color-666">
                            {_.truncate(item.content, {
                              length: 115,
                              omission: "...",
                            })}
                          </p>
                          <div className="auther-comments d-flex small align-items-center justify-content-between op-9">
                            <div className="l_side d-flex align-items-center">
                              <span className="icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue5 p-2 me-2 text-white">
                                {item.user.full_name.charAt(0)}
                              </span>
                              <a>By {item.user.full_name}</a>
                            </div>
                            <div className="r-side mt-1">
                              <i className="bi bi-hand-thumbs-up me-1" />
                              <a href="#">{formatCount(item.like_count)}</a>
                              <i className="bi bi-eye ms-4 me-1" />
                              <a href="#">{formatCount(item.view_count)}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              <PaginationComponent
                itemPerPage={blogs?.meta.per_page}
                currentPage={currentPage}
                paginate={paginate}
                totalItems={blogs?.meta.total}
              />
            </div>
            <div className="col-lg-4">
              <div className="side-blog style-5 ps-lg-5 mt-5 mt-lg-0">
                <div className="side-categories mb-50">
                  <h6 className="title mb-20 text-uppercase fw-normal">
                    categories
                  </h6>
                  {categories &&
                    categories.map((item) => (
                      <a href="#" className="cat-item">
                        <span> {item.name} </span>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AllNews;
