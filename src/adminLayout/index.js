import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMenu from "./menu/NavMenu";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { message } from "antd";
import { logOut } from "@/store/slices/userSlice";
import { authService } from "@/services";
import { useRouter } from "next/router";

const AdminLayout = (props) => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const user = useSelector((state) => state.user?.currentUser);

  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authService.logout();
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      dispatch(logOut());
      messageApi.success("Başarıyla çıkış yaptınız.");
      router.push("/admin/login");
    } catch (err) {
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };
  return (
    <>
      {contextHolder}
      <div className="mx-4 d-flex">
        <div style={{ height: "90vh" }}>
          <div className="d-flex justify-content-between">
            <Link className="navbar-brand" href="/admin">
              <Image
                width={200}
                height={70}
                src="http://localhost:3000/assets/img/megacode-logo.png"
                alt=""
              />
            </Link>
          </div>
          <NavMenu />
        </div>
        <div className="w-100">
          <div className="d-flex justify-content-end mt-2 d-flex align-items-center">
            <span>
              Hoşgeldiniz <b>{user?.full_name}</b>
            </span>

            <a
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
              href="#"
              className="search-icon me-4 ms-2"
            >
              <i className="bi bi-box-arrow-right fs-4" />
            </a>
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
