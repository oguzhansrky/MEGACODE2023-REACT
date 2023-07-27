import { Button, Form, Input, message, Modal, Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

const CreateBlogComment = ({ isModalOpen, setIsModalOpen }) => {
  const [createBlogComment] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    createBlogComment.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await blogcommentService.createBlogComment({ ...values });
      messageApi.success("Blog Yorumları başarıyla oluşturuldu.");
      setLoading(false);
      handleCancel();
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
        title="Blog Yorumları Oluştur"
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
              form="create_blogcomment"
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
          id="create_blogcomment"
          className="my-4"
          form={createBlogComment}
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
            label="Blog Yorumu İsmi"
            name="name"
            rules={[
              {
                required: true,
                message: "Lütfen blog yorumu ismi giriniz!",
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

export default CreateBlogComment;
