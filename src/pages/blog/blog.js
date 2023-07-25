import AllNews from "@/components/blog/AllNews";

import PopularPost from "@/components/blog/PopularPost";

import ProjectSlider from "@/components/projects/ProjectSlider";
import React from "react";

export const blog = () => {
  return (
    <>
      <main class="blog-page style-5">
        <ProjectSlider
          slides={[
            "https://megacode.com.tr/img/mega/dijital_slider_1.png",
            "https://megacode.com.tr/img/mega/dijital_slider_2.png",
          ]}
        />
        <PopularPost />
        <AllNews />
      </main>
    </>
  );
};
export default blog;
