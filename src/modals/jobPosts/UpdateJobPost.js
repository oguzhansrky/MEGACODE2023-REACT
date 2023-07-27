import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Select,
  Spin,
  ConfigProvider,
} from "antd";
import locale from "antd/locale/tr_TR";
import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { jobPostsService } from "@/services";
import { TagsInput } from "react-tag-input-component";
import { v4 as uuid } from "uuid";
import "dayjs/locale/tr";
import dayjs from "dayjs";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

const UpdateJobPost = ({ isModalOpen, setIsModalOpen, formData }) => {
  const workplaces = [
    { label: "İşyerinde", value: "on_site" },
    { label: "Hibrit", value: "hybrid" },
    { label: "Remote", value: "remote" },
  ];

  const employments = [
    { label: "Tam zamanlı", value: "full_time" },
    { label: "Yarı zamanlı", value: "part_time" },
  ];

  const listsInitialValue = {
    expectations: [],
    requirements: [],
    additional: [],
    benefits: [],
  };

  const [updateJobPost] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState(listsInitialValue);
  const [deadline, setDeadline] = useState(null);
  const handleCancel = () => {
    updateJobPost.resetFields();
    setDeadline(null);
    setLists(listsInitialValue);
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const handleSubmit = async (values) => {
    const listValuesArr = Object.keys(lists).map((item) => {
      const mergedValues =
        lists[item].length > 0 ? JSON.stringify(lists[item]) : null;
      return { [item]: mergedValues };
    });

    const listValues = listValuesArr.reduce((result, currentObject) => {
      return { ...result, ...currentObject };
    }, {});
    setLoading(true);
    try {
      await jobPostsService.updateJobPost(
        {
          ...listValues,
          ...values,
          deadline: deadline?.toISOString(),
        },
        formData?.id
      );
      messageApi.success("İş ilanı başarıyla güncellendi.");
      setLoading(false);
      handleCancel();
    } catch (err) {
      setLoading(false);
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };

  useEffect(() => {
    updateJobPost.setFieldsValue(formData);
    setDeadline(formData?.deadline ? dayjs(formData?.deadline) : null);
    setLists({
      expectations: formData?.expectations
        ? JSON.parse(formData?.expectations)
        : [],
      requirements: formData?.requirements
        ? JSON.parse(formData?.requirements)
        : [],
      additional: formData?.additional ? JSON.parse(formData?.additional) : [],
      benefits: formData?.benefits ? JSON.parse(formData?.benefits) : [],
    });
  }, [updateJobPost, isModalOpen]);

  return (
    <>
      {contextHolder}
      <Modal
        width={1000}
        title="İş İlanı Güncelle"
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
              form="update_job_post"
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
          id="update_job_post"
          className="my-4"
          form={updateJobPost}
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
            <Input placeholder="Başlık" />
          </Form.Item>
          <Form.Item label="URL" name="slug">
            <Input placeholder="URL" />
          </Form.Item>
          <Form.Item label="Beklentiler">
            <TagsInput
              value={lists?.expectations}
              onChange={(value) =>
                setLists((current) => ({
                  ...current,
                  expectations: value,
                }))
              }
              name="expectations"
              placeHolder="Beklentiler"
            />
          </Form.Item>
          <Form.Item label="Gereklilikler">
            <TagsInput
              value={lists?.requirements}
              onChange={(value) =>
                setLists((current) => ({
                  ...current,
                  requirements: value,
                }))
              }
              name="requirements"
              placeHolder="Gereklilikler"
            />
          </Form.Item>
          <Form.Item label="Ek Olarak">
            <TagsInput
              value={lists?.additional}
              onChange={(value) =>
                setLists((current) => ({
                  ...current,
                  additional: value,
                }))
              }
              name="additional"
              placeHolder="Ek Olarak"
            />
          </Form.Item>
          <Form.Item label="İşyeri İmkanları (Faydalar)">
            <TagsInput
              value={lists?.benefits}
              onChange={(value) =>
                setLists((current) => ({
                  ...current,
                  benefits: value,
                }))
              }
              name="additional"
              placeHolder="İşyeri İmkanları"
            />
          </Form.Item>
          <Form.Item label="İşyeri" name="workplace">
            <Select placeholder="İşyeri">
              {workplaces.map((item) => (
                <>
                  <React.Fragment key={uuid()}>
                    <Select.Option value={item.value}>
                      {item.label}
                    </Select.Option>
                  </React.Fragment>
                </>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Çalışma Şekli" name="employment">
            <Select placeholder="Çalışma Şekli">
              {employments.map((item) => (
                <>
                  <React.Fragment key={uuid()}>
                    <Select.Option value={item.value}>
                      {item.label}
                    </Select.Option>
                  </React.Fragment>
                </>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Tecrübe" name="experience">
            <Input placeholder="Örn: 1-3 Yıl Arası" />
          </Form.Item>
          <Form.Item label="Son Başvuru Tarihi" name="deadline">
            <ConfigProvider locale={locale}>
              <DatePicker
                defaultValue={deadline}
                format="DD.MM.YYYY"
                onChange={(value) => setDeadline(value)}
                style={{ width: "100%" }}
              />
            </ConfigProvider>
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
            <Select placeholder="Durum">
              <Select.Option value="public">Yayında</Select.Option>
              <Select.Option value="archived">Arşivli</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateJobPost;
