import { Button, Form, Input, message, Modal, Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { userService } from "@/services";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

const CreateUser = ({ isModalOpen, setIsModalOpen, loadData }) => {
  const [createUser] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    createUser.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      await userService.createUser({ ...values, role_id: 1 });
      messageApi.success("Kullanıcı başarıyla oluşturuldu.");
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
        title="Kullanıcı Oluştur"
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
              form="create_user"
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
          id="create_user"
          className="my-4"
          form={createUser}
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
            label="İsim Soyisim"
            name="full_name"
            rules={[
              {
                required: true,
                message: "Lütfen isim soyisim giriniz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="E-Mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Lütfen e-mail adresi giriniz!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Şifre"
            name="password"
            rules={[
              {
                required: true,
                message: "Lütfen şifre giriniz!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateUser;
