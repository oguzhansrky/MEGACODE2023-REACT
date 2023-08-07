import React from "react";

const LoadingUI = () => {
  return (
    <>
      <div className="contain">
        <div className="cube-wrapper">
          <div className="top-half">
            <div className="cube-folding">
              <span className="leaf1"></span>
              <span className="leaf2"></span>
              <span className="leaf3"></span>
              <span className="leaf4"></span>
            </div>
          </div>
          <div className="bottom-half">
            <div className="loading-container">
              <div className="loading-text w-25">
                <span>M</span>
                <span>E</span>
                <span>G</span>
                <span>A</span>
                <span>C</span>
                <span>O</span>
                <span>D</span>
                <span>E</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingUI;
