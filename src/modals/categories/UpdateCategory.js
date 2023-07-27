import { Button, Form, Input, message, Modal, Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { categoriesService, roleService, userService } from "@/services";
import { pickBy } from "lodash";
import { useEffect } from "react";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;
const UpdateCategory = ({ isModalOpen, setIsModalOpen, formData }) => {
  const [updateCategory] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    updateCategory.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    setLoading(true);
    const sanitizedData = pickBy(values, (value) => value?.length > 0);
    try {
      await categoriesService.updateCategory(
        {
          ...sanitizedData,
        },
        formData?.id
      );
      messageApi.success("Kategori başarıyla güncellendi.");
      setLoading(false);
      handleCancel();
    } catch (err) {
      setLoading(false);
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };

  useEffect(() => {
    updateCategory.setFieldsValue({
      name: formData?.name || "",
    });
  }, [updateCategory, isModalOpen]);
  return (
    <>
      {contextHolder}
      <Modal
        title="Kategori Güncelle"
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
              form="update_category"
              htmlType="submit"
            >
              {loading && (
                <Spin className="text-white mr-2" indicator={antIcon} />
              )}
              Güncelle
            </Button>
          </Form.Item>
        }
      >
        <Form
          id="update_category"
          className="my-4"
          form={updateCategory}
          initialValues={formData}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item label="Kategori İsmi" name="name">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateCategory;
