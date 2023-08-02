import { Button, Form, Input, message, Modal, Spin, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { servicesService } from "@/services";
import { PlusOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

const UpdateService = ({ isModalOpen, setIsModalOpen, formData }) => {
  const [updateService] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState();
  const [images, setImages] = useState([]);
  const handleCancel = () => {
    updateService.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const [thumbnail, setThumbnail] = useState(null);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formdata = updateService.getFieldsValue();
      const data = new FormData();

      // Append form fields to FormData
      if (thumbnail) data.append("thumbnail", thumbnail);
      images.forEach((image, index) => {
        data.append(`images[${index}]`, image);
      });

      for (const key in formdata) {
        if (formdata[key]) data.append(key, formdata[key]);
      }

      await servicesService.updateService(data, formData?.id);
      messageApi.success("Servis başarıyla güncellendi.");
      setLoading(false);
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
        title="Servis Güncelle"
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
              form="update_service"
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
          id="update_service"
          className="my-4"
          initialValues={formData}
          form={updateService}
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
            <ReactQuill theme="snow" value={formData?.content} />
          </Form.Item>
          <Form.Item
            label="Açıklama"
            name="description"
            rules={[
              {
                required: true,
                message: "Lütfen açıklama giriniz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Thumbnail">
            <Upload
              maxCount={1}
              fileList={fileList}
              beforeUpload={beforeThumbnailUpload}
              onRemove={() => setFileList([])}
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
              maxCount={5}
              multiple
              fileList={fileList}
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

export default UpdateService;
