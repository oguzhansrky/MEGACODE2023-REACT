import { categoriesService, roleService, userService } from "@/services";
import { Button, message, Space, Table } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "antd";
import PageHead from "@/layout/head/Head";
import DeleteConfirm from "@/modals/DeleteConfirm";
import CreateCategory from "@/modals/categories/CreateCategory";
import UpdateCategory from "@/modals/categories/UpdateCategory";
import { parseCookies } from "@/utils";
import useTranslation from "next-translate/useTranslation";

const categories = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { pathname, query } = router;
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState();
  const params = new URLSearchParams(query);
  const [searchParams, setSearchParams] = useState(new URLSearchParams());
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [formData, setFormData] = useState(null);
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
      const categories = await categoriesService.getCategories(
        decodeURIComponent(searchParams)
      );
      setData(categories.payload.categories);
      setMeta(categories.meta);
    } catch (err) {
      console.error(err);
    }
  };
  const paginate = (page, pageSize) => {
    params.set("page", page);
    params.set("limit", pageSize);
    setSearchParams(params);
  };
  useEffect(() => {
    loadData();
  }, [createModal, updateModal, deleteModal]);
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title:t("admin_panel_categories.title_name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("admin_panel_categories.title_created_at"),
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => <span>{moment(date).format("DD.MM.YYYY mm:s")}</span>,
    },
    {
      title: t("admin_panel_categories.title_action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setFormData(record);
              setUpdateModal(true);
            }}
          >
            {t("admin_panel_categories.text_edit")}
          </a>
          <a
            onClick={() => {
              setFormData(record);
              setDeleteModal(true);
            }}
          >
            {t("admin_panel_categories.text_delete")}
          </a>
        </Space>
      ),
    },
  ];

  const handleDelete = async () => {
    try {
      await categoriesService.deleteCategory(formData?.id);
      messageApi.success(t("admin_panel_categories.message_api"));
      setDeleteModal(false);
    } catch (err) {
      console.error(err);
      messageApi.error(err.response?.data?.message);
    }
  };
  return (
    <>
      {contextHolder}
      <PageHead title={t("admin_panel_categories.pagehead_title_categories")}></PageHead>
      <div className="mx-5">
        <div className="d-flex justify-content-between my-4">
          <h3>{t("admin_panel_categories.h3_categories")}</h3>
          <Button onClick={() => setCreateModal(true)}>{t("admin_panel_categories.set_created_categories")}</Button>
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
      <CreateCategory
        isModalOpen={createModal}
        setIsModalOpen={setCreateModal}
      />
      <UpdateCategory
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

export default categories;
