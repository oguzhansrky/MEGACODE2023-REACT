import { Button, Form, Input, message, Modal, Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { roleService } from "@/services";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

const CreateRole = ({ isModalOpen, setIsModalOpen }) => {
  const [createRole] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    createRole.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await roleService.createRole({ ...values });
      messageApi.success("Rol başarıyla oluşturuldu.");
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
        title="Rol Oluştur"
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
              form="create_role"
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
          id="create_role"
          className="my-4"
          form={createRole}
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
            label="Rol İsmi"
            name="name"
            rules={[
              {
                required: true,
                message: "Lütfen rol ismi giriniz!",
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

export default CreateRole;
