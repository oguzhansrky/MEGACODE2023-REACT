import { Button, Form, Input, message, Modal, Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { userService } from "@/services";
import { pickBy } from "lodash";
import { useEffect } from "react";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;
const UpdateUser = ({ isModalOpen, setIsModalOpen, formData }) => {
  console.log(formData);
  const [updateUser] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    setLoading(true);
    const sanitizedData = pickBy(values, (value) => value?.length > 0);
    try {
      await userService.updateUser(
        {
          ...sanitizedData,
          role_id: 1,
        },
        formData?.id
      );
      messageApi.success("Kullanıcı başarıyla güncellendi.");
      setLoading(false);
      setTimeout(() => {
        handleCancel();
      }, 1000);
    } catch (err) {
      setLoading(false);
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };

  useEffect(() => {
    updateUser.setFieldsValue({
      full_name: formData?.full_name || "",
      email: formData?.email || "",
    });
  }, [formData, updateUser]);
  return (
    <>
      {contextHolder}
      <Modal
        title="Kullanıcı Güncelle"
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
              Güncelle
            </Button>
          </Form.Item>
        }
      >
        <Form
          id="create_user"
          className="my-4"
          form={updateUser}
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
          <Form.Item label="İsim Soyisim" name="full_name">
            <Input />
          </Form.Item>
          <Form.Item label="E-Mail" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="Şifre" name="password">
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateUser;
