import { blogService, jobPostsService } from "@/services";
import { Button, message, Space, Table } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "antd";
import PageHead from "@/layout/head/Head";
import DeleteConfirm from "@/modals/DeleteConfirm";
import Link from "next/link";
import { parseCookies } from "@/utils";
import CreateJobPost from "@/modals/jobPosts/CreateJobPost";
import UpdateJobPost from "@/modals/jobPosts/UpdateJobPost";
import useTranslation from "next-translate/useTranslation";

const JobPosts = () => {
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
      const jobPosts = await jobPostsService.getJobPosts(
        decodeURIComponent(searchParams)
      );
      setData(jobPosts.payload.jobPosts);
      setMeta(jobPosts.meta);
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
      title: t("admin_panel_job_post.title_title"),
      dataIndex: "title",
      key: "title",
      render: (title, field) => (
        <Link href={`/career/${field?.slug}`}>
          <div className="d-flex align-items-center">
            <span>{title}</span>
          </div>
        </Link>
      ),
    },
    {
      title: t("admin_panel_job_post.title_deadline"),
      dataIndex: "deadline",
      key: "deadline",
      render: (deadline) => (
        <span>{moment(deadline).format("DD.MM.YYYY")}</span>
      ),
    },
    {
      title: t("admin_panel_job_post.title_status"),
      dataIndex: "status",
      key: "status",
      render: (status) => {
        switch (status) {
          case "public":
            return <span className="text-success fw-bold">{t("admin_panel_job_post.text_success")}</span>;
          case "archived":
            return <span className="text-warning fw-bold">{t("admin_panel_job_post.text_warning")}</span>;

          default:
            break;
        }
      },
    },
    {
      title: t("admin_panel_job_post.title_created_at"),
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => <span>{moment(date).format("DD.MM.YYYY hh:mm")}</span>,
    },
    {
      title: t("admin_panel_job_post.title_action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setFormData(record);
              setUpdateModal(true);
            }}
          >
            {t("admin_panel_job_post.text_edit")}
          </a>
          <a
            onClick={() => {
              setFormData(record);
              setDeleteModal(true);
            }}
          >
            {t("admin_panel_job_post.text_delete")}
          </a>
        </Space>
      ),
    },
  ];

  const handleDelete = async () => {
    try {
      await jobPostsService.deleteJobPost(formData?.id);
      messageApi.success(t("admin_panel_job_post.message_api"));
      setDeleteModal(false);
    } catch (err) {
      console.error(err);
      messageApi.error(err.response?.data?.message);
    }
  };
  return (
    <>
      {contextHolder}
      <PageHead title={t("admin_panel_job_post.pagehead_title")}></PageHead>
      <div className="mx-5">
        <div className="d-flex justify-content-between my-4">
          <h3>{t("admin_panel_job_post.h3_text")}</h3>
          <Button onClick={() => setCreateModal(true)}>{t("admin_panel_job_post.set_created")}</Button>
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
            showTotal={(total) => `Toplam ${total} iş ilanı`}
          />
        </div>
      </div>
      <CreateJobPost
        isModalOpen={createModal}
        setIsModalOpen={setCreateModal}
      />
      <UpdateJobPost
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
export default JobPosts;
