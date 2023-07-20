import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="style-1">
        <div className="container">
          <div className="content">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="foot_info">
                  <a href="#" className="logo mb-3">
                    <img src="assets/img/logo_cl.png" alt="" />
                  </a>
                  <div className="text mb-4">
                    Best IT Solutions &amp; Technology WordPress <br /> Theme
                    for Your Busines
                  </div>
                  <ul className="mb-4">
                    <li className="d-flex">
                      <i className="bi bi-house me-3" />
                      <a href="#">
                        <span>58 Howard St, San Francisco, CA 941</span>
                      </a>
                    </li>
                    <li className="d-flex">
                      <i className="bi bi-envelope me-3" />
                      <a href="#">
                        <span>contact@Iteck.co</span>
                      </a>
                    </li>
                    <li className="d-flex">
                      <i className="bi bi-phone me-3" />
                      <a href="#">
                        <span>(+23) 5535 68 68</span>
                      </a>
                    </li>
                  </ul>
                  <div className="social_icons">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-github" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="links">
                  <div className="cont">
                    <h6 className="link_title">Services</h6>
                    <ul>
                      <li>
                        <a href="#">IT Consultations </a>
                      </li>
                      <li>
                        <a href="#">Data Security </a>
                      </li>
                      <li>
                        <a href="#">Website Development </a>
                      </li>
                      <li>
                        <a href="#">UI/UX Design </a>
                      </li>
                      <li>
                        <a href="#">Cloud Services </a>
                      </li>
                      <li>
                        <a href="#">Game Development </a>
                      </li>
                      <li>
                        <a href="#">CRM &amp; Software </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="links">
                  <div className="cont">
                    <h6 className="link_title">Information</h6>
                    <ul>
                      <li>
                        <a href="#">About Iteck </a>
                      </li>
                      <li>
                        <a href="#">Investors </a>
                      </li>
                      <li>
                        <a href="#">Blog </a>
                      </li>
                      <li>
                        <a href="#">Career </a>
                      </li>
                      <li>
                        <a href="#">Contact </a>
                      </li>
                      <li>
                        <a href="#">Affiliate Program </a>
                      </li>
                      <li>
                        <a href="#">How It Works </a>
                      </li>
                      <li>
                        <a href="#">Pricing Plan </a>
                      </li>
                      <li>
                        <a href="#">Covid-19 Update </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="foot_subscribe">
                  <h6 className="link_title">Newsletter</h6>
                  <p>
                    Register now to get latest updates on promotions &amp;
                    coupons.
                  </p>
                  <div className="input-group my-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                      aria-label="Enter your email"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn butn-gard border-0 text-white px-3"
                      type="button"
                      id="button-addon2"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                  <p className="fst-italic">
                    By subscribing, you accepted the our{" "}
                    <a href="#" className="text-decoration-underline">
                      {" "}
                      Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="foot">
                <p>
                  © 2022 Copyrights by{" "}
                  <a href="#" className="text-white text-decoration-underline">
                    Iteck Co.
                  </a>{" "}
                  All Rights Reserved by{" "}
                  <a href="#" className="text-white text-decoration-underline">
                    {" "}
                    ThemesCamp{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/footer/foot_l.png" alt="" className="foot_l" />
        <img src="assets/img/footer/foot_r.png" alt="" className="foot_r" />
      </footer>
    </>
  );
};

export default Footer;
