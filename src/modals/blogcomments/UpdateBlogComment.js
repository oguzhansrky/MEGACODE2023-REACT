import { Button, Form, Input, message, Modal, Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import {
  blogcommentService,
  categoriesService,
  roleService,
  userService,
} from "@/services";
import { pickBy } from "lodash";
import { useEffect } from "react";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;
const UpdateBlogComment = ({ isModalOpen, setIsModalOpen, formData }) => {
  const [updateBlogComment] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    updateBlogComment.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    setLoading(true);
    const sanitizedData = pickBy(values, (value) => value?.length > 0);
    try {
      await blogcommentService.updateBlogComment(
        {
          ...sanitizedData,
        },
        formData?.id
      );
      messageApi.success("Blog içeriği başarıyla güncellendi.");
      setLoading(false);
      handleCancel();
    } catch (err) {
      setLoading(false);
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };

  useEffect(() => {
    updateBlogComment.setFieldsValue({
      name: formData?.name || "",
    });
  }, [updateBlogComment, isModalOpen]);
  return (
    <>
      {contextHolder}
      <Modal
        title="Blog İçeriği Güncelle"
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
              form="update_blogcomment"
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
          id="update_blogcomment"
          className="my-4"
          form={updateBlogComment}
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
          <Form.Item label="Blog İçeriği" name="name">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateBlogComment;
