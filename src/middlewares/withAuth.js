import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const user = useSelector((state) => state.user?.currentUser);
    const router = useRouter();

    if (!user) {
      router.push("/admin/login");
    }

    // If the user is authenticated, or on server-side, render the wrapped component with its props
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
