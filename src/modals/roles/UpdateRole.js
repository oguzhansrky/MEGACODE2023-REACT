import { Button, Form, Input, message, Modal, Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { roleService, userService } from "@/services";
import { pickBy } from "lodash";
import { useEffect } from "react";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;
const UpdateRole = ({ isModalOpen, setIsModalOpen, formData }) => {
  const [updateRole] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    updateRole.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    setLoading(true);
    const sanitizedData = pickBy(values, (value) => value?.length > 0);
    try {
      await roleService.updateRole(
        {
          ...sanitizedData,
        },
        formData?.id
      );
      messageApi.success("Rol başarıyla güncellendi.");
      setLoading(false);
      handleCancel();
    } catch (err) {
      setLoading(false);
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };

  useEffect(() => {
    updateRole.setFieldsValue({
      name: formData?.name || "",
    });
  }, [updateRole, isModalOpen]);
  return (
    <>
      {contextHolder}
      <Modal
        title="Rol Güncelle"
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
              form="update_role"
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
          id="update_role"
          className="my-4"
          form={updateRole}
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
          <Form.Item label="Rol İsmi" name="name">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateRole;
