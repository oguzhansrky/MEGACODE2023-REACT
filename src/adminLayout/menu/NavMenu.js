import React, { useState } from "react";
import {
  AppstoreOutlined,
  CodeSandboxOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
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
const items = [
  getItem("İçerik", "sub1", <AppstoreOutlined />, [
    getItem(<Link href="/admin/categories">Kategoriler</Link>, "category"),
    getItem("Blog", "sub34", null, [
      getItem(<Link href="/admin/blogs">Bloglar</Link>, "blogs"),
      getItem(
        <Link href="/admin/blog-comments">Blog Yorumları</Link>,
        "blog-comments"
      ),
    ]),
  ]),
  getItem("Kariyer", "sub2", <CodeSandboxOutlined />, [
    getItem(<Link href="/admin/job-posts">İş İlanları</Link>, "job-posts"),
    getItem(
      <Link href="/admin/applications">İş Başvuruları</Link>,
      "applications"
    ),
  ]),
  getItem("Yönetim", "sub3", <SettingOutlined />, [
    getItem(<Link href="/admin/users">Kullanıcılar</Link>, "user"),
    getItem(<Link href="/admin/roles">Roller</Link>, "role"),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const NavMenu = () => {
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
