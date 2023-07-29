import { PaginationComponent } from "@/components/Pagination";
import PageHead from "@/layout/head/Head";
import { blogcommentService, blogService } from "@/services";
import { Form, Input, message } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import useTranslation from "next-translate/useTranslation";
const { TextArea } = Input;

const PostDetails = ({ data, comments }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [comment] = Form.useForm();
  const { query } = router;
  const [commentData, setCommentData] = useState([]);
  const [meta, setMeta] = useState();
  const [currentPage, setCurrentPage] = useState("1");
  const [replyTo, setReplyTo] = useState();
  const params = new URLSearchParams(query);
  const [searchParams, setSearchParams] = useState(new URLSearchParams());
  const [textMessage, setTextMessage] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const loadData = async () => {
    try {
      const blogComments = await blogcommentService.getBlogComment(
        data.id,
        decodeURIComponent(searchParams)
      );
      setCommentData(blogComments.payload.comments);
      setMeta(blogComments.meta);
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
      params.append("limit", "5");
    }
    if (!hasLimit || !hasPage) setSearchParams(params);
  }, [query]);
  useEffect(() => {
    if (searchParams.has("page")) loadData();
  }, [searchParams]);
  useEffect(() => {
    setCommentData(comments?.payload?.comments);
    setMeta(comments?.meta);
  }, []);
  const paginate = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber);
    scrollToCommentsTop();
    setCurrentPage(pageNumber);
    setSearchParams(params);
  };
  const commentsTopRef = useRef(null);
  const scrollToCommentsTop = () => {
    commentsTopRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSubmit = async (values) => {
    try {
      await blogcommentService.createBlogComment(data?.id, {
        ...values,
        parent_id: replyTo?.id || null,
      });
      messageApi.success(t("slug_js.comment_suc"));
      handleComplete();
    } catch (err) {
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };
  const handleComplete = () => {
    comment.resetFields();
    setTextMessage(true);
  };
  return (
    <>
      <PageHead title={data.title} />
      {contextHolder}
      <main className="blog-page style-5">
        <section className="all-news section-padding pt-50 blog bg-transparent style-3">
          <div className="container">
            <div className="blog-details-slider mb-100">
              <div className="section-head text-center mb-60 style-5">
                <h2 className="mb-20 color-000"> {data?.title} </h2>
                <small className="d-block date text">
                  <a
                    href="#"
                    className="text-uppercase border-end brd-gray pe-3 me-3 color-blue5 fw-bold"
                  >
                    {data?.category.name}
                  </a>
                  <i className="bi bi-clock me-1" />
                  <span className="op-8">
                    {moment(data?.created_at).fromNow()}
                  </span>
                </small>
              </div>
              <div className="content-card">
                <div className="img">
                  <img src="/assets/img/blog/1.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="cont">
                        <small className="date small mb-20">
                          <span className="text-uppercase border-end brd-gray pe-3 me-3">
                          {t("slug_js.news")}
                          </span>
                          <i className="far fa-clock me-1" /> {t("slug_js.posted")}
                        </small>
                        <h2 className="title">
                        {t("slug_js.solutions")}
                        </h2>
                        <p className="fs-12px mt-10 text-light text-info">
                        {t("slug_js.sol_text_1")} [...]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-4 gx-lg-5">
              <div className="col-lg-12">
                <div className="d-flex small align-items-center justify-content-between mb-70 fs-12px">
                  <div className="l_side d-flex align-items-center">
                    <a href="#" className="me-3 me-lg-5">
                      <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                        {data?.user.full_name.charAt(0)}
                      </span>
                      <span className>{data?.user.full_name}</span>
                    </a>
                    <a href="#" className="me-3 me-lg-5">
                      <i className="bi bi-chat-left-text me-1" />
                      <span>{meta?.total ?? "0"} Comments</span>
                    </a>
                    <a href="#">
                      <i className="bi bi-eye me-1" />
                      <span>{data?.view_count}</span>
                    </a>
                  </div>
                </div>
                <div ref={commentsTopRef} className="blog-content-info">
                  {data?.content}
                  <div className="blog-comments mt-70">
                    <div className="comments-content mt-70">
                      <h3 className="color-000 mb-0">
                        {meta?.total ?? 0} Comments
                      </h3>
                      {commentData &&
                        commentData.map((item) => {
                          return (
                            <div className="comment-replay-cont border-bottom border-1 brd-gray pb-40 pt-40">
                              <div className="d-flex comment-cont">
                                <div className="inf w-100">
                                  <div className="title d-flex justify-content-between">
                                    <h6 className="fw-bold fs-14px">
                                      {item?.full_name}
                                    </h6>
                                    <span className="time fs-12px">
                                      {moment(item.created_at).fromNow()}
                                    </span>
                                  </div>
                                  <div className="text color-000 fs-12px mt-10">
                                    {item?.comment}
                                  </div>
                                  <a
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setReplyTo(item)}
                                    className="butn border border-1 rounded-pill border-blue5 mt-20 py-2 px-3 hover-blue5 color-blue5"
                                  >
                                    <span className="fs-10px">{t("slug_js.reply")}</span>
                                  </a>
                                </div>
                              </div>
                              {item?.replies &&
                                item?.replies.map((item) => (
                                  <div className="d-flex comment-replay ps-5 mt-30 ms-4">
                                    <div className="inf w-100">
                                      <div className="title d-flex justify-content-between">
                                        <h6 className="fw-bold fs-14px">
                                          {item.full_name}
                                        </h6>
                                        <span className="time fs-12px">
                                          {moment(item.created_at).fromNow()}
                                        </span>
                                      </div>
                                      <div className="text color-000 fs-12px mt-10">
                                        {item?.comment}
                                      </div>
                                      <a
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setReplyTo(item)}
                                        className="butn border border-1 rounded-pill border-blue5 mt-20 py-2 px-3 hover-blue5 color-blue5"
                                      >
                                        <span className="fs-10px">{t("slug_js.reply")}</span>
                                      </a>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          );
                        })}
                    </div>
                    <PaginationComponent
                      itemPerPage={meta?.per_page || comments?.meta.per_page}
                      currentPage={currentPage}
                      paginate={paginate}
                      totalItems={meta?.total || comments?.meta.total}
                    />
                    {textMessage ? (
                      <h4 className="h-100 d-flex align-items-center justify-content-center my-5">
                        {t("slug_js.comment_suc_text")}
                      </h4>
                    ) : (
                      <Form
                        id="comment"
                        className="comment-form d-block pt-30"
                        form={comment}
                        onFinish={handleSubmit}
                        labelCol={{
                          span: 5,
                        }}
                        wrapperCol={{
                          span: 20,
                        }}
                        autoComplete="off"
                      >
                        <h3 className="color-000 mb-40"> {t("slug_js.leave_comment")} </h3>
                        {replyTo && (
                          <div className="my-4 border border-2 p-2 d-flex justify-content-between">
                            {t("slug_js.reply_to")} {replyTo?.full_name}
                            <i
                              style={{ cursor: "pointer" }}
                              onClick={() => setReplyTo()}
                              className="bi bi-x-circle-fill"
                            ></i>
                          </div>
                        )}
                        <div className="row">
                          <div className="col-lg-12">
                            <Form.Item
                              name="full_name"
                              className="form-group mb-4"
                              rules={[
                                {
                                  required: true,
                                  message: t("slug_js.message1"),
                                },
                              ]}
                            >
                              <Input
                                placeholder={t("slug_js.placeholder1")}
                                className="form-control fs-12px radius-4 p-3"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-lg-12">
                            <Form.Item
                              name="email"
                              className="form-group mb-4"
                              rules={[
                                {
                                  required: true,
                                  message: t("slug_js.email_insert"),
                                },
                              ]}
                            >
                              <Input
                                placeholder="Email"
                                className="form-control fs-12px radius-4 p-3"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-lg-12">
                            <Form.Item
                              name="comment"
                              className="form-group mb-4"
                              rules={[
                                {
                                  required: true,
                                  message: t("slug_js.message2")
                                },
                              ]}
                            >
                              <TextArea
                                placeholder={t("slug_js.placeholder2")}
                                className="form-control radius-4 fs-12px p-3"
                                rows={6}
                              />
                            </Form.Item>
                          </div>

                          <div className="col-12">
                            <button
                              type="submit"
                              form="comment"
                              href="#"
                              className="btn rounded-pill blue5-3Dbutn hover-blue5 sm-butn fw-bold mt-40"
                            >
                              <span>{t("slug_js.submit")} </span>
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export async function getServerSideProps(ctx) {
  const { slug, ...others } = ctx.query;
  try {
    const blogPost = await blogService.getBlog(ctx.query?.slug);
    const blogComments = await blogcommentService.getBlogComment(
      blogPost?.payload?.blog?.id,
      "page=1&limit=5"
    );
    return {
      props: {
        data: blogPost.payload.blog,
        comments: blogComments,
      },
    };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
}
export default PostDetails;
