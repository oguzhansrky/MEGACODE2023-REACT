import React from "react";
import useTranslation from "next-translate/useTranslation";

const PaginationComponent = ({
  
  itemPerPage,
  totalItems,
  paginate,
  currentPage,
  hidePageNumbers,
  classNames,
}) => {
  const { t } = useTranslation("common");
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  const lastPage = Math.max(...pageNumbers);

  const nextPage = () => {
    if (currentPage < lastPage) paginate(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  return (
    <>
      {pageNumbers.length > 1 && (
        <div className="pagination style-5 color-5 justify-content-center mt-60">
          <a style={{ cursor: "pointer" }} className="px-2">
            <span
              onClick={(ev) => {
                ev.preventDefault();
                prevPage();
              }}
            >
              <i className="fas fa-chevron-left" />
              {"   "}
              Prev
            </span>
          </a>
          {pageNumbers.map((item) => {
            if (
              (!(item > currentPage + 3) && !(item < currentPage - 3)) ||
              item === Math.ceil(totalItems / itemPerPage) ||
              item === 1
            ) {
              return (
                <a
                  onClick={() => paginate(item)}
                  style={{ cursor: "pointer" }}
                  className={`${currentPage === item ? "active" : ""}`}
                >
                  <span>{item}</span>
                </a>
              );
            } else if (item === currentPage + 4 || item === currentPage - 4) {
              return (
                <a>
                  <span>...</span>
                </a>
              );
            } else {
              return null;
            }
          })}
          <a style={{ cursor: "pointer" }} className="px-2">
            <span
              onClick={(ev) => {
                ev.preventDefault();
                nextPage();
              }}
              className="text"
            >
              <span>{t("pagination.next")}</span>
              {"   "}
              <i className="fas fa-chevron-right" />
            </span>
          </a>
        </div>
      )}
    </>
  );
};

export { PaginationComponent };
