import { blogService, servicesService } from "@/services";
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
import useTranslation from "next-translate/useTranslation";
import CreateService from "@/modals/services/CreateService";
import UpdateService from "@/modals/services/UpdateService";
import _ from "lodash";
import Image from "next/image";

const Services = () => {
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
      const services = await servicesService.getServices(
        decodeURIComponent(searchParams) + "&status=any"
      );
      setData(services.payload.services);
      setMeta(services.meta);
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

      render: (services, field) => (
        <Link href={`/services/${field?.slug}`}>
          <div className="d-flex align-items-center">
            {field?.thumbnail && (
              <Image
                className="me-2"
                width={70}
                height={50}
                src={field?.thumbnail}
              />
            )}

            <span>{services}</span>
          </div>
        </Link>
      ),
    },

    {
      title: "Açıklama",
      dataIndex: "description",
      key: "description",
      render: (description) => {
        return (
          <span>
            {_.truncate(description, {
              length: 115,
              omission: "...",
            })}
          </span>
        );
      },
    },
    {
      title: "Tarih",
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => <span>{moment(date).format("DD.MM.YYYY hh:mm")}</span>,
    },
    {
      title: "Olay",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setFormData(record);
              setUpdateModal(true);
            }}
          >
            {t("admin_panel_blog.text_edit")}
          </a>
          <a
            onClick={() => {
              setFormData(record);
              setDeleteModal(true);
            }}
          >
            {t("admin_panel_blog.text_delete")}
          </a>
        </Space>
      ),
    },
  ];

  const handleDelete = async () => {
    try {
      await servicesService.deleteService(formData?.id);
      messageApi.success(t("admin_panel_blog.message_api")); // $translate
      setDeleteModal(false);
    } catch (err) {
      console.error(err);
      messageApi.error(err.response?.data?.message);
    }
  };
  return (
    <>
      {contextHolder}
      <PageHead title={t("admin_panel_blog.pagehead_title_ blog")}></PageHead>
      <div className="mx-5">
        <div className="d-flex justify-content-between my-4">
          <h3>Servis</h3>
          <Button onClick={() => setCreateModal(true)}>Servis Add </Button>
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
      <CreateService
        isModalOpen={createModal}
        setIsModalOpen={setCreateModal}
      />
      <UpdateService
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
export default Services;
