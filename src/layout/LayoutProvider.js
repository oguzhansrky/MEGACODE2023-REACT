import LoadingUI from "@/components/LoadingUI";
import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TopNavbar from "./header/TopNavbar";

const LayoutProvider = (props) => {
  return (
    <>
      <LoadingUI loading={props.loading}>
        <TopNavbar />
        <Header />
        {props.children}
        <Footer />
      </LoadingUI>
    </>
  );
};

export default LayoutProvider;
