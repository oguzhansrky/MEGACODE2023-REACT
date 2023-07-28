import useTranslation from "next-translate/useTranslation";
import moment from "moment";
import Link from "next/link";

const CareerPositions = ({ data = [] }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="careers-positions pb-100 my-5">
        <div className="container">
          <div className="section-head text-center mb-60 style-5">
            <h2 className="mb-20">
            {t("career_positions.open")} <span> {t("career_positions.position")} </span>
            </h2>
          </div>
          <div className="row">
            {data &&
              data.map((item) => (
                <div className="col-lg-4">
                  <Link
                    href={`/career/${item.slug}`}
                    className="position-card mb-4"
                  >
                    <h5>{item.title}</h5>

                    <div className="row tags">
                      <span className="col-sm-6 my-2">
                        <i className="bi bi-briefcase me-2 color-main" />
                        {t(`job_posts.${item.workplace}`)}
                      </span>
                      <span className="col-sm-6 my-2">
                        <i className="bi bi-clipboard-data color-main me-2" />
                        {item.experience}
                      </span>
                      <span className="col-sm-6 my-2">
                        <i className="fal fa-clock me-2 color-main" />
                        {t(`job_posts.${item.employment}`)}
                      </span>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 text-end mt-2">
                        <span className="color-blue5 fw-bold">
                          {t("job_posts.deadline")}
                        </span>{" "}
                        {moment(item.deadline).format("DD.MM.YYYY")}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPositions;
