import Banner from "@/components/career/Banner";
import CareerForm from "@/components/career/CareerForm";
import CareerPositions from "@/components/career/CareerPositions";
import { Content } from "@/components/Content";
import PageHead from "@/layout/head/Head";
import { jobPostsService } from "@/services";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Career = ({ jobPosts }) => {
  const career = {
    "@context": "https://yayinoncesi.megacode.com.tr/",
    "@type": "career",
    "    name": "Kariyer",
    "    description": "İş başvurularınızı bu sayfadan yapabilirsiniz",
  };
  const router = useRouter();
  const { asPath } = router;
  return (
    <>
      <main className="careers-page style-5">
        <Head>
          <script type="application/ld+json">{JSON.stringify(career)}</script>
        </Head>
        <PageHead pathname={asPath} />
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
