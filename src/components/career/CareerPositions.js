import { jobPostsService } from "@/services";
import { useState, useEffect } from "react";

const CareerPositions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const JobPosts = await jobPostsService.getJobPosts();
      setData(JobPosts.payload.jobPosts);
      setMeta(JobPosts.meta);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="careers-positions pb-100 my-5">
        <div className="container">
          <div className="section-head text-center mb-60 style-5">
            <h2 className="mb-20">
              {" "}
              Open <span> Positions </span>{" "}
            </h2>
          </div>
          {data &&
            data.map((item) => (
              <div className="row">
                <div className="col-lg-4">
                  <a href="#" className="position-card mb-4">
                    <h5>{item.title}</h5>
                    <p> {item.expectations} </p>
                    <div className="time">
                      <span className="me-4">
                        {" "}
                        <i className="fal fa-clock me-1 color-main" />{" "}
                        {item.employment}{" "}
                      </span>
                      <span>
                        {" "}
                        <i className="fal fa-dollar-sign me-1 color-main" />{" "}
                        {item.experience}{" "}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default CareerPositions;
