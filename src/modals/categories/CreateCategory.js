import { Button, Form, Input, message, Modal, Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { categoriesService } from "@/services";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

const CreateCategory = ({ isModalOpen, setIsModalOpen, loadData }) => {
  const [createCategory] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    createCategory.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await categoriesService.createCategory({ ...values });
      messageApi.success("Kategori başarıyla oluşturuldu.");
      setLoading(false);
      handleCancel();
      loadData();
    } catch (err) {
      setLoading(false);
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Kategori Oluştur"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              className="mt-2 bg-primary text-white"
              form="create_category"
              htmlType="submit"
            >
              {loading && (
                <Spin className="text-white mr-2" indicator={antIcon} />
              )}
              Oluştur
            </Button>
          </Form.Item>
        }
      >
        <Form
          id="create_category"
          className="my-4"
          form={createCategory}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Kategori İsmi"
            name="name"
            rules={[
              {
                required: true,
                message: "Lütfen kategori ismi giriniz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateCategory;
