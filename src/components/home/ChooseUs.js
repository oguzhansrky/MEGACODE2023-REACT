import React from "react";

const ChooseUs = () => {
  return (
    <section className="choose-us section-padding pt-0 style-1">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-60">
                <h6 className="color-main text-uppercase wow fadeInUp">
                  Why choose us
                </h6>
                <h2 className="wow fadeInUp">
                  Boost Your Business{" "}
                  <span className="fw-normal">With New Tech</span>
                </h2>
              </div>
              <div className="text">
                Our team can assist you in transforming your business through
                latest tech capabilities to stay ahead of the curve.
              </div>
              <ul>
                <li className="wow fadeInUp">
                  <span className="icon">
                    <i className="bi bi-check2" />
                  </span>
                  <h6>Latest IT Solutions &amp; Integration With Blockchain</h6>
                </li>
                <li className="wow fadeInUp">
                  <span className="icon">
                    <i className="bi bi-check2" />
                  </span>
                  <h6>Over 100+ Payment Gateways Support</h6>
                </li>
                <li className="wow fadeInUp">
                  <span className="icon">
                    <i className="bi bi-check2" />
                  </span>
                  <h6>AI Machine &amp; Deep Learning</h6>
                </li>
                <li className="wow fadeInUp">
                  <span className="icon">
                    <i className="bi bi-check2" />
                  </span>
                  <h6>Dedicated Support 24/7</h6>
                </li>
              </ul>
              <a
                href="page-about-5.html"
                className="btn butn-gard border-0 text-white wow fadeInUp"
              >
                <span>How We Works</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/choose_us/choose_lines.svg"
        alt=""
        className="choose-us-img"
      />
      <img
        src="/assets/img/choose_us/choose_brands.png"
        alt=""
        className="choose-us-brands"
      />
      <img
        src="/assets/img/choose_us/choose_bubbles.png"
        alt=""
        className="choose-us-bubbles"
      />
    </section>
  );
};

export default ChooseUs;
