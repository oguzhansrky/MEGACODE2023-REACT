import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Select,
  Spin,
  Upload,
} from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { blogService, categoriesService } from "@/services";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect } from "react";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;
const { TextArea } = Input;

const CreateBlog = ({ isModalOpen, setIsModalOpen }) => {
  const [createBlog] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const handleCancel = () => {
    createBlog.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const [thumbnail, setThumbnail] = useState();
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = createBlog.getFieldsValue();
      const data = new FormData();
      // Append form fields to FormData
      for (const key in formData) {
        if (formData[key]) data.append(key, formData[key]);
      }

      if (thumbnail) data.append("thumbnail", thumbnail);
      await blogService.createBlog(data);
      messageApi.success("Blog başarıyla oluşturuldu.");
      setLoading(false);
      handleCancel();
    } catch (err) {
      setLoading(false);
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };

  const getCategories = async () => {
    try {
      const categories = await categoriesService.getCategories();
      setCategories(categories.payload.categories);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const beforeUpload = (file) => {
    setThumbnail(file);
    message.success(`${file.name} başarıyla yüklendi`);
    return false;
  };
  return (
    <>
      {contextHolder}
      <Modal
        width={1000}
        title="Blog Oluştur"
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
              form="create_blog"
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
          id="create_blog"
          className="my-4"
          form={createBlog}
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
          <Form.Item label="URL" name="slug">
            <Input />
          </Form.Item>
          <Form.Item label="Video URL (Youtube)" name="video_url">
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
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Durum"
            name="status"
            rules={[
              {
                required: true,
                message: "Lütfen durum seçiniz!",
              },
            ]}
          >
            <Select>
              <Select.Option value="public">Yayında</Select.Option>
              <Select.Option value="archived">Arşivli</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Kategori"
            name="category_id"
            rules={[
              {
                required: true,
                message: "Lütfen kategori seçiniz!",
              },
            ]}
          >
            <Select>
              {categories &&
                categories.map((item) => (
                  <Select.Option value={item.id}>{item.name}</Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item label="Resim">
            <Upload
              maxCount={1}
              beforeUpload={beforeUpload}
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

export default CreateBlog;
