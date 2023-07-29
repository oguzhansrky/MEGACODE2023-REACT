import { userService } from "@/services";
import { Button, message, Space, Table } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "antd";
import PageHead from "@/layout/head/Head";
import CreateUser from "@/modals/users/CreateUser";
import UpdateUser from "@/modals/users/UpdateUser";
import DeleteConfirm from "@/modals/DeleteConfirm";
import { parseCookies } from "@/utils";
import useTranslation from "next-translate/useTranslation";

const Users = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { pathname, query } = router;
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState();
  const params = new URLSearchParams(query);
  const [searchParams, setSearchParams] = useState(new URLSearchParams());
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    const hasPage = params.has("page");
    const hasLimit = params.has("limit");

    if (!hasPage) {
      params.append("page", "1");
    }
    if (!hasLimit) {
      params.append("limit", "10");
    }
    if (!hasLimit || !hasPage) setSearchParams(params);
  }, [query]);
  useEffect(() => {
    router.replace(
      {
        pathname,
        search: decodeURIComponent(searchParams),
      },
      undefined,
      { shallow: true }
    );
    if (searchParams.has("page")) loadData();
  }, [searchParams]);
  const loadData = async () => {
    try {
      const users = await userService.getUsers(
        decodeURIComponent(searchParams)
      );
      setData(users.payload.users);
      setMeta(users.meta);
    } catch (err) {
      console.error(err);
    }
  };
  const paginate = (page, pageSize) => {
    params.set("page", page);
    params.set("limit", pageSize);
    setSearchParams(params);
  };
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: t("admin_panel_users.title_name"),
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: t("admin_panel_users.title_email"),
      dataIndex: "email",
      key: "email",
    },
    {
      title: t("admin_panel_users.title_created_at"),
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => <span>{moment(date).format("DD.MM.YYYY mm:s")}</span>,
    },
    {
      title: t("admin_panel_users.title_role"),
      key: "role",
      dataIndex: "role",
      render: (role) => <span>{role.name}</span>,
    },
    {
      title: t("admin_panel_users.title_action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setFormData(record);
              setUpdateModal(true);
            }}
          >
            {t("admin_panel_users.text_edit")}
          </a>
          <a
            onClick={() => {
              setFormData(record);
              setDeleteModal(true);
            }}
          >
            {t("admin_panel_users.text_delete")}
          </a>
        </Space>
      ),
    },
  ];

  const handleDelete = async () => {
    try {
      await userService.deleteUser(formData?.id);
      messageApi.success(t("admin_panel_users.message_api"));
      setDeleteModal(false);
    } catch (err) {
      console.error(err);
      messageApi.error(err.response?.data?.message);
    }
  };
  return (
    <>
      {contextHolder}
      <PageHead title={t("admin_panel_users.pagehead_title")}></PageHead>
      <div className="mx-5">
        <div className="d-flex justify-content-between my-4">
          <h3>{t("admin_panel_users.h3_text")}</h3>
          <Button onClick={() => setCreateModal(true)}>
          {t("admin_panel_users.set_created")}
          </Button>
        </div>
        <Table
          pagination={{ position: ["none", "none"] }}
          columns={columns}
          dataSource={data}
        />
        <div key={meta} className="d-flex justify-content-center my-4">
          <Pagination
            total={meta?.total}
            current={meta?.current_page ?? 1}
            pageSize={meta?.per_page ?? 10}
            onChange={paginate}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `Toplam ${total} kullanıcı`}
          />
        </div>
      </div>
      <CreateUser
        loadData={loadData}
        isModalOpen={createModal}
        setIsModalOpen={setCreateModal}
      />
      <UpdateUser
        loadData={loadData}
        key={formData}
        isModalOpen={updateModal}
        setIsModalOpen={setUpdateModal}
        formData={formData}
      />
      <DeleteConfirm
        isModalOpen={deleteModal}
        setIsModalOpen={setDeleteModal}
        okFunction={handleDelete}
      />
    </>
  );
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

export default Users;
