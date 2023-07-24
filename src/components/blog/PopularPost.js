import React from "react";

export const PopularPost = () => {
  return (
    <>
      <section className="popular-posts pt-50 pb-100 border-bottom brd-gray">
        <div className="container">
          <h5 className="post-sc-title text-center text-uppercase mb-70">
            Popular Posts
          </h5>
          <div className="row gx-5">
            <div className="col-lg-4 border-end brd-gray">
              <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                <div className="img radius-7 overflow-hidden img-cover">
                  <img
                    src="assets/img/blog/7.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body px-0">
                  <small className="d-block date mt-10 fs-10px fw-bold">
                    <a
                      href="#"
                      className="text-uppercase border-end brd-gray pe-3 me-3 color-blue5"
                    >
                      News
                    </a>
                    <i className="bi bi-clock me-1" />
                    <a href="#" className="op-8">
                      Posted on 3 Days ago
                    </a>
                  </small>
                  <h5 className="fw-bold mt-10 title">
                    <a href="page-single-post-5.html">Crypto Trend 2023</a>
                  </h5>
                  <p className="small mt-2 op-8 fs-10px">
                    If there’s one way that wireless technology has changed the
                    way we work, it’s that will everyone is now connected [...]
                  </p>
                  <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
                    <div className="l_side d-flex align-items-center">
                      <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                        a
                      </span>
                      <a href="#" className="mt-1">
                        By Admin
                      </a>
                    </div>
                    <div className="r-side mt-1">
                      <i className="bi bi-chat-left-text me-1" />
                      <a href="#">24</a>
                      <i className="bi bi-eye ms-4 me-1" />
                      <a href="#">774k</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 border-end brd-gray">
              <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                <div className="img radius-7 overflow-hidden img-cover">
                  <img
                    src="assets/img/blog/7.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body px-0">
                  <small className="d-block date mt-10 fs-10px fw-bold">
                    <a
                      href="#"
                      className="text-uppercase border-end brd-gray pe-3 me-3 color-blue5"
                    >
                      News
                    </a>
                    <i className="bi bi-clock me-1" />
                    <a href="#" className="op-8">
                      Posted on 3 Days ago
                    </a>
                  </small>
                  <h5 className="fw-bold mt-10 title">
                    <a href="page-single-post-5.html">AI With Fingerprint</a>
                  </h5>
                  <p className="small mt-2 op-8 fs-10px">
                    If there’s one way that wireless technology has changed the
                    way we work, it’s that will everyone is now connected [...]
                  </p>
                  <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
                    <div className="l_side d-flex align-items-center">
                      <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                        a
                      </span>
                      <a href="#" className="mt-1">
                        By Admin
                      </a>
                    </div>
                    <div className="r-side mt-1">
                      <i className="bi bi-chat-left-text me-1" />
                      <a href="#">24</a>
                      <i className="bi bi-eye ms-4 me-1" />
                      <a href="#">774k</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                <div className="img radius-7 overflow-hidden img-cover">
                  <img
                    src="assets/img/blog/5.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body px-0">
                  <small className="d-block date mt-10 fs-10px fw-bold">
                    <a
                      href="#"
                      className="text-uppercase border-end brd-gray pe-3 me-3 color-blue5"
                    >
                      News
                    </a>
                    <i className="bi bi-clock me-1" />
                    <a href="#" className="op-8">
                      Posted on 3 Days ago
                    </a>
                  </small>
                  <h5 className="fw-bold mt-10 title">
                    <a href="page-single-post-5.html">
                      NFT Game! New Oppoturnity
                    </a>
                  </h5>
                  <p className="small mt-2 op-8 fs-10px">
                    If there’s one way that wireless technology has changed the
                    way we work, it’s that will everyone is now connected [...]
                  </p>
                  <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
                    <div className="l_side d-flex align-items-center">
                      <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                        a
                      </span>
                      <a href="#" className="mt-1">
                        By Admin
                      </a>
                    </div>
                    <div className="r-side mt-1">
                      <i className="bi bi-chat-left-text me-1" />
                      <a href="#">24</a>
                      <i className="bi bi-eye ms-4 me-1" />
                      <a href="#">774k</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PopularPost;
