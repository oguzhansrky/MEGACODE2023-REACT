import React, { useEffect, useState } from "react";
import moment from "moment";
import _ from "lodash";
import { formatCount } from "@/utils";
import { PaginationComponent } from "../Pagination";
import { useRouter } from "next/router";
import { blogService } from "@/services";
import { useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";

export const AllNews = ({ blogs, categories }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { query } = router;
  const [data, setData] = useState();
  const [meta, setMeta] = useState();
  const [currentPage, setCurrentPage] = useState("1");
  const params = new URLSearchParams(query);
  const [searchParams, setSearchParams] = useState(new URLSearchParams());
  const loadData = async () => {
    try {
      const blogs = await blogService.getBlogs(
        decodeURIComponent(searchParams)
      );
      setData(blogs.payload.blogs);
      setMeta(blogs.meta);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const hasPage = params.has("page");
    const hasLimit = params.has("limit");

    if (!hasPage) {
      params.append("page", "1");
    }
    if (!hasLimit) {
      params.append("limit", "10");
    }
    if (!hasLimit || !hasPage) setSearchParams(params);
  }, [query]);
  useEffect(() => {
    if (searchParams.has("page")) loadData();
  }, [searchParams]);
  useEffect(() => {
    setData(blogs?.payload.blogs);
    setCurrentPage(blogs?.meta.current_page ?? "1");
  }, []);
  const paginate = (pageNumber) => {
    params.set("page", pageNumber);
    setCurrentPage(pageNumber);
    scrollToBlogsTop();
    setSearchParams(params);
  };
  const blogsTopRef = useRef(null);
  const scrollToBlogsTop = () => {
    blogsTopRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const filterCategory = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    const hasCategory = params.has("category");
    if (hasCategory) params.set("category", categoryId);
    else params.append("category", categoryId);
    setSearchParams(params);
  };

  const removeCategoryFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("category");
    setSearchParams(params);
  };

  return (
    <>
      <section
        ref={blogsTopRef}
        className="all-news section-padding blog bg-transparent style-3"
      >
        <div className="container">
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-8">
              {data?.length > 0 ? (
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
                          <Link
                            href={`/blog/${item.slug}`}
                            className="card-title mb-10"
                          >
                            {item.title}
                          </Link>
                          <p className="fs-13px color-666">
                            {_.truncate(item.content, {
                              length: 115,
                              omission: "...",
                            })}
                          </p>
                          <div className="auther-comments d-flex small align-items-center justify-content-between op-9"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <h5>Veri Bulunamadı...</h5>
                </div>
              )}

              <PaginationComponent
                itemPerPage={meta?.per_page || blogs?.meta.per_page}
                currentPage={currentPage}
                paginate={paginate}
                totalItems={meta?.total || blogs?.meta.total}
              />
            </div>
            <div className="col-lg-4">
              <div className="side-blog style-5 ps-lg-5 mt-5 mt-lg-0">
                <div className="side-categories mb-50">
                  <h6 className="title mb-20 text-uppercase fw-normal">
                    {t("blog_allnews.categories")}
                  </h6>
                  <a
                    onClick={removeCategoryFilter}
                    style={{ cursor: "pointer" }}
                    className="cat-item"
                  >
                    <span> {t("blog_allnews.all")}</span>
                  </a>
                  <>
                    {categories &&
                      categories.map((item) => {
                        // Check if the category matches the item id
                        const category = searchParams.get("category");
                        const isCategoryMatched = Number(category) === item.id;
                        return (
                          <a
                            onClick={() => filterCategory(item.id)}
                            style={{ cursor: "pointer" }}
                            className={clsx("cat-item", {
                              "color-blue5 fw-bold": isCategoryMatched,
                            })}
                          >
                            <span> {item.name} </span>
                          </a>
                        );
                      })}
                  </>
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
