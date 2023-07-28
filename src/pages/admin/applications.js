import { Button, message, Space, Table } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "antd";
import PageHead from "@/layout/head/Head";
import DeleteConfirm from "@/modals/DeleteConfirm";

import _ from "lodash";

import { applicationService } from "@/services";
import { parseCookies } from "@/utils";

const Application = () => {
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
      const jobapplication = await applicationService.getJobApplication(
        decodeURIComponent(searchParams)
      );
      setData(jobapplication.payload.applications);
      setMeta(jobapplication.meta);
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
      title: "İsim",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Soyisim",
      dataIndex: "last_name",
      key: "Last_name",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Telefon",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "İkamet Yeri",
      dataIndex: "place_of_residence",
      key: "place_of_residence",
    },
    {
      title: "Ön Yazı",
      dataIndex: "cover_letter",
      key: "cover_letter",
      render: (cover_letter) => {
        return (
          <span>
            {_.truncate(cover_letter, {
              length: 115,
              omission: "...",
            })}
          </span>
        );
      },
    },
    {
      title: "İş İlanı",
      dataIndex: "post",
      key: "post",
      render: (post) => <span>{post?.title}</span>,
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
          <a target="_blank" download={true} href={record?.resume}>
            CV İndir
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
      await applicationService.deleteJobApplication(formData?.id);
      messageApi.success("İş başvuruları başarıyla silindi.");
      setDeleteModal(false);
    } catch (err) {
      console.error(err);
      messageApi.error(err.response?.data?.message);
    }
  };
  return (
    <>
      {contextHolder}
      <PageHead title="İş Başvuruları"></PageHead>
      <div className="mx-5">
        <div className="d-flex justify-content-between my-4">
          <h3>İş Başvuruları</h3>
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

export default Application;
