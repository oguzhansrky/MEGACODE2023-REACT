import React from "react";

export const Contents = () => {
  return (
    <>
    
      <div className="col-lg-9">
        <div className="products-content">
          <div className="top-filter mb-10">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p className="color-999 fs-12px mb-3 mb-lg-0">
                  {" "}
                  <span className="color-000">1 - 40</span> of 1,652 results
                </p>
              </div>
              <div className="col-lg-6">
                <div className="r-side">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <form
                        action="https://iteck-html.themescamp.com/contact.php"
                        className="form"
                        method="post"
                      >
                        <div className="form-group">
                          <label>Sort by</label>
                          <select className="form-select">
                            <option value selected>
                              Default
                            </option>
                            <option value>best seller</option>
                            <option value>new products</option>
                            <option value>Default</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div className="col-4">
                      <div className="grid-list-btns">
                        <span className="grid-btn bttn active">
                          <i className="bi bi-grid-3x3" />
                        </span>
                        <span className="list-btn bttn">
                          <i className="bi bi-list-task" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products">
            <div className="row gx-2 gx-lg-4">
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/1.png" alt="" />
                    <span className="label new">new</span>
                    <span className="fav-btn active">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">asus</h6>
                    <h5 className="title">
                      ASUS Chromebook Flip -10.2 inch, 256GB
                    </h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">$197.00</div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/2.png" alt="" />
                    <span className="label sale-off">15% off</span>
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">apple</h6>
                    <h5 className="title">Macbook Air 2018, 1 TB</h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">
                    <span className="price-sale">$421.00</span>{" "}
                    <span className="old-price">$521.00</span>
                  </div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/3.png" alt="" />
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">Samsung</h6>
                    <h5 className="title">
                      Samsung New VR Headset, Oculus 2.0
                    </h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">$197.00</div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/4.png" alt="" />
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">brand name</h6>
                    <h5 className="title">iPhone 6s Gold 64GB, Retina Ready</h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">$197.00</div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/5.png" alt="" />
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">Xbox</h6>
                    <h5 className="title">Xbox One Controller</h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">$197.00</div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/6.png" alt="" />
                    <span className="label sale-off">15% off</span>
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">amcrest</h6>
                    <h5 className="title">Amcrest Outdoor Camera</h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">
                    <span className="price-sale">$421.00</span>{" "}
                    <span className="old-price">$521.00</span>
                  </div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/7.png" alt="" />
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">dji2</h6>
                    <h5 className="title">
                      DJI II Phantom 4 Quad Drone With Camera
                    </h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">$197.00</div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/8.png" alt="" />
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">gopro</h6>
                    <h5 className="title">
                      Gopro Hero 4 Sliver 4K HD, Wireles Sport Camera
                    </h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">$197.00</div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/9.png" alt="" />
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">nikon</h6>
                    <h5 className="title">Nikon Coolpix Camera</h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">$197.00</div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/10.png" alt="" />
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">sony</h6>
                    <h5 className="title">
                      Sony Camera 24.5MP, HD, 4k Wireless
                    </h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">$197.00</div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/11.png" alt="" />
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">seo book</h6>
                    <h5 className="title">
                      All My Dangerous Friends - Marketing Book
                    </h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">$197.00</div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-sm-6 card-width">
                <div className="product-card">
                  <div className="img">
                    <img src="assets/img/shop/products/12.png" alt="" />
                    <span className="fav-btn">
                      {" "}
                      <i className="fas fa-heart" />{" "}
                    </span>
                  </div>
                  <div className="info">
                    <h6 className="category">seo book</h6>
                    <h5 className="title">Love Does - Bob Goff</h5>
                    <div className="rate">
                      <div className="stars">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="rev">3 Reviews</span>
                    </div>
                  </div>
                  <div className="price">$197.00</div>
                  <a href="#" className="btn rounded-pill mt-20">
                    <span>Add To Cart</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="pagination style-5 color-4 justify-content-center mt-50">
              <a href="#" className="active">
                <span>1</span>
              </a>
              <a href="#">
                <span>2</span>
              </a>
              <a href="#">
                <span>3</span>
              </a>
              <a href="#">
                <span>4</span>
              </a>
              <a href="#">
                <span>...</span>
              </a>
              <a href="#">
                <span>20</span>
              </a>
              <a href="#">
                <span className="text">
                  next <i className="fas fa-chevron-right" />{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contents;
