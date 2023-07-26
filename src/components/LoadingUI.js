import React from "react";
import Head from "next/head";

const LoadingUI = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/loading.css" />
      </Head>
      <div class="contain">
        <div class="cube-wrapper">
          <div class="cube-folding">
            <span class="leaf1"></span>
            <span class="leaf2"></span>
            <span class="leaf3"></span>
            <span class="leaf4"></span>
          </div>
          <div class="loading-container">
            <div class="loading-text">
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
