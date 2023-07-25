import { parseCookies } from "@/utils";
import React from "react";

const Dashboard = () => {
  return <div></div>;
};

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx.req.headers.cookie);
  if (!cookies.access_token) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  return { props: {} };
}

export default Dashboard;
