import AllNews from "@/components/blog/AllNews";
import PopularPost from "@/components/blog/PopularPost";
import ProjectSlider from "@/components/projects/ProjectSlider";
import PageHead from "@/layout/head/Head";
import { blogService, categoriesService } from "@/services";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export const Blog = ({ blogs, popularBlogs, categories }) => {
  const blog = {
    "@context": "https://yayinoncesi.megacode.com.tr/",
    "@type": "blog",
    "    name": "Blog",
    "    description": "Bloglarımız",
  };
  const router = useRouter();
  const { asPath } = router;
  console.log(asPath, router);
  return (
    <>
      <Head>
        {" "}
        <script type="application/ld+json">{JSON.stringify(blog)}</script>
      </Head>
      <PageHead title={"Blogs"} pathname={asPath} />
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
