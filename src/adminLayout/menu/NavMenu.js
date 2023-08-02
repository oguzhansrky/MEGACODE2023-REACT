import React, { useState } from "react";
import {
  
  AppstoreOutlined,
  CodeSandboxOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const NavMenu = () => {
  const { t } = useTranslation("common");
  const items = [
    getItem(t("admin_nav_bar.contents"), "sub1", <AppstoreOutlined />, [
      getItem(<Link href="/admin/categories">{t("admin_nav_bar.categories")}</Link>, "category"),
      getItem(<Link href="/admin/services">Servisler</Link>, "services"), // $translate
      getItem("Blog", "sub34", null, [
        getItem(<Link href="/admin/blogs">{t("admin_nav_bar.blog")}</Link>, "blogs"),
        getItem(
          <Link href="/admin/blog-comments">{t("admin_nav_bar.blog_com")}</Link>,
          "blog-comments"
        ),
      ]),
    ]),
    getItem(t("admin_nav_bar.career"), "sub2", <CodeSandboxOutlined />, [
      getItem(<Link href="/admin/job-posts">{t("admin_nav_bar.job_post")}</Link>, "job-posts"),
      getItem(
        <Link href="/admin/applications">{t("admin_nav_bar.job_app")}</Link>,
        "applications"
      ),
    ]),
    getItem(t("admin_nav_bar.managment"), "sub3", <SettingOutlined />, [
      getItem(<Link href="/admin/users">{t("admin_nav_bar.user")}</Link>, "user"),
      getItem(<Link href="/admin/roles">{t("admin_nav_bar.roles")}</Link>, "role"),
    ]),
  ];
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  
  const onOpenChange = (keys) => {
    
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
    />
  );
};
export default NavMenu;
