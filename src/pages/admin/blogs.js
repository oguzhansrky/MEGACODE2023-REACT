import { blogService, roleService } from "@/services";
import { Button, message, Space, Table } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "antd";
import PageHead from "@/layout/head/Head";
import DeleteConfirm from "@/modals/DeleteConfirm";
import CreateRole from "@/modals/roles/CreateRole";
import UpdateRole from "@/modals/roles/UpdateRole";
import Image from "next/image";
import Link from "next/link";
import CreateBlog from "@/modals/blogs/CreateBlog";
import { getBlogs } from "@/services/blogService";
import UpdateBlog from "@/modals/blogs/UpdateBlog";

const Blogs = () => {
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
    router.push({ pathname, search: decodeURIComponent(searchParams) });
    if (searchParams.has("page")) loadData();
  }, [searchParams]);
  const loadData = async () => {
    try {
      const blogs = await blogService.getBlogs(
        decodeURIComponent(searchParams)
      );
      setData(blogs.payload.blogs);
      setMeta(blogs.meta);
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
      title: "Blog",
      dataIndex: "title",
      key: "title",
      render: (blog, field) => (
        <Link href={`/blog/${field?.slug}`}>
          <div className="d-flex align-items-center">
            {field?.thumbnail && (
              <Image
                className="me-2"
                width={80}
                height={50}
                src={field?.thumbnail}
              />
            )}
            <span>{blog}</span>
          </div>
        </Link>
      ),
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
      render: (category) => <span>{category?.name}</span>,
    },
    {
      title: "Durum",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        switch (status) {
          case "public":
            return <span>Yayında</span>;
          case "archived":
            return <span>Arşivde</span>;

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
      await blogService.deleteBlog(formData?.id);
      messageApi.success("Blog başarıyla silindi.");
      setDeleteModal(false);
    } catch (err) {
      console.error(err);
      messageApi.error(err.response?.data?.message);
    }
  };
  return (
    <>
      {contextHolder}
      <PageHead title="Bloglar"></PageHead>
      <div className="mx-5">
        <div className="d-flex justify-content-between my-4">
          <h3>Bloglar</h3>
          <Button onClick={() => setCreateModal(true)}>Blog Oluştur</Button>
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
            showTotal={(total) => `Toplam ${total} blog`}
          />
        </div>
      </div>
      <CreateBlog isModalOpen={createModal} setIsModalOpen={setCreateModal} />
      <UpdateBlog
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

export default Blogs;
