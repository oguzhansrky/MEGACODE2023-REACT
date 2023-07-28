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

const JobPosts = () => {
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
      title: "Başlık",
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
      title: "Bitiş Tarihi",
      dataIndex: "deadline",
      key: "deadline",
      render: (deadline) => (
        <span>{moment(deadline).format("DD.MM.YYYY")}</span>
      ),
    },
    {
      title: "Durum",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        switch (status) {
          case "public":
            return <span className="text-success fw-bold">Yayında</span>;
          case "archived":
            return <span className="text-warning fw-bold">Arşivde</span>;

          default:
            break;
        }
      },
    },
    {
      title: "Oluşturma Tarihi",
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => <span>{moment(date).format("DD.MM.YYYY hh:mm")}</span>,
    },
    {
      title: "İşlem",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setFormData(record);
              setUpdateModal(true);
            }}
          >
            Düzenle
          </a>
          <a
            onClick={() => {
              setFormData(record);
              setDeleteModal(true);
            }}
          >
            Sil
          </a>
        </Space>
      ),
    },
  ];

  const handleDelete = async () => {
    try {
      await jobPostsService.deleteJobPost(formData?.id);
      messageApi.success("İş ilanı başarıyla silindi.");
      setDeleteModal(false);
    } catch (err) {
      console.error(err);
      messageApi.error(err.response?.data?.message);
    }
  };
  return (
    <>
      {contextHolder}
      <PageHead title="İş İlanları"></PageHead>
      <div className="mx-5">
        <div className="d-flex justify-content-between my-4">
          <h3>İş İlanları</h3>
          <Button onClick={() => setCreateModal(true)}>İş İlanı Oluştur</Button>
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
