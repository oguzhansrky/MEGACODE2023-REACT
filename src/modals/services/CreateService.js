import { Button, Form, Input, message, Modal, Spin, Upload } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { servicesService } from "@/services";
import { PlusOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;
const CreateService = ({ isModalOpen, setIsModalOpen }) => {
  const [createService] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    createService.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const [thumbnail, setThumbnail] = useState();
  const [images, setImages] = useState([]);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = createService.getFieldsValue();
      const data = new FormData();
      // Append form fields to FormData
      for (const key in formData) {
        if (formData[key]) data.append(key, formData[key]);
      }

      if (thumbnail) data.append("thumbnail", thumbnail);
      images.forEach((image, index) => {
        data.append(`images[${index}]`, image);
      });

      await servicesService.createService(data);
      messageApi.success("Servis başarıyla oluşturuldu.");
      setLoading(false);
      handleCancel();
    } catch (err) {
      setLoading(false);
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };

  const beforeThumbnailUpload = (file) => {
    setThumbnail(file);
    message.success(`${file.name} başarıyla yüklendi`);
    return false;
  };
  const beforeImagesUpload = (file) => {
    setImages((current) => [...current, file]);
    message.success(`${file.name} başarıyla yüklendi`);
  };

  const handleImageRemove = (file) => {
    const updatedImages = images.filter((img) => img.name !== file.name);
    setImages(updatedImages);
  };
  return (
    <>
      {contextHolder}
      <Modal
        width={1000}
        title="Servis Oluştur"
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
              form="create_service"
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
          id="create_service"
          className="my-4"
          form={createService}
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 20,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Başlık"
            name="title"
            rules={[
              {
                required: true,
                message: "Lütfen başlık giriniz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="İçerik"
            name="content"
            rules={[
              {
                required: true,
                message: "Lütfen içerik giriniz!",
              },
            ]}
          >
            <ReactQuill theme="snow" />
          </Form.Item>
          <Form.Item
            label="Açıklama"
            name="description"
            rules={[
              {
                required: true,
                message: "Lütfen içerik giriniz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Thumbnail">
            <Upload
              maxCount={1}
              beforeUpload={beforeThumbnailUpload}
              accept=".png, .jpeg, .jpg, .webp"
              listType="picture-card"
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Yükle</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="Resimler">
            <Upload
              multiple
              maxCount={5}
              beforeUpload={beforeImagesUpload}
              onRemove={handleImageRemove}
              accept=".png, .jpeg, .jpg, .webp"
              listType="picture-card"
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Yükle</div>
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateService;
