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

const blogcomments = () => {
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
    router.push({ pathname, search: decodeURIComponent(searchParams) });
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
      title: "İsim Soyisim",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Yorum",
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
      title: "Durum",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        console.log(status);
        switch (status) {
          case "approved":
            return <span className="text-success">Onaylı</span>;
          case "unapproved":
            return <span className="text-danger">Onaylanmadı</span>;
          case "pending":
            return <span className="text-warning">Onay Bekliyor</span>;
          default:
            return <span>-</span>;
        }
      },
    },
    {
      title: "Blog",
      dataIndex: "blog_id",
      key: "blog_id",
    },
    {
      title: "Oluşturma Tarihi",
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => <span>{moment(date).format("DD.MM.YYYY mm:s")}</span>,
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
      await blogcommentService.deleteBlogComment(formData?.id);
      messageApi.success("Blog Yorumları başarıyla silindi.");
      setDeleteModal(false);
    } catch (err) {
      console.error(err);
      messageApi.error(err.response?.data?.message);
    }
  };
  return (
    <>
      {contextHolder}
      <PageHead title="Blog Yorumları"></PageHead>
      <div className="mx-5">
        <div className="d-flex justify-content-between my-4">
          <h3>Blog Yorumları</h3>
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

export default blogcomments;
