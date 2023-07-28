import React from "react";
import Head from "next/head";

const LoadingUI = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/loading.css" />
      </Head>
      <div className="contain">
        <div className="cube-wrapper">
          <div className="cube-folding">
            <span className="leaf1"></span>
            <span className="leaf2"></span>
            <span className="leaf3"></span>
            <span className="leaf4"></span>
          </div>
          <div className="loading-container">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingUI;
