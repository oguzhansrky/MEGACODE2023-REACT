import clsx from "clsx";
import React from "react";
import { useEffect } from "react";

const LoadingUI = ({ children, loading }) => {
  useEffect(() => {
    const container = document.querySelector(".loading-container");
    if (!loading) {
      setTimeout(() => {
        container?.classList.add("z-1");
      }, 800);
    } else {
      container.classList.remove("z-1");
    }
  }, [loading]);
  return (
    <>
      <div className={"loading-container"}>
        <div
          className={clsx("top-half d-flex justify-content-center", {
            "close-loading": !loading,
          })}
        >
          {loading && (
            <div className="cube-wrapper">
              <div className="cube-folding">
                <span className="leaf1"></span>
                <span className="leaf2"></span>
                <span className="leaf3"></span>
                <span className="leaf4"></span>
              </div>
            </div>
          )}
        </div>
        <div
          className={clsx("bottom-half d-flex justify-content-center", {
            "close-loading": !loading,
          })}
        >
          {loading && (
            <div className="loading-text">
              <span>M</span>
              <span>E</span>
              <span>G</span>
              <span>A</span>
              <span>C</span>
              <span>O</span>
              <span>D</span>
              <span>E</span>
            </div>
          )}
        </div>
      </div>
      {children}
    </>
  );
};

export default LoadingUI;
