import Banner from "@/components/career/Banner";
import CareerForm from "@/components/career/CareerForm";
import CareerPositions from "@/components/career/CareerPositions";
import { Content } from "@/components/Content";
import { jobPostsService } from "@/services";
import React from "react";

const Career = ({ jobPosts }) => {
  return (
    <>
      <main className="careers-page style-5">
        <Content hideTitle title="Career">
          <Banner />
          <CareerPositions data={jobPosts} />
        </Content>
        <CareerForm />
      </main>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const jobPosts = await jobPostsService.getJobPosts(ctx.query);
    return {
      props: {
        jobPosts: jobPosts.payload.jobPosts,
      },
    };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
}

export default Career;
