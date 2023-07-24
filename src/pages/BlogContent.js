import { Content } from "@/components/Content";
import { Categories } from "@/components/blogcontent/Categories";
import Contents from "@/components/blogcontent/Contents";
import React from "react";

export const BlogContent = () => {
  return (
    <>
      <main className="shop-page style-5 style-grad ">
        <section className="shop section-padding pt-50">
          <div className="container">
            
              <Content
                title={"MegaCode"}
                title_2={"Store"}
                desc={"MegaCode Store "}
              ></Content>
            

            <div className="row gx-4">
              <Categories />
              <Contents />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default BlogContent;
