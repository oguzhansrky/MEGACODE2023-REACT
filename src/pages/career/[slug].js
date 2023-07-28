import CareerForm from "@/components/career/CareerForm";
import { jobPostsService } from "@/services";
import React, { useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import moment from "moment";

const CareerDetails = ({ data }) => {
  const { t } = useTranslation("common");
  let parsedExpectations = undefined;
  let parsedRequirements = undefined;
  let parsedAdditional = undefined;
  let parsedBenefits = undefined;
  if (data?.expectations) {
    parsedExpectations = JSON.parse(data?.expectations);
  }
  if (data?.requirements) {
    parsedRequirements = JSON.parse(data?.requirements);
  }
  if (data?.additional) {
    parsedAdditional = JSON.parse(data?.additional);
  }
  if (data?.benefits) {
    parsedBenefits = JSON.parse(data?.benefits);
  }
  const targetRef = useRef(null);
  const scrollToTarget = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="career-details-page style-5 pt-100">
      <section className="jop-details pb-100">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-lg-8">
                <div className="jop-info">
                  <h3 className="main-title mb-10">{data?.title}</h3>
                  {/* --------- */}
                  {data.expectations && (
                    <h6 className="mt-40 mb-20">Expectations </h6>
                  )}
                  {parsedExpectations &&
                    parsedExpectations.map((item) => (
                      <div className="text d-flex mb-20">
                        <span className="icon color-blue5 me-2 flex-shrink-0">
                          <i className="fas fa-check-circle" />
                        </span>
                        <p>{item}</p>
                      </div>
                    ))}
                  {/* ---------- */}
                  {data?.requirements && (
                    <h6 className="mt-40 mb-20">Requirements </h6>
                  )}
                  {parsedRequirements &&
                    parsedRequirements.map((item) => (
                      <div className="text d-flex mb-20">
                        <span className="icon color-blue5 me-2 flex-shrink-0">
                          <i className="fas fa-check-circle" />
                        </span>
                        <p>{item}</p>
                      </div>
                    ))}

                  {/* ---------- */}
                  <div className="d-flex justify-content-between flex-wrap py-4 border-1 border-bottom border-top brd-gray">
                    <p className="color-999">
                      Employment Status:{" "}
                      <span className="color-000">
                        {t(`job_posts.${data?.employment}`)}
                      </span>
                    </p>
                    <p className="color-999 mt-3 mt-lg-0">
                      Workplace:{" "}
                      <span className="color-000">
                        {t(`job_posts.${data?.workplace}`)}
                      </span>
                    </p>
                    <p className="color-999 mt-3 mt-lg-0">
                      Experience:{" "}
                      <span className="color-000"> {data?.experience} </span>
                    </p>
                  </div>
                  {/* --------- */}
                  {data?.additional && (
                    <h6 className="mt-40 mb-20"> Additional </h6>
                  )}
                  {parsedAdditional &&
                    parsedAdditional.map((item) => (
                      <div className="text d-flex mb-20">
                        <span className="icon color-blue5 me-2 flex-shrink-0">
                          <i className="fas fa-check-circle" />
                        </span>
                        <p>{item}</p>
                      </div>
                    ))}
                  {/* --------- */}
                  {data?.benefits && (
                    <h6 className="mt-40 mb-20"> Benefits </h6>
                  )}
                  {parsedBenefits &&
                    parsedBenefits.map((item) => (
                      <div className="text d-flex mb-20">
                        <span className="icon color-blue5 me-2 flex-shrink-0">
                          <i className="fas fa-check-circle" />
                        </span>
                        <p>{item}</p>
                      </div>
                    ))}
                  {/* --------- */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="summary-card">
                  <h6 className="mb-20 pb-20 border-bottom border-1 brd-gray">
                    Summary
                  </h6>
                  <ul>
                    <li>
                      Published on:{" "}
                      <span className="color">
                        {moment(data?.created_at).format("DD.MM.YYYY")}
                      </span>
                    </li>
                    <li>
                      Vacancy: <span className="color"> 1 </span>
                    </li>
                    <li>
                      Employment Status:
                      <span className="color">
                        {t(`job_posts.${data?.employment}`)}
                      </span>
                    </li>
                    <li>
                      Experience:
                      <span className="color"> {data?.experience} </span>
                    </li>
                    <li>
                      Application Deadline:
                      <span className="color">
                        {" "}
                        {moment(data?.deadline).format("DD.MM.YYYY")}
                      </span>
                    </li>
                  </ul>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTarget();
                    }}
                    href="#"
                    className="btn bg-blue5 sm-butn text-white hover-darkBlue w-100 mt-3 rounded-pill py-3"
                  >
                    <span> Apply For Job </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div ref={targetRef}>
        <CareerForm postId={data?.id} />
      </div>
    </main>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const jobPost = await jobPostsService.getJobPost(ctx.query?.slug);
    return {
      props: {
        data: jobPost.payload.jobPost,
      },
    };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
}

export default CareerDetails;
