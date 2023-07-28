import AllNews from "@/components/blog/AllNews";
import PopularPost from "@/components/blog/PopularPost";
import ProjectSlider from "@/components/projects/ProjectSlider";
import { blogService, categoriesService } from "@/services";
import React from "react";

export const Blog = ({ blogs, popularBlogs, categories }) => {
  return (
    <>
      <main className="blog-page style-5">
        <ProjectSlider
          slides={popularBlogs?.slice(0, 3).map((item) => item.thumbnail)}
        />
        <PopularPost data={popularBlogs} />
        <AllNews blogs={blogs} categories={categories} />
      </main>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const blogs = await blogService.getBlogs(ctx.query);
    const popularBlogs = await blogService.getBlogs(
      "page=1&limit=3&sort=view_count"
    );
    const categories = await categoriesService.getCategories("page=1&limit=10");
    return {
      props: {
        blogs: blogs,
        popularBlogs: popularBlogs.payload.blogs,
        categories: categories.payload?.categories,
      },
    };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
}

export default Blog;
