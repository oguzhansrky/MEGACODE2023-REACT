import { blogcommentService, userService } from "@/services";
import { Button, message, Space, Table } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "antd";
import PageHead from "@/layout/head/Head";
import DeleteConfirm from "@/modals/DeleteConfirm";
import CreateBlogComment from "@/modals/blogcomments/CreateBlogComment";
import _ from "lodash";
import UpdateBlogComment from "@/modals/blogcomments/UpdateBlogComment";
import { parseCookies } from "@/utils";
import useTranslation from "next-translate/useTranslation";

const blogcomments = () => {
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
      const blogcomments = await blogcommentService.getBlogComments(
        decodeURIComponent(searchParams)
      );
      setData(blogcomments.payload.comments);
      setMeta(blogcomments.meta);
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
      title: t("admin_panel_blog_com.title_name"),
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: t("admin_panel_blog_com.title_comment"),
      dataIndex: "comment",
      key: "comment",
      render: (comment) => {
        return (
          <span>
            {_.truncate(comment, {
              length: 115,
              omission: "...",
            })}
          </span>
        );
      },
    },
    {
      title: t("admin_panel_blog_com.title_status"),
      dataIndex: "status",
      key: "status",
      render: (status) => {
        console.log(status);
        switch (status) {
          case "approved":
            return <span className="text-success"> {t("admin_panel_blog_com.text_success")}</span>;
          case "unapproved":
            return <span className="text-danger">{t("admin_panel_blog_com.text_danger")}</span>;
          case "pending":
            return <span className="text-warning">{t("admin_panel_blog_com.text_warning")}</span>;
          default:
            return <span>-</span>;
        }
      },
    },
    {
      title: t("admin_panel_blog_com.title_blog"),
      dataIndex: "blog_id",
      key: "blog_id",
    },
    {
      title: t("admin_panel_blog_com.title_created_at"),
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => <span>{moment(date).format("DD.MM.YYYY mm:s")}</span>,
    },
    {
      title: t("admin_panel_blog_com.title_action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setFormData(record);
              setUpdateModal(true);
            }}
          >
            {t("admin_panel_blog_com.text_edit")}
          </a>
          <a
            onClick={() => {
              setFormData(record);
              setDeleteModal(true);
            }}
          >
            {t("admin_panel_blog_com.text_delete")}
          </a>
        </Space>
      ),
    },
  ];

  const handleDelete = async () => {
    try {
      await blogcommentService.deleteBlogComment(formData?.id);
      messageApi.success(t("admin_panel_applications.api_blog_delete"));
      setDeleteModal(false);
    } catch (err) {
      console.error(err);
      messageApi.error(err.response?.data?.message);
    }
  };
  return (
    <>
      {contextHolder}
      <PageHead title={t("admin_panel_applications.pagehead_title_blog")}></PageHead>
      <div className="mx-5">
        <div className="d-flex justify-content-between my-4">
          <h3>{t("admin_panel_applications.pagehead_title_blog")}</h3>
        </div>

        <Table
          pagination={{ position: ["none", "none"] }}
          columns={columns}
          dataSource={data}
          className=""
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
      <CreateBlogComment
        isModalOpen={createModal}
        setIsModalOpen={setCreateModal}
      />
      <UpdateBlogComment
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

export default blogcomments;
