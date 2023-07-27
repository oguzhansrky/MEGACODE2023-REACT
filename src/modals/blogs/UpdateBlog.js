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

const UpdateBlog = ({ isModalOpen, setIsModalOpen, formData }) => {
  const [updateBlog] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const [fileList, setFileList] = useState();
  const handleCancel = () => {
    updateBlog.resetFields();
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const [thumbnail, setThumbnail] = useState();
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formdata = updateBlog.getFieldsValue();
      const data = new FormData();
      // Append form fields to FormData
      for (const key in formdata) {
        if (formdata[key]) data.append(key, formdata[key]);
      }
      data.append("thumbnail", thumbnail);
      await blogService.updateBlog(data, formData?.id);
      messageApi.success("Blog başarıyla güncellendi.");
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

  useEffect(() => {
    updateBlog.setFieldsValue(formData);
    setFileList([
      {
        uid: "1",
        name: formData?.thumbnail.split("/").pop(),
        status: "done",
        url: formData?.thumbnail,
      },
    ]);
  }, [updateBlog, isModalOpen]);

  const handleChange = ({ file, fileList }) => {
    if (file.status === "done") {
      setThumbnail(file);
      message.success(`${file.name} başarıyla yüklendi`);
    }
    setFileList(fileList);
  };

  const beforeUpload = (file) => {
    // Perform any necessary actions with the file here, for example, setting the thumbnail.
    setThumbnail(file);
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileURL = e.target.result;
      setFileList([
        {
          uid: file.uid,
          name: file.name,
          status: "done",
          url: fileURL,
        },
      ]);
    };

    reader.readAsDataURL(file);

    message.success(`${file.name} başarıyla yüklendi`);

    // Return false to prevent the file from being uploaded.
    return false;
  };
  return (
    <>
      {contextHolder}
      <Modal
        width={1000}
        title="Blog Güncelle"
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
              form="update_blog"
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
          id="update_blog"
          className="my-4"
          form={updateBlog}
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
              fileList={fileList}
              beforeUpload={beforeUpload}
              handleChange={handleChange}
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
        </Form>
      </Modal>
    </>
  );
};

export default UpdateBlog;
