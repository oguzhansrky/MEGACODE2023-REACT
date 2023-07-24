import React from "react";

export const Categories = () => {
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <div className="filter">
          <div className="filter-card mb-30">
            <div className="card-title">
              <span>Categories</span>
            </div>
            <div className="form-check category-checkRadio">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="category1"
              />
              <label className="form-check-label cat-link" htmlFor="category1">
                All Categories
              </label>
            </div>
            <div className="form-check category-checkRadio">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="category2"
              />
              <label className="form-check-label cat-link" htmlFor="category2">
                Marketing &amp; SEO
              </label>
            </div>
            <div className="accordion" id="accordionExample">
              <div className>
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Technology
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="ps-3 mb-10">
                    <div className="form-check category-checkRadio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id="category3"
                        defaultChecked
                      />
                      <label
                        className="form-check-label cat-link"
                        htmlFor="category3"
                      >
                        PC &amp; Laptop
                      </label>
                    </div>
                    <div className="form-check category-checkRadio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id="category4"
                      />
                      <label
                        className="form-check-label cat-link"
                        htmlFor="category4"
                      >
                        Hardware
                      </label>
                    </div>
                    <div className="form-check category-checkRadio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id="category5"
                      />
                      <label
                        className="form-check-label cat-link"
                        htmlFor="category5"
                      >
                        mobile &amp; tablet
                      </label>
                    </div>
                    <div className="form-check category-checkRadio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id="category6"
                      />
                      <label
                        className="form-check-label cat-link"
                        htmlFor="category6"
                      >
                        accessories
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className>
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Electronic
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="ps-3 mb-10">
                    <div className="form-check category-checkRadio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id="category7"
                      />
                      <label
                        className="form-check-label cat-link"
                        htmlFor="category7"
                      >
                        PC &amp; Laptop
                      </label>
                    </div>
                    <div className="form-check category-checkRadio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id="category8"
                      />
                      <label
                        className="form-check-label cat-link"
                        htmlFor="category8"
                      >
                        Hardware
                      </label>
                    </div>
                    <div className="form-check category-checkRadio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id="category9"
                      />
                      <label
                        className="form-check-label cat-link"
                        htmlFor="category9"
                      >
                        mobile &amp; tablet
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className>
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Course
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="ps-3 mb-10">
                    <div className="form-check category-checkRadio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id="category10"
                      />
                      <label
                        className="form-check-label cat-link"
                        htmlFor="category10"
                      >
                        PC &amp; Laptop
                      </label>
                    </div>
                    <div className="form-check category-checkRadio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id="category11"
                      />
                      <label
                        className="form-check-label cat-link"
                        htmlFor="category11"
                      >
                        Hardware
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-check category-checkRadio">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="category12"
              />
              <label className="form-check-label cat-link" htmlFor="category12">
                Event
              </label>
            </div>
          </div>
          <div className="filter-card">
            <div className="card-title d-flex justify-content-between">
              <span>Filter</span>
              <a href="#" className="text-uppercase fw-normal fs-10px">
                {" "}
                <i className="bi bi-arrow-repeat me-1" /> Reset All{" "}
              </a>
            </div>
            <div className="filter-card-item">
              <div className="sub-tilte d-flex align-items-center justify-content-between">
                <span>Brands</span>
                <small className="icon">
                  <i className="bi bi-chevron-down" />
                </small>
              </div>
              <div className="filter-card-body">
                <div className="search-group">
                  <input type="text" placeholder="Search brand" />
                  <button>
                    {" "}
                    <i className="bi bi-search" />{" "}
                  </button>
                </div>
                <div className="filter-card-scroll">
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck1"
                    >
                      All Brands
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck2"
                    >
                      Apple
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck3"
                    >
                      Samsung
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck4"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck4"
                    >
                      Oppo
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck5"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck5"
                    >
                      Sony
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck6"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck6"
                    >
                      Apple
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck7"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck7"
                    >
                      Samsung
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck8"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck8"
                    >
                      Oppo
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck9"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck9"
                    >
                      Sony
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card-item">
              <div className="sub-tilte d-flex align-items-center justify-content-between">
                <span>Colors</span>
                <small className="icon">
                  <i className="bi bi-chevron-down" />
                </small>
              </div>
              <div className="filter-card-body">
                <div className="filter-card-scroll">
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck10"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck10"
                    >
                      All Colors
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck11"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck11"
                    >
                      Red
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck12"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck12"
                    >
                      Orange
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck13"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck13"
                    >
                      Yellow
                    </label>
                  </div>
                  <div className="form-check category-checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="categoryCheck14"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="categoryCheck14"
                    >
                      Blue
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card-item border-0 m-0">
              <div className="sub-tilte d-flex align-items-center justify-content-between">
                <span>Price</span>
              </div>
              <div className="filter-card-body">
                <div className="slider-range-content">
                  <div className="amount-input">
                    <div className="amount">
                      <small>$ Min</small>
                      <input type="text" id="amount1" readOnly />
                    </div>
                    <div className="amount">
                      <small>$ Max</small>
                      <input type="text" id="amount2" readOnly />
                    </div>
                    <button>go</button>
                  </div>
                  <div id="slider-range" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
